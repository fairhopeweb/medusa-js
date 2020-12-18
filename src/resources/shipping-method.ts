
export interface ShippingMethod {
  id: string
  shipping_option_id: string 
  order_id: string 
  cart_id: null | string
  swap_id: null | string 
  return_id: null | string 
  price: number 
  data: ShippingData
}

export interface ShippingData {
  id: string 
  city: string 
  postal: string
}