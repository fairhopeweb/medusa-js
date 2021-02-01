import BaseResource from './base';
import ProductVariantsResource from './product-variants';

class ProductsResource extends BaseResource {
  public variants = new ProductVariantsResource(this.client.request);

  /**
   * @description Retrieves a single Product
   * @param id is required
   * @returns AsyncResult<Product>
   */
  retrieve(id: string): Types.AsyncResult<Types.Product> {
    const path = `/store/products/${id}`;
    return this.client.request('GET', path);
  }

  /**
   * @description Retrieves a list of products
   * @returns AsyncResult<Product[]>
   */
  list(): Types.AsyncResult<Types.Product[]> {
    const path = `/store/products`;
    return this.client.request('GET', path);
  }
}

export default ProductsResource;
