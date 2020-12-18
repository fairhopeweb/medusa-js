import BaseResource from './base';
import { Cart } from './carts';
import { Response } from './shared';

export interface Item {
  id: string
  cart_id?: string | null 
  order_id?: string | null
  swap_id?: string | null
  title?: string
  description?: string | null 
  thumbnail?: string | null
  is_giftcard?: boolean
  should_merge?: boolean 
  allow_discounts?: boolean
  unit_price?: number
  variant_id?: string;
  quantity?: number;
  fulfilled_quantity?: number | null
  returned_quantity?: number | null
  shipped_quantity?: number | null 
  created_at?: Date
  updated_at?: Date
  metadata?: object | null 


  has_shipping?: boolean
  returned?: boolean
  fulfilled?: boolean
}

export interface LineItemCreatePayload {
  variant_id: string
  quanitity: number
  metadata?: object //TODO: find data model
}

export interface LineItemUpdatePayload {
  line_id: string
  quantity?: number
}

class LineItemsResource extends BaseResource {
  create(cart_id: string, payload: LineItemCreatePayload) : Promise<Response<Cart>> {
    const path = `/store/carts/${cart_id}/line-items`;
    return this.client('POST', path, payload);
  }

  update(cart_id: string, line_id: string, payload: LineItemUpdatePayload): Promise<Response<Cart>> {
    const path = `/store/carts/${cart_id}/line-items/${line_id}`;
    return this.client('POST', path, payload);
  }

  delete(cart_id: string, line_id: string): Promise<Response<Cart>> {
    const path = `/store/carts/${cart_id}/line-items/${line_id}`;
    return this.client('DELETE', path);
  }
}

export default LineItemsResource;
