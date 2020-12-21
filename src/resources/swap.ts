import BaseResource from './base';
import { Cart } from './carts';
import { Fulfillment } from './fulfillment';
import { LineItem } from './line-items';
import { FulfillmentStatus, Order, PaymentStatus } from './orders';
import { Payment } from './payment';
import { Return } from './return';
import { AsyncResult, ShippingAddress } from './shared';
import { ShippingMethod } from './shipping-method';

//TODO: Fill out
export interface Swap {
  id: string;
  fulfillment_status: FulfillmentStatus;
  payment_status: PaymentStatus;
  order: Order;
  additional_items: LineItem;
  return_order: Return;
  fulfillments: Fulfillment;
  payment: Payment;
  shipping_address_id: string | null;
  shipping_address: ShippingAddress;
  shipping_methods: ShippingMethod[];
  cart_id: string | null;
  cart: Cart;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
  metadata: JSON | null;
}

const baseUrl = '/store/swaps';

class SwapResource extends BaseResource {
  retrieve(id: string): AsyncResult<Swap> {
    const path = `${baseUrl}/${id}`;
    return this.client('GET', path);
  }
}

export default SwapResource;
