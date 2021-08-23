import BaseResource from './base';
import ProductVariantsResource from './product-variants';
import * as Types from '../types';
import { RequestOptions } from '../types';

class ProductsResource extends BaseResource {
  public variants = new ProductVariantsResource(this.client);

  /**
   * @description Retrieves a single Product
   * @param id is required
   * @returns AsyncResult<{ product: Product }>
   */
  retrieve(id: string, options: RequestOptions = {}): Types.AsyncResult<{ product: Types.Product }> {
    const path = `/store/products/${id}`;
    return this.client.request('GET', path, {}, options);
  }

  /**
   * @description Retrieves a list of products
   * @returns AsyncResult<{ products: Product[] }>
   */
  list(options: RequestOptions = {}): Types.AsyncResult<{ products: Types.Product[] }> {
    const path = `/store/products`;
    return this.client.request('GET', path, {}, options);
  }
}

export default ProductsResource;
