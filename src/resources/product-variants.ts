import BaseResource from './base';
import * as Types from '../types';
import { RequestOptions } from '../types';

class ProductVariantsResource extends BaseResource {
  /**
   * @description Retrieves a single product variant
   * @param id is required
   * @returns AsyncResult<{ variant: ProductVariant }>
   */
  retrieve(id: string, options: RequestOptions = {}): Types.AsyncResult<{ variant: Types.ProductVariant }> {
    const path = `/store/variants/${id}`;
    return this.client.request('GET', path, {}, options);
  }

  /**
   * @description Retrieves a list of of Product Variants
   * @param params ids is optional and used to return a specific list of Product Variants
   * @returns AsyncResult<{ variants: ProductVariant[] }>
   */
  list(ids?: string[], options: RequestOptions = {}): Types.AsyncResult<{ variants: Types.ProductVariant[] }> {
    const path = `/store/variants`;

    const search = Object.entries(ids).map(([key, value]) => {
      if (Array.isArray(value)) {
        return `${key}=${value.join(',')}`;
      }

      return `${key}=${value}`;
    });

    return this.client.request('GET', `${path}${search.length > 0 && `?${search.join('&')}`}`, {}, options);
  }
}

export default ProductVariantsResource;
