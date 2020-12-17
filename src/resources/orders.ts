import BaseResource from './base';

class OrdersResource extends BaseResource {
  create(order: any) {
    const path = `/orders`;
    return this.client('POST', path, order);
  }

  retrieve(id: string) {
    const path = `/orders/${id}`;
    return this.client('GET', path);
  }
}

export default OrdersResource;
