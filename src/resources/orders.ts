import BaseResource from './base';

class OrdersResource extends BaseResource {
  /**
   * @description Creates an order
   * @param cart_id is required
   * @returns AsyncResult<Order>
   */
  create(cart_id: string): Types.AsyncResult<Types.Order> {
    const path = `/orders`;
    return this.client.request('POST', path, cart_id);
  }

  /**
   * @description Retrieves an order
   * @param id is required
   * @returns AsyncResult<Order>
   */
  retrieve(id: string): Types.AsyncResult<Types.Order> {
    const path = `/orders/${id}`;
    return this.client.request('GET', path);
  }
}

export default OrdersResource;
