declare module 'medusa' {
  namespace Types {
    interface Item {
      id: string
      variant_id: string;
      quanitity: number;
      is_giftcard?: boolean
      has_shipping?: boolean
      returned?: boolean
      fulfilled?: boolean
      fulfilled_quanitity?: boolean
      returned_quanitity?: boolean
      title?: string
      description?: string
      thumbnail?: string 
    }

    interface LineItemCreateParams {
      id: string
      variant_id: string
      quanitity: number
    }
  }
}