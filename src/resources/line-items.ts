import BaseResource from './base';
import { Cart } from './carts';
import { Response } from './shared';

export interface Item {
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

export interface LineItemCreatePayload {
  id: string
  variant_id: string
  quanitity: number
}

export interface LineItemUpdatePayload {
  id: string
  line_id: string
  quantity?: number
}

export interface LineItemDeletePayload {
  id: string
  line_id: string
}

class LineItemsResource extends BaseResource {
  create(cart_id: string, payload: LineItemCreatePayload) : Promise<Response<Cart>> {
    const path = `/${cart_id}/line-items`;
    return this.client('POST', path, payload);
  }

  update(cart_id: string, line_id: string, payload: LineItemUpdatePayload): Promise<Response<Cart>> {
    const path = `/carts/${cart_id}/line-items/${line_id}`;
    return this.client('POST', path, payload);
  }

  delete(cart_id: string, line_id: string): Promise<Response<Cart>> {
    const path = `/carts/${cart_id}/line-items/${line_id}`;
    return this.client('DELETE', path);
  }
}

export default LineItemsResource;
