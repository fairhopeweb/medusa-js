'use strict';

import BaseResource from './base';
import LineItemsResource from './line-items';
import { Types } from './../types';

class CartsResource extends BaseResource {
  public lineItems = new LineItemsResource(this.client.request);

  /**
   * Creates a cart
   * @param payload is optional and can contain a region_id and items.
   * The cart will contain the payload, if provided. Otherwise it will be empty
   * @returns AsyncResult<Cart>
   */
  create(payload?: Types.CartCreateResource): Types.AsyncResult<Types.Cart> {
    const path = `/store/carts`;
    return this.client.request('POST', path, payload);
  }

  /**
   * Retrieves a cart
   * @param cart_id is required
   * @returns AsyncResult<Cart>
   */
  retrieve(cart_id: string): Types.AsyncResult<Types.Cart> {
    const path = `/store/carts/${cart_id}`;
    return this.client.request('GET', path);
  }

  /**
   * Updates a cart
   * @param cart_id is required
   * @param payload is required and can contain region_id, email, billing and shipping address
   * @returns AsyncResult<Cart>
   */
  update(cart_id: string, payload: Types.CartUpdateResource): Types.AsyncResult<Types.Cart> {
    const path = `/store/carts/${cart_id}`;
    return this.client.request('POST', path, payload);
  }

  /**
   * Sets a shipping method
   * @param cart_id is required
   * @param payload is required and contains shipping option id
   * @returns AsyncResult<Cart>
   */
  setShippingMethod(cart_id: string, payload: Types.ShippingOption): Types.AsyncResult<Types.Cart> {
    const path = `/store/carts/${cart_id}/shipping-methods`;
    return this.client.request('POST', path, payload);
  }

  /**
   * Sets a payment method
   * @param cart_id is required
   * @param payload is required and contains payment option id
   * @returns AsyncResult<Cart>
   */
  setPaymentMethod(cart_id: string, payload: Types.PaymentOption): Types.AsyncResult<Types.Cart> {
    const path = `/store/carts/${cart_id}/payment-method`;
    return this.client.request('POST', path, payload);
  }

  /**
   * Sets a payment method
   * @param cart_id
   * @param provider_id
   * @returns AsyncResult<Cart>
   */
  clearPaymentSession(cart_id: string, provider_id: number): Types.AsyncResult<Types.Cart> {
    const path = `/store/carts/${cart_id}/payment-sessions/${provider_id}`;
    return this.client.request('DELETE', path);
  }

  /**
   * Updates the payment method
   * @param cart_id is required
   * @param provider_id is required
   * @param data is optional and contains TODO:
   * Used to hold any data that the shipping method may need to process the fulfillment of the order.
   * Look at the documentation for your installed fulfillment providers to find out what to send.
   */
  updatePaymentSession(cart_id: string, provider_id: number, data: object): Types.AsyncResult<Types.Cart> {
    const path = `/store/carts/${cart_id}/payment-sessions/${provider_id}`;
    return this.client.request('POST', path, data);
  }

  /**
   * @description Creates a payment session.
   * Initializes the payment sessions that can be used to pay for the items of the cart.
   * This is usually called when a customer proceeds to checkout.
   * @param cart_id is required
   * @returns AsyncResult<Cart>
   */
  createPaymentSessions(cart_id: string): Types.AsyncResult<Types.Cart> {
    const path = `/store/carts/${cart_id}/payment-sessions`;
    return this.client.request('POST', path);
  }

  /**
   * @description Deletes a payment session
   * @param cart_id is required
   * @param provider_id is required
   * @returns AsyncResult<Cart>
   */
  deletePaymentSession(cart_id: string, provider_id: string): Types.AsyncResult<Types.Cart> {
    const path = `/store/carts/${cart_id}/payment-sessions/${provider_id}`;
    return this.client.request('DELETE', path);
  }
}

export default CartsResource;
