import axios, { AxiosInstance } from 'axios';
import { RequestMethod } from './resources/shared';

export interface Config {
  baseUrl: string;
}

class Client {
  private axiosClient: AxiosInstance;

  constructor(config: Config) {
    this.axiosClient = axios.create({
      baseURL: config.baseUrl,
    });
  }

  request(method: RequestMethod, path: string, payload: object) {
    const options = {
      method,
      withCredentials: true,
      url: path,
      data: payload,
      json: true,
    };

    return this.axiosClient(options);
  }
}

export default Client;
