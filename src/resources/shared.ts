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

export type AsyncResult<T> = Promise<Response<T>>

export enum PaymentProvidersEnum {
"stripe", "klarna"
}
export enum FulfilmentProvidersEnum {
  "shiphero"
}
export enum ShippingMethodsEnum {
  "A", "b"
}

export type Method = 'DELETE' | 'POST' | 'GET';

export interface Region {
  _id: string 
  tax_rate: number
  countries: string[]
  payment_providers: PaymentProvidersEnum[]
  fulfillment_providers: FulfilmentProvidersEnum[]
  name: string
  currency_code: string
  tax_code: string
}

interface Address {
  id: string,
  customer_id: string,
  company: string ,
  first_name: string,
  last_name: string,
  address_1: string 
  address_2: string
  city: string 
  country_code: string
  province: string
  postal_code: number,
  phone: string,
  created_at: string,
  updated_at: string,
  deleted_at: null | string,
  metadata: null | string 
}

export interface ShippingAddress extends Address { }
export interface BillingAddress extends Address {}

export interface Image {
  id?: string
  url?: string
  created_at?: string
  updated_at?: string
  deleted_at?: string
  metedata?: object
}

export interface Discount {
  id: string 
}

export interface PaymentSession {
  id: string
}