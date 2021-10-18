import BaseResource from "./base"
import * as Types from "../types"
import { RequestOptions } from "../types"

class AuthResource extends BaseResource {
  /**
   * @description Authenticates a customer using email and password combination
   * @return AsyncResult<{ customer: Customer }>
   */
  authenticate(
    payload: Types.AuthCreateSessionResource,
    options: RequestOptions = {}
  ): Types.AsyncResult<{ customer: Types.Customer }> {
    const path = `/store/auth`
    return this.client.request("POST", path, payload, options)
  }

  /**
   * @description Retrieves an authenticated session
   * Usually used to check if authenticated session is alive.
   * @return AsyncResult<{ customer: Customer }>
   */
  getSession(
    options: RequestOptions = {}
  ): Types.AsyncResult<{ customer: Types.Customer }> {
    const path = `/store/auth`
    return this.client.request("GET", path, {}, options)
  }

  /**
   * @description Check if email exists
   * @param email is required
   * @return AsyncResult<{ exists: boolean }>
   */
  exists(
    email: string,
    options: RequestOptions = {}
  ): Types.AsyncResult<{ exists: boolean }> {
    const path = `/store/auth/${email}`
    return this.client.request("GET", path, {}, options)
  }
}

export default AuthResource
