import { Product } from "./products"
import { Region } from "./shared"

export interface Discount {
  id: string
  code: string
  is_dynamic?: boolean
  discount_rule_id?: string | null
  discount_rule: DiscountRule
  is_disabled: boolean
  parent_discount_id: string | null 
  starts_at: Date
  ends_at: Date | null 
  regions: Region[]
  created_at: Date
  updated_at: Date
  deleted_at: Date
  metadata: JSON | null 
}


export enum DiscountRuleType {
  FIXED = "fixed",
  PERCENTAGE = "percentage",
  FREE_SHIPPING = "free_shipping",
}

export enum AllocationType {
  TOTAL = "total",
  ITEM = "item",
}


export interface DiscountRule {
  id: string
  description: string
  type?: DiscountRuleType
  value?: number
  allocation?: AllocationType | null
  valid_for?: Product[]
  usage_limit?: number | null 
  created_at?: Date
  updated_at?: Date
  deleted_at?: Date
  metadata?: object | null
}