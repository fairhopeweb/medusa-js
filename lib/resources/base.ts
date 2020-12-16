export default class BaseResource {
  public client: any;

  constructor(client) {
    this.client = client;
  }
}