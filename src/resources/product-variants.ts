
import BaseResource from './base';
import { Product } from './products';
import { AsyncResult } from './shared';

export interface ProductVariant {
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

class ProductVariantsResource extends BaseResource {
  /**
   * @description Retrieves a single product variant
   * @param id is required
   * @returns AsyncResult<ProductVariant> TODO: double check
   */
  retrieve(id: string): AsyncResult<ProductVariant>  {
    const path = `/store/product-variants/${id}`;
    return this.client('GET', path);
  }

  /**
   * @description Retrieves a list of of Product Variants
   * @param params ids is optional and used to return a specific list of Product Variants
   * @returns AsyncResult<ProductVariant[]>
   */

  list(ids?: string[]) : AsyncResult<ProductVariant[]> {
    const path = `/variants`;

    const search = Object.entries(ids).map(([key, value]) => {
      if (Array.isArray(value)) {
        return `${key}=${value.join(',')}`;
      }

      return `${key}=${value}`;
    });

    return this.client('GET', `${path}${search.length > 0 && `?${search.join('&')}`}`);
  }
}

export default ProductVariantsResource;
