import * as rax from 'retry-axios';
import axios, { AxiosInstance } from 'axios';
import { v4 as uuidv4 } from 'uuid';
import * as Types from './types';

export interface Config {
  baseUrl: string;
  maxRetries: number;
}

const defaultConfig = {
  maxRetries: 3,
  baseUrl: 'http://localhost:9000',
};

class Client {
  private axiosClient: AxiosInstance;
  private config: Config;

  constructor(config: Config) {
    this.axiosClient = this.createClient({ ...defaultConfig, ...config });
    this.config = { ...defaultConfig, ...config };
  }

  shouldRetryCondition(err: any, numRetries: number, maxRetries: number) {
    // Obviously, if we have reached max. retries we stop
    if (numRetries >= maxRetries) {
      return false;
    }

    // If no response, we assume a connection error and retry
    if (!err.response) {
      return true;
    }

    // Retry on conflicts
    if (err.response.status === 409) {
      return true;
    }

    // all 5xx errors are retried
    if (err.response.status > 500 && err.response.status <= 599) {
      return true;
    }

    return false;
  }

  /**
   * Stolen from https://github.com/stripe/stripe-node/blob/fd0a597064289b8c82f374f4747d634050739043/lib/utils.js#L282
   */
  normalizeHeaders(obj: any) {
    if (!(obj && typeof obj === 'object')) {
      return obj;
    }

    return Object.keys(obj).reduce((result, header) => {
      result[this.normalizeHeader(header)] = obj[header];
      return result;
    }, {});
  }

  /**
   * Stolen from https://github.com/marten-de-vries/header-case-normalizer/blob/master/index.js#L36-L41
   */
  normalizeHeader(header: any) {
    return header
      .split('-')
      .map((text) => text.charAt(0).toUpperCase() + text.substr(1).toLowerCase())
      .join('-');
  }

  setHeaders(userHeaders: object, method: Types.RequestMethod) {
    const defaultHeaders = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'current-number': 1,
    };

    // only add idempotency key, if we want to retry
    if (this.config.maxRetries > 0 && method === 'POST') {
      defaultHeaders['Idempotency-Key'] = uuidv4();
    }

    return Object.assign(defaultHeaders, this.normalizeHeaders(userHeaders));
  }

  /**
   * Create the axios client used for requests
   * @param config user supplied configurations
   * @returns AxiosInstance
   */
  createClient(config: Config) {
    const client = axios.create({
      baseURL: config.baseUrl,
    });

    const interceptorId = rax.attach(client);

    client.defaults.raxConfig = {
      instance: client,
      retry: config.maxRetries,
      backoffType: 'exponential',
      shouldRetry: (err) => {
        const cfg = rax.getConfig(err);
        return this.shouldRetryCondition(err, cfg.currentRetryAttempt, cfg.retry);
      },
    };

    return client;
  }

  async request(method: Types.RequestMethod, path: string, payload: object, options: any = {}) {
    const reqOpts = {
      method,
      withCredentials: true,
      url: path,
      data: payload,
      json: true,
      headers: this.setHeaders(options.headers, method),
    };

    return this.axiosClient(reqOpts);
  }
}

export default Client;
