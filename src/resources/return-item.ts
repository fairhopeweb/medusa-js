import { Item } from './line-items';
import { Return } from './return';

export interface ReturnItem {
  return_id: string;
  item_id: string;
  return_order: Return;
  item: Item;
  quantity: number;
  requested_quantity: number | null;
  received_quantity: number | null;
}
