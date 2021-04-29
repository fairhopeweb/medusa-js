import BaseResource from './base';
import * as Types from '../types';

class AuthResource extends BaseResource {
  /**
   * @description Authenticates a customer using email and password combination
   * @returns AsyncResult<Customer>
   */
  authenticate(payload: Types.AuthCreateSessionResource): Types.AsyncResult<Types.Customer> {
    const path = `/store/auth`;
    return this.client.request('POST', path, payload);
  }

  /**
   * @description Retrieves an authenticated session
   * Usually used to check if authenticated session is alive.
   * @returns AsyncResult<Customer>
   */
  getSession(): Types.AsyncResult<Types.Customer> {
    const path = `/store/auth`;
    return this.client.request('GET', path);
  }

  /**
   * @description Check if email exists
   * @param email is required
   * @returns AsyncResult<{ exists: boolean }>
   */
  exists(email: string): Types.AsyncResult<object> {
    const path = `/store/auth/${email}`;
    return this.client.request('GET', path);
  }
}

export default AuthResource;
