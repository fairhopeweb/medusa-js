import BaseResource from "./base"
import LineItemsResource from "./line-items"
import * as Types from "../types"
import { CompleteCartResponse, RequestOptions } from "../types"

class CartsResource extends BaseResource {
  public lineItems = new LineItemsResource(this.client)

  /**
   * Adds a shipping method to cart
   * @param cart_id Id of cart
   * @param payload Containg id of shipping option and optional data
   * @return AsyncResult<{ cart: Cart }>
   */
  addShippingMethod(
    cart_id: string,
    payload: Types.ShippingOption,
    options: RequestOptions = {}
  ): Types.AsyncResult<{ cart: Types.Cart }> {
    const path = `/store/carts/${cart_id}/shipping-methods`
    return this.client.request("POST", path, payload, options)
  }

  /**
   * Completes a cart.
   * Payment authorization is attempted and if more work is required, we simply return the cart for further updates.
   * If payment is authorized and order is not yet created, we make sure to do so.
   * The completion of a cart can be performed idempotently with a provided header Idempotency-Key.
   * If not provided, we will generate one for the request.
   * @param cart_id is required
   * @return AsyncResult<CompleteCartResponse>
   */
  complete(
    cart_id: string,
    options: RequestOptions = {}
  ): Types.AsyncResult<CompleteCartResponse> {
    const path = `/store/carts/${cart_id}/complete`
    return this.client.request("POST", path, {}, options)
  }

  /**
   * Creates a cart
   * @param payload is optional and can contain a region_id and items.
   * The cart will contain the payload, if provided. Otherwise it will be empty
   * @return AsyncResult<{ cart: Cart }>
   */
  create(
    payload?: Types.CartCreateResource,
    options: RequestOptions = {}
  ): Types.AsyncResult<{ cart: Types.Cart }> {
    const path = `/store/carts`
    return this.client.request("POST", path, payload, options)
  }

  /**
   * Creates payment sessions.
   * Initializes the payment sessions that can be used to pay for the items of the cart.
   * This is usually called when a customer proceeds to checkout.
   * @param cart_id is required
   * @return AsyncResult<{ cart: Cart }>
   */
  createPaymentSessions(
    cart_id: string,
    options: RequestOptions = {}
  ): Types.AsyncResult<{ cart: Types.Cart }> {
    const path = `/store/carts/${cart_id}/payment-sessions`
    return this.client.request("POST", path, {}, options)
  }

  /**
   * Removes a discount from cart.
   * @param cart_id is required
   * @param code discount code to remove
   * @return AsyncResult<{ cart: Cart }>
   */
  deleteDiscount(
    cart_id: string,
    code: string,
    options: RequestOptions = {}
  ): Types.AsyncResult<{ cart: Types.Cart }> {
    const path = `/store/carts/${cart_id}/discounts/${code}`
    return this.client.request("DELETE", path, {}, options)
  }

  /**
   * Removes a payment session from a cart.
   * Can be useful in case a payment has failed
   * @param cart_id is required
   * @param provider_id the provider id of the session e.g. "stripe"
   * @return AsyncResult<{ cart: Cart }>
   */
  deletePaymentSession(
    cart_id: string,
    provider_id: string,
    options: RequestOptions = {}
  ): Types.AsyncResult<{ cart: Types.Cart }> {
    const path = `/store/carts/${cart_id}/payment-sessions/${provider_id}`
    return this.client.request("DELETE", path, {}, options)
  }

  /**
   * Refreshes a payment session.
   * @param cart_id is required
   * @param provider_id the provider id of the session e.g. "stripe"
   * @return AsyncResult<{ cart: Cart }>
   */
  refreshPaymentSession(
    cart_id: string,
    provider_id: string,
    options: RequestOptions = {}
  ): Types.AsyncResult<{ cart: Types.Cart }> {
    const path = `/store/carts/${cart_id}/payment-sessions/${provider_id}/refresh`
    return this.client.request("POST", path, {}, options)
  }

  /**
   * Retrieves a cart
   * @param cart_id is required
   * @return AsyncResult<{ cart: Cart }>
   */
  retrieve(
    cart_id: string,
    options: RequestOptions = {}
  ): Types.AsyncResult<{ cart: Types.Cart }> {
    const path = `/store/carts/${cart_id}`
    return this.client.request("GET", path, {}, options)
  }

  /**
   * Refreshes a payment session.
   * @param cart_id is required
   * @param payload the provider id of the session e.g. "stripe"
   * @return AsyncResult<{ cart: Cart }>
   */
  setPaymentSession(
    cart_id: string,
    payload: { provider_id: string },
    options: RequestOptions = {}
  ): Types.AsyncResult<{ cart: Types.Cart }> {
    const path = `/store/carts/${cart_id}/payment-session`
    return this.client.request("POST", path, payload, options)
  }

  /**
   * Updates a cart
   * @param cart_id is required
   * @param payload is required and can contain region_id, email, billing and shipping address
   * @return AsyncResult<{ cart: Cart }>
   */
  update(
    cart_id: string,
    payload: Types.CartUpdateResource,
    options: RequestOptions = {}
  ): Types.AsyncResult<{ cart: Types.Cart }> {
    const path = `/store/carts/${cart_id}`
    return this.client.request("POST", path, payload, options)
  }

  /**
   * Updates the payment method
   * @param cart_id is required
   * @param provider_id is required
   * @param data is optional and contains TODO:
   * Used to hold any data that the shipping method may need to process the fulfillment of the order.
   * Look at the documentation for your installed fulfillment providers to find out what to send.
   */
  updatePaymentSession(
    cart_id: string,
    payload: { provider_id: string; data: object },
    options: RequestOptions = {}
  ): Types.AsyncResult<{ cart: Types.Cart }> {
    const path = `/store/carts/${cart_id}/payment-session/update`
    return this.client.request("POST", path, payload, options)
  }
}

export default CartsResource
