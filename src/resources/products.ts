import BaseResource from './base';
import { AsyncResult, Image } from './shared';
import ProductVariantsResource, { ProductVariant } from './product-variants';

export interface Product {
  _id: string
  description: string 
  tags: string 
  is_giftcard: boolean
  images: Image[]
  thumbnail: string
  variants: string[]
  published: boolean
  title: string
  options: ProductOption[]
}

interface ProductOption {
  id: string
  title: string 
  values: ProductOptionValue[]
}

interface ProductOptionValue {
  id?: string
  value?: string 
  option_id?: string
  option?: ProductOption
  variant_id?: string
  variant?: ProductVariant
}

class ProductsResource extends BaseResource {
  public variants = new ProductVariantsResource(this.client);

  /**
   * @description Retrieves a single Product
   * @param id is required
   * @returns AsyncResult<Product>
   */
  retrieve(id: string): AsyncResult<Product>{
    const path = `/store/products/${id}`;
    return this.client('GET', path);
  }

  /**
   * @description Retrieves a list of products
   * @returns AsyncResult<Product[]>
   */
  list(): AsyncResult<Product[]> {
    const path = `/store/products`;
    return this.client('GET', path);
  }
}

export default ProductsResource;
