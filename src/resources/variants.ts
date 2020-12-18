
import BaseResource from './base';
import { Product } from './products';

export interface Variant {
  _id: string
  barcode?: string
  image?: string
  published?: boolean
  inventory_quanitity?: number
  allow_backorder?: boolean
  manage_inventory?: boolean
  title?: string
  sku?: string 
  ean?: string
  options?: VariantOption[]
  prices?: VariantPrice[]
  metadata?: VariantMetadata
  product?: Product

}
export interface VariantOption {
  _id: string 
  value: string 
  option_id: string
}

export interface VariantPrice {
  _id: string
  currency_code: string
  amount: number
}

export interface VariantMetadata {
  origin_country: string
}

class VariantsResource extends BaseResource {
  retrieve(id: string) {
    const path = `/variants/${id}`;
    return this.client('GET', path);
  }

  list(params = {}) {
    const path = `/variants`;

    const search = Object.entries(params).map(([key, value]) => {
      if (Array.isArray(value)) {
        return `${key}=${value.join(',')}`;
      }

      return `${key}=${value}`;
    });

    return this.client('GET', `${path}${search.length > 0 && `?${search.join('&')}`}`);
  }
}

export default VariantsResource;
