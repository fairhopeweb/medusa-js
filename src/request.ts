import axios, { AxiosInstance } from "axios";
import { Config } from "./config";

type Method = "DELETE" | "POST" | "GET"

class Client {

  private axiosClient_: AxiosInstance

  constructor(config: Config) {
    this.axiosClient_ = axios.create({
      baseURL: config.baseUrl
    });
  }

  request(method: Method, path: string, payload: Object) {
    const options = {
      method,
      withCredentials: true,
      url: path,
      data: payload,
      json: true,
    };

    return this.axiosClient_(options);
  }
};

export default Client;