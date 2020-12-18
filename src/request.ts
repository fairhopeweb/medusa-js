import axios, { AxiosInstance } from 'axios';


export interface Config {
  baseUrl: string
}

class Client {
  private axiosClient: AxiosInstance;

  constructor(config: Config) {
    this.axiosClient = axios.create({
      baseURL: config.baseUrl,
    });
  }

  request(method: string, path: string, payload: object) {
    const options = {
      method,
      withCredentials: true,
      url: path,
      data: payload,
      json: true,
    };

    //return this.axiosClient(options);
  }
}

export default Client;