import BaseResource from './base';
import { Image } from './shared';
import VariantsResource from './variants';

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


export interface ProductOption {
  id: string
  title: string 
  values: ProductOptionValue[]
}

export interface ProductOptionValue {
  id?: string
  value?: string 
  option_id?: string
  option?: ProductOption
  variant_id?: string
  variant?: string //TODO: Change to ProductVariant
}

class ProductsResource extends BaseResource {
  public variants = new VariantsResource(this.client);

  retrieve(id: string) {
    const path = `/products/${id}`;
    return this.client('GET', path);
  }

  list() {
    const path = `/products`;
    return this.client('GET', path);
  }
}

export default ProductsResource;
