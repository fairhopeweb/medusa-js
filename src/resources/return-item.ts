import { LineItem } from './line-items';
import { Return } from './return';

export interface ReturnItem {
  return_id: string;
  item_id: string;
  return_order: Return;
  item: LineItem;
  quantity: number;
  requested_quantity: number | null;
  received_quantity: number | null;
}
