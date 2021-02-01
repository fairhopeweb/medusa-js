import Client from './request';
import { Config } from './request';
import CartsResource from './resources/carts';
import CustomerResource from './resources/customer';
import OrdersResource from './resources/orders';
import ProductsResource from './resources/products';
import RegionsResource from './resources/regions';
import ShippingOptionsResource from './resources/shipping-options';
import SwapResource from './resources/swap';
import MedusaError from './error';

class Medusa {
  private client: Client;
  public carts: CartsResource;
  public customers: CustomerResource;
  public errors: MedusaError;
  public orders: OrdersResource;
  public products: ProductsResource;
  public regions: RegionsResource;
  public shippingOptions: ShippingOptionsResource;
  public swap: SwapResource;

  constructor(config: Config) {
    this.client = new Client(config);

    this.carts = new CartsResource(this.client);
    this.customers = new CustomerResource(this.client);
    this.errors = new MedusaError();
    this.orders = new OrdersResource(this.client);
    this.products = new ProductsResource(this.client);
    this.regions = new RegionsResource(this.client);
    this.shippingOptions = new ShippingOptionsResource(this.client);
    this.swap = new SwapResource(this.client);
  }
}

export default Medusa;
