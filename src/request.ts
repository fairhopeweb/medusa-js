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
    if (err.response.status >= 500 && err.response.status <= 599) {
      return true;
    }

    return false;
  }

  setHeaders(userHeaders: object) {
    const defaultHeaders = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    // only add idempotency key, if we want to retry
    if (this.config.maxRetries > 0) {
      defaultHeaders['Idempotency-Key'] = uuidv4();
    }

    console.log('BeforE: ', defaultHeaders);
    console.log('After: ', userHeaders);

    return Object.assign(defaultHeaders, userHeaders);
  }

  /**
   * Create the axios client used for requests
   * @param config user supplied configurtaions
   * The cart will contain the payload, if provided. Otherwise it will be empty
   * @returns AsyncResult<{ cart: Cart }>
   */
  createClient(config: Config) {
    const client = axios.create({
      baseURL: config.baseUrl,
    });

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
      headers: this.setHeaders(options.headers),
    };

    console.log(reqOpts);

    return this.axiosClient(reqOpts);
  }
}

export default Client;
