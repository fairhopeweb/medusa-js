import BaseResource from './base';

class LineItemsResource extends BaseResource {
  create(cart_id: string, payload: Types.LineItemCreatePayload): Promise<Types.AsyncResult<Types.Cart>> {
    const path = `/store/carts/${cart_id}/line-items`;
    return this.client.request('POST', path, payload);
  }

  update(
    cart_id: string,
    line_id: string,
    payload: Types.LineItemUpdatePayload,
  ): Promise<Types.AsyncResult<Types.Cart>> {
    const path = `/store/carts/${cart_id}/line-items/${line_id}`;
    return this.client.request('POST', path, payload);
  }

  delete(cart_id: string, line_id: string): Promise<Types.AsyncResult<Types.Cart>> {
    const path = `/store/carts/${cart_id}/line-items/${line_id}`;
    return this.client.request('DELETE', path);
  }
}

export default LineItemsResource;
