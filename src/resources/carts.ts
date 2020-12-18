'use strict';

import BaseResource from './base';
import LineItemsResource, { Item } from './line-items';  
import { Discount, Method, PaymentSession, Region, Response, ShippingAddress, ShippingMethods } from './shared';

export interface Cart {
  _id: string
  region_id: string
  items: Item[]
  email: string
  customer_id: string 
  shipping_address: ShippingAddress
  discounts: Discount[]
  payment_session: PaymentSession
  shipping_methods: ShippingMethods
  shipping_total: number
  discount_total: number
  tax_total: number
  sub_total: number
  total: number
  region: Region
}

export interface CartCreateParams {
  region_id?: string
  items?: Item[]
}

export interface CartUpdateParams {
  id: string 
  region_id?: string 
  email?: string
  billing_address?: string 
  shipping_addres?: ShippingAddress
}

export interface CartRetrieveParams {
  id: string

}

class CartsResource extends BaseResource {
  public lineItems = new LineItemsResource(this.client);
  
  create(param: CartCreateParams): Promise<Response<Cart>> {
    const path = `/store/carts`;
    return this.client.request('POST', path, param);
  }
  
  retrieve(id: string): Promise<Response<Cart>> {
    const path = `/store/carts/${id}`;
    return this.client('GET', path);
  }

  update(id: string, param: CartUpdateParams) {
    const path = `store/carts/${id}`;
    return this.client('POST', path, param);
  }

  setShippingMethod(id: string, payload: any) {
    const path = `/store/carts/${id}/shipping-methods`;
    return this.client('POST', path, payload);
  }

  setPaymentMethod(id: string, method: Method) {
    const path = `/store/carts/${id}/payment-method`;
    return this.client('POST', path, method);
  }

  clearPaymentSession(id: string, providerId:number) {
    const path = `/store/carts/${id}/payment-sessions/${providerId}`;
    return this.client('DELETE', path);
  }

  updatePaymentSession(id: string, providerId:number, data:object) {
    const path = `/store/carts/${id}/payment-sessions/${providerId}`;
    return this.client('POST', path, data);
  }

  createPaymentSessions(id: string) {
    const path = `/store/carts/${id}/payment-sessions`;
    return this.client('POST', path);
  }
}

export default CartsResource;
