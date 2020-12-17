import BaseResource from "./base";
import VariantsResource from "./variants";

class ProductsResource extends BaseResource {

  public variants = new VariantsResource(this.client);

  retrieve(id: string) {
    const path = `/products/${id}`;
    return this.client("GET", path);
  }

  list() {
    const path = `/products`;
    return this.client("GET", path);
  }
}

export default ProductsResource;