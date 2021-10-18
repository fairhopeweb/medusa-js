import BaseResource from "./base"
import * as Types from "../types"
import { RequestOptions } from "../types"

class PaymentMethodsResource extends BaseResource {
  /**
   * Lists customer payment methods
   * @param id id of cart
   * @return AsyncResult<{ payment_methods: object[] }>
   */
  list(
    id: string,
    options: RequestOptions = {}
  ): Types.AsyncResult<{ payment_methods: object[] }> {
    const path = `/store/carts/${id}/payment-methods`
    return this.client.request("GET", path, {}, options)
  }
}

export default PaymentMethodsResource
