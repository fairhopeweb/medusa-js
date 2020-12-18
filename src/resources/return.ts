import { Order } from './orders';
import { ReturnItem } from './return-item';
import { ShippingData, ShippingMethod } from './shipping-method';
import { Swap } from './swap';

export enum ReturnStatus {
  REQUESTED = 'requested',
  RECEIVED = 'received',
  REQUIRES_ACTION = ' requires_action',
}

export interface Return {
  id: string;
  status: ReturnStatus;
  items: ReturnItem[];
  swap_id: string | null;
  swap: Swap;
  order_id: string | null;
  order: Order;
  shipping_method: ShippingMethod;
  shipping_data: ShippingData | null;
  refund_amount: number;
  received_at: Date | null;
  created_at: Date;
  updated_at: Date;
  metadata: JSON | null;
}
