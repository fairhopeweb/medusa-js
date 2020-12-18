import BaseResource from './base';
import { Discount } from './discount';
import { Fulfillment } from './fulfillment';
import { GiftCard } from './giftcard';
import { Item } from './line-items';
import { Payment } from './payment';
import { Refund } from './refund';
import { Return } from './return';
import { AsyncResult, BillingAddress, ShippingAddress } from './shared';
import { ShippingMethod } from './shipping-method';
import { Swap } from './swap';

export enum OrderStatus {
  PENDING = 'pending',
  COMPLETED = 'completed',
  ARCHIVED = 'archived',
  CANCELED = 'canceled',
  REQUIRES_ACTION = 'requires_action',
}

export enum FulfillmentStatus {
  NOT_FULFILLED = 'not_fulfilled',
  PARTIALLY_FULFILLED = 'partially_fulfilled',
  FULFILLED = 'fulfilled',
  PARTIALLY_SHIPPED = 'partially_shipped',
  SHIPPED = 'shipped',
  PARTIALLY_RETURNED = 'partially_returned',
  RETURNED = 'returned',
  CANCELED = 'canceled',
  REQUIRES_ACTION = 'requires_action',
}

export enum PaymentStatus {
  NOT_PAID = 'not_paid',
  AWAITING = 'awaiting',
  CAPTURED = 'captured',
  PARTIALLY_REFUNDED = 'partially_refunded',
  REFUNDED = 'refunded',
  CANCELED = 'canceled',
  REQUIRES_ACTION = 'requires_action',
}

export interface Order {
  id: string;
  status: OrderStatus;
  fulfillment_status: FulfillmentStatus;
  payment_status: PaymentStatus;
  display_id: number;
  cart_id: string;
  customer_id: string;
  email: string;
  billing_address_id: string;
  shipping_address_id: string | null;
  region_id: string;
  currency_code: string;
  tax_rate: number;
  discounts: Discount[];
  gift_cards: GiftCard;
  shipping_methods: ShippingMethod[];
  payments: Payment[];
  fulfillments: Fulfillment[];
  returns: Return[];
  refunds: Refund[];
  swaps: Swap[];
  items: Item[];
  canceled_at: Date | null;
  created_at: Date | null;
  updated_at: Date | null;
  metadata: JSON | null;
}

class OrdersResource extends BaseResource {
  /**
   * @description Creates an order
   * @param cart_id is required
   * @returns AsyncResult<Order>
   */
  create(cart_id: string): AsyncResult<Order> {
    const path = `/orders`;
    return this.client('POST', path, cart_id);
  }

  retrieve(id: string): AsyncResult<Order> {
    const path = `/orders/${id}`;
    return this.client('GET', path);
  }
}

export default OrdersResource;
