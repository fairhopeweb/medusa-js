declare module 'medusa' {
  namespace Medusa {
    interface Cart {
      _id: string
      region_id: string
      items: Medusa.Item[]
      email: string
      customer_id: string 
      shipping_address: Medusa.ShippingAddress
      discounts: Medusa.Discount[]
      payment_session: Medusa.PaymentSession
      shipping_methods: Medusa.ShippingMethods
      shipping_total: number
      discount_total: number
      tax_total: number
      sub_total: number
      total: number
      region: Medusa.Region
    }

    interface CartCreateParams {
      region_id?: string
      items?: Medusa.Item[]
    }

    interface CartUpdateParams {
      id: string 
      region_id?: string 
      email?: string
      billing_address?: string 
      shipping_addres?: Medusa.ShippingAddress
    }

    interface CartRetrieveParams {
      id: string
    }

    class CartsResource {
      update(params?: CartUpdateParams, options?: Medusa.RequestOptions): Promise<Medusa.Response<Cart>>
      create(params?: CartCreateParams, options?: Medusa.RequestOptions): Promise<Medusa.Response<Cart>>
      retrieve(params?: CartRetrieveParams, options?: Medusa.RequestOptions): Promise<Medusa.Response<Cart>>
    }
  }
}