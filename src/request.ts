import axios, { AxiosInstance } from 'axios';
import { Config } from './config';
import { Medusa } from 'medusa'


class Client {
  private axiosClient: AxiosInstance;

  constructor(config: Config) {
    this.axiosClient = axios.create({
      baseURL: config.baseUrl,
    });
  }

  request(method: Medusa.Method, path: string, payload: object) {
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