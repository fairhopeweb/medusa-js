declare module 'medusa' {
  namespace Types {
    export interface Cart {
      _id: string
      region_id: string
      items: Types.Item[]
      email: string
      customer_id: string 
      shipping_address: Types.ShippingAddress
      discounts: Types.Discount[]
      payment_session: Types.PaymentSession
      shipping_methods: Types.ShippingMethods
      shipping_total: number
      discount_total: number
      tax_total: number
      sub_total: number
      total: number
      region: Types.Region
    }

    interface CartCreateParams {
      region_id?: string
      items?: Types.Item[]
    }

    interface CartUpdateParams {
      id: string 
      region_id?: string 
      email?: string
      billing_address?: string 
      shipping_addres?: Types.ShippingAddress
    }

    interface CartRetrieveParams {
      id: string
    }

    class CartsResource {
      update(params?: CartUpdateParams, options?: Types.RequestOptions): Promise<Types.Response<Cart>>
      create(params?: CartCreateParams, options?: Types.RequestOptions): Promise<Types.Response<Cart>>
      retrieve(params?: CartRetrieveParams, options?: Types.RequestOptions): Promise<Types.Response<Cart>>
    }
  }
}