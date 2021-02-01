import BaseResource from './base';

class ProductVariantsResource extends BaseResource {
  /**
   * @description Retrieves a single product variant
   * @param id is required
   * @returns AsyncResult<ProductVariant> TODO: double check, Docs says Region?
   */
  retrieve(id: string): Types.AsyncResult<Types.ProductVariant> {
    const path = `/store/product-variants/${id}`;
    return this.client.request('GET', path);
  }

  /**
   * @description Retrieves a list of of Product Variants
   * @param params ids is optional and used to return a specific list of Product Variants
   * @returns AsyncResult<ProductVariant[]>
   */

  list(ids?: string[]): Types.AsyncResult<Types.ProductVariant[]> {
    const path = `/variants`;

    const search = Object.entries(ids).map(([key, value]) => {
      if (Array.isArray(value)) {
        return `${key}=${value.join(',')}`;
      }

      return `${key}=${value}`;
    });

    return this.client.request('GET', `${path}${search.length > 0 && `?${search.join('&')}`}`);
  }
}

export default ProductVariantsResource;
