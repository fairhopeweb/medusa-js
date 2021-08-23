import AddressesResource from './addresses';
import BaseResource from './base';
import PaymentMethodsResource from './payment-methods';
import * as Types from '../types';
import { RequestOptions } from '../types';

class CustomerResource extends BaseResource {
  public paymentMethods = new PaymentMethodsResource(this.client);
  public addresses = new AddressesResource(this.client);

  /**
   * Creates a customer
   * @param payload information of customer
   * @returns AsyncResult<{ customer: Customer }>
   */
  create(
    payload: Types.CustomerCreateResource,
    options: RequestOptions = {},
  ): Types.AsyncResult<{ customer: Types.Customer }> {
    const path = `/store/customers`;
    return this.client.request('POST', path, payload, options);
  }

  /**
   * Retrieves a customer
   * @param id id of customer
   * @returns AsyncResult<{ customer: Customer }>
   */
  retrieve(id: string, options: RequestOptions = {}): Types.AsyncResult<{ customer: Types.Customer }> {
    const path = `/store/customers/${id}`;
    return this.client.request('GET', path, {}, options);
  }

  /**
   * Updates a customer
   * @param id id of customer
   * @param payload information to update customer with
   * @returns AsyncResult<{ customer: Customer }>
   */
  update(
    id: string,
    payload: Types.CustomerUpdateResource,
    options: RequestOptions = {},
  ): Types.AsyncResult<{ customer: Types.Customer }> {
    const path = `/store/customers/${id}`;
    return this.client.request('POST', path, payload, options);
  }

  /**
   * Retrieve customer orders
   * @param id id of customer
   * @returns AsyncResult<object[]>
   */
  listOrders(id: string, options: RequestOptions = {}): Types.AsyncResult<object> {
    const path = `/store/customers/${id}/orders`;
    return this.client.request('GET', path, {}, options);
  }

  /**
   * Resets customer password
   * @param payload info used to reset customer password
   * @returns AsyncResult<{ customer: Customer }>
   */
  resetPassword(
    payload: Types.CustomerResetPasswordResource,
    options: RequestOptions = {},
  ): Types.AsyncResult<{ customer: Types.Customer }> {
    const path = `/store/customers/password-reset`;
    return this.client.request('POST', path, payload, options);
  }

  /**
   * Generates a reset password token
   * @param payload info used to generate token
   * @returns AsyncResult<{ customer: Customer }>
   */
  generatePasswordToken(
    payload: Types.CustomerGeneratePasswordTokenResource,
    options: RequestOptions = {},
  ): Types.AsyncResult<{ customer: Types.Customer }> {
    const path = `/store/customers/password-token`;
    return this.client.request('POST', path, payload, options);
  }
}

export default CustomerResource;
