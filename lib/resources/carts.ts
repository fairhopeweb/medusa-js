'use strict';

import { Cart } from "medusa";
import BaseResource from "./base";
import LineItemsResource from "./line-items";

class CartsResource extends BaseResource {

  public lineItems = new LineItemsResource(this.client);

  create(cart: Cart.CartCreateParams) {
    const path = `/carts`
    return this.client("POST", path, cart)
  }

  retrieve(id: string) {
    const path = `/carts/${id}`;
    return this.client("GET", path);
  }

  update(id: string, update: any) {
    const path = `/carts/${id}`;
    return this.client("POST", path, update);
  }

  setShippingMethod(id: string, payload: any) {
    const path = `/carts/${id}/shipping-methods`;
    return this.client("POST", path, payload);
  }

  setPaymentMethod(id: string, method) {
    const path = `/carts/${id}/payment-method`;
    return this.client("POST", path, method);
  }

  clearPaymentSession(id: string, providerId) {
    const path = `/carts/${id}/payment-sessions/${providerId}`;
    return this.client("DELETE", path);
  }

  updatePaymentSession(id: string, providerId, data) {
    const path = `/carts/${id}/payment-sessions/${providerId}`;
    return this.client("POST", path, data);
  }

  createPaymentSessions(id: string) {
    const path = `/carts/${id}/payment-sessions`;
    return this.client("POST", path);
  }
}

export default CartsResource;