export interface RequestOptions {
  apiKey?: string;
  timeout?: number;
  numberOfRetries?: number;
}
export type Response<T> = T & {
  headers: {
    [key: string]: string;
  };
};

export type AsyncResult<T> = Promise<Response<T>>;

export enum PaymentProvidersEnum {
  'stripe',
  'klarna',
}
export enum FulfilmentProvidersEnum {
  'shiphero',
}
export enum ShippingMethodsEnum {
  'A',
  'b',
}

export type RequestMethod = 'DELETE' | 'POST' | 'GET';

export interface PaymentProvider {
  id: string;
  is_installed: boolean;
}

export interface FulfillmentProvider {
  id: string;
  is_installed: boolean;
}

// TODO: FILL OUT
export interface Address {
  id: string;
  customer_id: string;
  company: string;
  first_name: string;
  last_name: string;
  address_1: string;
  address_2: string;
  city: string;
  country_code: string;
  province: string;
  postal_code: number;
  phone: string;
  created_at: string;
  updated_at: string;
  deleted_at: null | string;
  metadata: null | string;
}

export interface ShippingAddress extends Address {}
export interface BillingAddress extends Address {}

// TODO: FILL OUT
export interface Image {
  id?: string;
  url?: string;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
  metedata?: object;
}

// TODO: FILL OUT
export interface PaymentSession {
  id: string;
}
