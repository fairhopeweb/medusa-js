import * as rax from "retry-axios"
import axios, { AxiosError, AxiosInstance } from "axios"
import { v4 as uuidv4 } from "uuid"
import * as Types from "./types"
import { RequestOptions } from "./types"

export interface Config {
  baseUrl: string
  maxRetries: number
  secretKey?: string
}

const defaultConfig = {
  maxRetries: 0,
  baseUrl: "http://localhost:9000",
}

class Client {
  private axiosClient: AxiosInstance
  private config: Config

  constructor(config: Config) {
    /** @private @constant {AxiosInstance} */
    this.axiosClient = this.createClient({ ...defaultConfig, ...config })

    /** @private @constant {string} */
    if (config.secretKey && typeof config.secretKey !== `string`) {
      throw new Error(
        "Medusa: Something is wrong with your API key. Please check, that you are initializing Medusa with the key as first argument and optional config as second."
      )
    }

    /** @private @constant {Config} */
    this.config = { ...defaultConfig, ...config }
  }

  shouldRetryCondition(
    err: AxiosError,
    numRetries: number,
    maxRetries: number
  ) {
    // Obviously, if we have reached max. retries we stop
    if (numRetries >= maxRetries) {
      return false
    }

    // If no response, we assume a connection error and retry
    if (!err.response) {
      return true
    }

    // Retry on conflicts
    if (err.response.status === 409) {
      return true
    }

    // All 5xx errors are retried
    // OBS: We are currently not retrying 500 requests, since our core needs proper error handling.
    //      At the moment, 500 will be returned on all errors, that are not of type MedusaError.
    if (err.response.status > 500 && err.response.status <= 599) {
      return true
    }

    return false
  }

  /**
   * Stolen from https://github.com/stripe/stripe-node/blob/fd0a597064289b8c82f374f4747d634050739043/lib/utils.js#L282
   */
  normalizeHeaders(obj: object) {
    if (!(obj && typeof obj === "object")) {
      return obj
    }

    return Object.keys(obj).reduce((result, header) => {
      result[this.normalizeHeader(header)] = obj[header]
      return result
    }, {})
  }

  /**
   * Stolen from https://github.com/marten-de-vries/header-case-normalizer/blob/master/index.js#L36-L41
   */
  normalizeHeader(header: string) {
    return header
      .split("-")
      .map(
        (text) => text.charAt(0).toUpperCase() + text.substr(1).toLowerCase()
      )
      .join("-")
  }

  /**
   * Creates all the initial headers.
   * We add the idempotency key, if the request is configured to retry.
   * @param config user supplied configurations
   * @return AxiosInstance
   */
  setHeaders(userHeaders: object, method: Types.RequestMethod, path: string) {
    let defaultHeaders: object = {
      Accept: "application/json",
      "Content-Type": "application/json",
    }

    // if route is an authenticated route, add api key
    if (path.startsWith("/admin")) {
      defaultHeaders = {
        ...defaultHeaders,
        Authorization: `Bearer ${this.config.secretKey}`,
      }
    }

    // only add idempotency key, if we want to retry
    if (this.config.maxRetries > 0 && method === "POST") {
      defaultHeaders["Idempotency-Key"] = uuidv4()
    }

    return Object.assign({}, defaultHeaders, this.normalizeHeaders(userHeaders))
  }

  /**
   * Creates the axios client used for requests
   * As part of the creation, we configure the retry conditions
   * and the exponential backoff approach.
   * @param config user supplied configurations
   * @return AxiosInstance
   */
  createClient(config: Config) {
    const client = axios.create({
      baseURL: config.baseUrl,
    })

    rax.attach(client)

    client.defaults.raxConfig = {
      instance: client,
      retry: config.maxRetries,
      backoffType: "exponential",
      shouldRetry: (err) => {
        const cfg = rax.getConfig(err)
        return this.shouldRetryCondition(
          err,
          cfg.currentRetryAttempt,
          cfg.retry
        )
      },
    }

    return client
  }

  /**
   * Format the response data as:
   *  { cart: { id: "some_cart", ... } }
   * @param data Axios response data
   * @param status Axios response status code
   * @return The raw response
   */
  createRawResponse(data: object, status: number) {
    const res = { status }
    Object.entries(data).map(([key, value]) => {
      res[key] = value
    })

    return res as any // eslint-disable-line
  }

  async request(
    method: Types.RequestMethod,
    path: string,
    payload: object,
    options: RequestOptions
  ) {
    const reqOpts = {
      method,
      withCredentials: true,
      url: path,
      data: payload,
      json: true,
      headers: this.setHeaders(options, method, path),
    }

    const { data, status } = await this.axiosClient(reqOpts)

    return this.createRawResponse(data, status)
  }
}

export default Client
