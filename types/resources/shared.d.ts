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
      taxRate: number
      countries: string[]
      paymentProviders: PaymentProvidersEnum[]
      fulfillmentProviders: FulfilmentProvidersEnum[]
      name: string
      currencyCode: string
      taxCode: string
    }

    interface ShippingAddress {
      _id: string
      countryCode: string
    }

    interface ShippingMethods {
      method: ShippingMethodsEnum
    }
    
    interface Discount {
      id: string 
    }

    interface PaymentSession {
      id: string
    }
  }
}