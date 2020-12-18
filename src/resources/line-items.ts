import BaseResource from './base';

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

export interface LineItemCreateParams {
  id: string
  variant_id: string
  quanitity: number
}

class LineItemsResource extends BaseResource {
  create(id: string, payload: object) {
    const path = `/${id}/line-items`;
    return this.client('POST', path, payload);
  }

  update(cartId: string, lineItemId: string, payload:object) {
    const path = `/carts/${cartId}/line-items/${lineItemId}`;
    return this.client('POST', path, payload);
  }

  delete(cartId: string, lineItemId: string) {
    const path = `/carts/${cartId}/line-items/${lineItemId}`;
    return this.client('DELETE', path);
  }
}

export default LineItemsResource;
