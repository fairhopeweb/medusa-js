'use strict';

import BaseResource from './base';
import LineItemsResource, { Item } from './line-items';  
import { PaymentOption } from './payment';
import { Discount, Method, PaymentSession, Region, Response, Result, ShippingAddress, ShippingMethod } from './shared';
import { ShippingOption } from './shipping-options';

export interface Cart {
  _id: string
  region_id: string
  items: Item[]
  email: string
  customer_id: string 
  shipping_address: ShippingAddress
  discounts: Discount[]
  payment_session: PaymentSession
  shipping_methods: ShippingMethod
  shipping_total: number
  discount_total: number
  tax_total: number
  sub_total: number
  total: number
  region: Region
}

export interface CartCreatePayload {
  region_id?: string
  items?: Item[]
}

export interface CartUpdatePayload {
  id: string 
  region_id?: string 
  email?: string
  billing_address?: string 
  shipping_addres?: ShippingAddress
}

export interface CartRetrievePayload {
  id: string
}

class CartsResource extends BaseResource {
  public lineItems = new LineItemsResource(this.client);
  
  create(payload?: CartCreatePayload): Result<Cart> {
    const path = `/store/carts`;
    return this.client.request('POST', path, payload);
  }
  
  retrieve(cart_id: string): Result<Cart> {
    const path = `/store/carts/${cart_id}`;
    return this.client('GET', path);
  }

  update(cart_id: string, payload: CartUpdatePayload): Result<Cart> {
    const path = `store/carts/${cart_id}`;
    return this.client('POST', path, payload);
  }

  setShippingMethod(cart_id: string, payload: ShippingOption): Result<Cart> {
    const path = `/store/carts/${cart_id}/shipping-methods`;
    return this.client('POST', path, payload);
  }

  setPaymentMethod(cart_id: string, payload: PaymentOption): Result<Cart> {
    const path = `/store/carts/${cart_id}/payment-method`;
    return this.client('POST', path, payload);
  }

  clearPaymentSession(cart_id: string, provider_id:number): Result<Cart>  {
    const path = `/store/carts/${cart_id}/payment-sessions/${provider_id}`;
    return this.client('DELETE', path);
  }

  updatePaymentSession(cart_id: string, provider_id:number, data:object): Result<Cart> {
    const path = `/store/carts/${cart_id}/payment-sessions/${provider_id}`;
    return this.client('POST', path, data);
  }

  createPaymentSessions(cart_id: string): Result<Cart> {
    const path = `/store/carts/${cart_id}/payment-sessions`;
    return this.client('POST', path);
  }
}

export default CartsResource;
