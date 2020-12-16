declare module 'medusa' {
  namespace Cart {

    namespace Cart { }
    
    interface Cart {
      _id: string
      regionId: string
      items: Medusa.Item[]
      email: string
      customerId: string 
      shippingAddress: Medusa.ShippingAddress
      discounts: Medusa.Discount[]
      paymentSession: Medusa.PaymentSession
      shippingMethods: Medusa.ShippingMethods
      shippingTotal: number
      discountTotal: number
      taxTotal: number
      subTotal: number
      total: number
      region: Medusa.Region
    }

    interface CartCreateParams {
      regionId?: string
      items?: Medusa.Item[]
    }

    interface CartUpdateParams {
      id: string 
      regionId?: string 
      email?: string
      billingAddress?: string 
      shippingAddres?: Medusa.ShippingAddress
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