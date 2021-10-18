import BaseResource from "./base"
import * as Types from "../types"
import { RequestOptions } from "../types"

class SwapsResource extends BaseResource {
  /**
   * @description Creates a swap from a cart
   * @param payload contains the id of the cart
   * @return AsyncResult<{ swap: Swap }>
   */
  create(
    payload: { cart_id: string },
    options: RequestOptions = {}
  ): Types.AsyncResult<{ swap: Types.Swap }> {
    const path = `/store/swaps`
    return this.client.request("POST", path, payload, options)
  }

  /**
   * @description Retrieves a swap by cart id
   * @param cart_id id of cart
   * @return AsyncResult<{ swap: Swap }>
   */
  retrieveByCartId(
    cart_id: string,
    options: RequestOptions = {}
  ): Types.AsyncResult<{ swap: Types.Swap }> {
    const path = `/store/swaps/${cart_id}`
    return this.client.request("GET", path, {}, options)
  }
}

export default SwapsResource
