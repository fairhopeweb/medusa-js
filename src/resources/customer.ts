import BaseResource from './base';
import { Order } from './orders';
import { AsyncResult, BillingAddress, ShippingAddress } from './shared';

export interface Customer {
  id: string;
  email: string;
  first_name: string | null;
  last_name: string | null;
  billing_address_id: string | null;
  billing_address: BillingAddress;
  shipping_addresses: ShippingAddress[];
  password_hash: string | null;
  phone: string | null;
  has_account: boolean;
  orders: Order[];
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
  metadata: JSON | null;
}

export interface CreateCustomerResource {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
  phone_number?: string;
}

export interface UpdateCustomerResource {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  phone_number: string;
}

const baseUrl = `/store/customers`;

class CustomerResource extends BaseResource {
  create(payload: CreateCustomerResource): AsyncResult<Customer> {
    const path = `${baseUrl}`;
    return this.client.request('POST', path, payload);
  }

  retrieve(id: string): AsyncResult<Customer> {
    const path = `${baseUrl}/${id}`;
    return this.client.request('GET', path);
  }

  update(id: string, payload: UpdateCustomerResource): AsyncResult<Customer> {
    const path = `${baseUrl}/${id}`;
    return this.client.request('POST', path, payload);
  }

  createShippingAddress(id: string, payload: { address: ShippingAddress }): AsyncResult<Customer> {
    const path = `${baseUrl}/${id}/addresses`;
    return this.client.request('POST', path, payload);
  }

  updateShippingAddress(id: string, address_id: string, payload: { address: ShippingAddress }): AsyncResult<Customer> {
    const path = `${baseUrl}/${id}/addresses/${address_id}`;
    return this.client.request('POST', path, payload);
  }

  retrievePaymentMethod(id: string): AsyncResult<Customer> {
    const path = `${baseUrl}/${id}/payment-methods`;
    return this.client.request('GET', path);
  }

  resetPassword(payload: { email: string; token: string; password: string }): AsyncResult<Customer> {
    const path = `${baseUrl}/password-reset`;
    return this.client.request('POST', path, payload);
  }

  generatePasswordToken(payload: { email: string }): AsyncResult<Customer> {
    const path = `${baseUrl}/password-token`;
    return this.client.request('POST', path, payload);
  }
}

export default CustomerResource;
