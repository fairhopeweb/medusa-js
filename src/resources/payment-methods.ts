import BaseResource from './base';
import * as Types from '../types';

class PaymentMethodsResource extends BaseResource {
  /**
   * Lists customer payment methods
   * @param id id of cart
   * @returns AsyncResult<object>
   */
  list(id: string): Types.AsyncResult<object> {
    const path = `/store/carts/${id}/payment-methods`;
    return this.client.request('GET', path);
  }
}

export default PaymentMethodsResource;
