import BaseResource from './base';

const baseUrl = `/store/customers`;

class CustomerResource extends BaseResource {
  create(payload: Types.CustomerCreateResource): Types.AsyncResult<Types.Customer> {
    const path = `${baseUrl}`;
    return this.client.request('POST', path, payload);
  }

  retrieve(id: string): Types.AsyncResult<Types.Customer> {
    const path = `${baseUrl}/${id}`;
    return this.client.request('GET', path);
  }

  update(id: string, payload: Types.CustomerUpdateResource): Types.AsyncResult<Types.Customer> {
    const path = `${baseUrl}/${id}`;
    return this.client.request('POST', path, payload);
  }

  createShippingAddress(id: string, payload: { address: Types.ShippingAddress }): Types.AsyncResult<Types.Customer> {
    const path = `${baseUrl}/${id}/addresses`;
    return this.client.request('POST', path, payload);
  }

  updateShippingAddress(
    id: string,
    address_id: string,
    payload: { address: Types.ShippingAddress },
  ): Types.AsyncResult<Types.Customer> {
    const path = `${baseUrl}/${id}/addresses/${address_id}`;
    return this.client.request('POST', path, payload);
  }

  retrievePaymentMethod(id: string): Types.AsyncResult<Types.Customer> {
    const path = `${baseUrl}/${id}/payment-methods`;
    return this.client.request('GET', path);
  }

  resetPassword(payload: { email: string; token: string; password: string }): Types.AsyncResult<Types.Customer> {
    const path = `${baseUrl}/password-reset`;
    return this.client.request('POST', path, payload);
  }

  generatePasswordToken(payload: { email: string }): Types.AsyncResult<Types.Customer> {
    const path = `${baseUrl}/password-token`;
    return this.client.request('POST', path, payload);
  }
}

export default CustomerResource;
