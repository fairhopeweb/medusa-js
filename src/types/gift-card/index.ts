import { Order } from '../order';
import { Region } from '../region';

export interface GiftCard {
  id: string;
  code: string;
  value: number;
  balance: number;
  region_id: string;
  region: Region;
  order_id: string;
  order: Order;
  is_disabled: boolean;
  ends_at?: Date;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  metadata?: JSON;
}
