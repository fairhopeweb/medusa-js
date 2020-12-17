import Client from './request';
import { Config } from './config';
import CartsResource from './resources/carts';
import OrdersResource from './resources/orders';
import ProductsResource from './resources/products';
import RegionsResource from './resources/regions';
import ShippingOptionsResource from './resources/shipping-options';

class Medusa {
  private client;
  public products;
  public carts;
  public orders;
  public shippingOptions;
  public regions;

  constructor(config: Config) {
    this.client = new Client(config);

    this.products = new ProductsResource(this.client);
    this.carts = new CartsResource(this.client);
    this.orders = new OrdersResource(this.client);
    this.shippingOptions = new ShippingOptionsResource(this.client);
    this.regions = new RegionsResource(this.client);
  }
}

export default Medusa;
