import BaseResource from "./base"
import * as Types from "../types"
import { RequestOptions } from "../types"

class GiftCardsResource extends BaseResource {
  /**
   * @description Retrieves a single GiftCard
   * @param code code of the gift card
   * @return AsyncResult<{ gift_card: GiftCard }>
   */
  retrieve(
    id: string,
    options: RequestOptions = {}
  ): Types.AsyncResult<{ product: Types.Product }> {
    const path = `/store/gift-cards/${id}`
    return this.client.request("GET", path, {}, options)
  }
}

export default GiftCardsResource
