declare module 'medusa' {
  namespace Types {
    interface Variant {
      _id: string
      barcode?: string
      image?: string
      published?: boolean
      inventory_quanitity?: number
      allow_backorder?: boolean
      manage_inventory?: boolean
      title?: string
      sku?: string 
      ean?: string
      options?: VariantOption[]
      prices?: VariantPrice[]
      metadata?: VariantMetadata
      product?: Types.Product
    }
  }
  interface VariantOption {
    _id: string 
    value: string 
    option_id: string
  }

  interface VariantPrice {
    _id: string
    currency_code: string
    amount: number
  }

  interface VariantMetadata {
    origin_country: string
  }
}
