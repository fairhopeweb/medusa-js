export interface GiftCard {
  id: string;
  code: string;
  value: number;
  balance: number;
  region_id: string;
  is_disabled: boolean;
  ends_at: Date | null;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
  metadata: JSON | null;
}
