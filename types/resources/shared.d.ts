declare module 'medusa' {
  namespace Medusa {
    enum PaymentProvidersEnum {
      "stripe", "klarna"
    }
    enum FulfilmentProvidersEnum {
      "shiphero"
    }
    enum ShippingMethodsEnum {
      "A", "b"
    }

    type Method = 'DELETE' | 'POST' | 'GET';

    interface Region {
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

    interface ShippingAddress extends Address { }
    interface BillingAddress extends Address {}

    interface ShippingMethods {
      id: string
      shipping_option_id: string 
      order_id: string 
      cart_id: null | string
      swap_id: null | string 
      return_id: null | string 
      price: number 
      data: ShippingData
    }

    interface ShippingData {
      id: string 
      city: string 
      postal: string
    }

    interface Image {
      id?: string
      url?: string
      created_at?: string
      updated_at?: string
      deleted_at?: string
      metedata?: object
    }
    
    interface Discount {
      id: string 
    }

    interface PaymentSession {
      id: string
    }
  }
}