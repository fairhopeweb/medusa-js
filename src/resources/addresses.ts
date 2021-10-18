import BaseResource from "./base"
import * as Types from "../types"
import { RequestOptions } from "../types"

class AddressesResource extends BaseResource {
  /**
   * Adds an address to a customers saved addresses
   * @param id id of customer
   * @param payload contains information to create an address
   * @return AsyncResult<{ customer: Customer }>
   */
  addAddress(
    id: string,
    payload: { address: Types.Address },
    options: RequestOptions = {}
  ): Types.AsyncResult<{ customer: Types.Customer }> {
    const path = `/store/customers/${id}/addresses`
    return this.client.request("POST", path, payload, options)
  }

  /**
   * Deletes an address of a customer
   * @param id id of customer
   * @param address_id id of the address to delete
   * @return AsyncResult<{ customer: Customer }>
   */
  deleteAddress(
    id: string,
    address_id: string,
    options: RequestOptions = {}
  ): Types.AsyncResult<{ customer: Types.Customer }> {
    const path = `/store/customers/${id}/addresses/${address_id}`
    return this.client.request("DELETE", path, {}, options)
  }

  /**
   * Update an address of a customer
   * @param id id of customer
   * @return AsyncResult<{ customer: Customer }>
   */
  updateAddress(
    id: string,
    address_id: string,
    payload: Types.Address,
    options: RequestOptions = {}
  ): Types.AsyncResult<{ customer: Types.Customer }> {
    const path = `/store/customers/${id}/addresses/${address_id}`
    return this.client.request("POST", path, payload, options)
  }
}

export default AddressesResource
