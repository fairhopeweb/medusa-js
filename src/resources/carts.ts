'use strict';

import { Medusa } from 'medusa';
import BaseResource from './base';
import LineItemsResource from './line-items';

class CartsResource extends BaseResource {
  public lineItems = new LineItemsResource(this.client);

  create(param: Medusa.CartCreateParams): Promise<Medusa.Response<Medusa.Cart>> {
    const path = `/carts`;
    return this.client('POST', path, param);
  }

  retrieve(id: string): Promise<Medusa.Response<Medusa.Cart>> {
    const path = `/carts/${id}`;
    return this.client('GET', path);
  }

  update(id: string, param: Medusa.CartUpdateParams) {
    const path = `/carts/${id}`;
    return this.client('POST', path, param);
  }

  setShippingMethod(id: string, payload: any) {
    const path = `/carts/${id}/shipping-methods`;
    return this.client('POST', path, payload);
  }

  setPaymentMethod(id: string, method: Medusa.Method) {
    const path = `/carts/${id}/payment-method`;
    return this.client('POST', path, method);
  }

  clearPaymentSession(id: string, providerId:number) {
    const path = `/carts/${id}/payment-sessions/${providerId}`;
    return this.client('DELETE', path);
  }

  updatePaymentSession(id: string, providerId:number, data:object) {
    const path = `/carts/${id}/payment-sessions/${providerId}`;
    return this.client('POST', path, data);
  }

  createPaymentSessions(id: string) {
    const path = `/carts/${id}/payment-sessions`;
    return this.client('POST', path);
  }
}

export default CartsResource;
