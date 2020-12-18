import ProductsResource from "../../src/resources/products";

declare module 'medusa' {
  namespace Types {
    interface Product {
      _id: string
      description: string 
      tags: string 
      is_giftcard: boolean
      images: Types.Image[]
      thumbnail: string
      variants: string[]
      published: boolean
      title: string
      options: ProductOption[]
    }
  }

  interface ProductOption {
    id: string
    title: string 
    values: ProductOptionValue[]
  }

  interface ProductOptionValue {
    id?: string
    value?: string 
    option_id?: string
    option?: ProductOption
    variant_id?: string
    variant?: string //TODO: Change to ProductVariant
  }
}