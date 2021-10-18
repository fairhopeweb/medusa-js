import BaseResource from "./base"
import * as Types from "../types"
import { RequestOptions } from "../types"

class OrdersResource extends BaseResource {
  /**
   * @description Retrieves an order
   * @param id is required
   * @return AsyncResult<{ order: Order }>
   */
  retrieve(
    id: string,
    options: RequestOptions = {}
  ): Types.AsyncResult<{ order: Types.Order }> {
    const path = `/store/orders/${id}`
    return this.client.request("GET", path, {}, options)
  }

  /**
   * @description Retrieves an order by cart id
   * @param cart_id is required
   * @return AsyncResult<{ order: Order }>
   */
  retrieveByCartId(
    cart_id: string,
    options: RequestOptions = {}
  ): Types.AsyncResult<{ order: Types.Order }> {
    const path = `/store/orders/cart/${cart_id}`
    return this.client.request("GET", path, {}, options)
  }

  /**
   * @description Look up an order using order details
   * @param payload details used to look up the order
   * @return AsyncResult<{ order: Order }>
   */
  lookupOrder(
    payload: Types.OrderLookUpPayload,
    options: RequestOptions = {}
  ): Types.AsyncResult<{ order: Types.Order }> {
    let path = `/store/orders?`

    const queryString = Object.entries(payload).map(([key, value]) => {
      let val = value
      if (Array.isArray(value)) {
        val = value.join(",")
      }

      return `${key}=${encodeURIComponent(val)}`
    })
    path = `/store/orders?${queryString.join("&")}`

    return this.client.request("GET", path, payload, options)
  }
}

export default OrdersResource
