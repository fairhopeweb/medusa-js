import BaseResource from './base';

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
