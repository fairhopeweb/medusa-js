import BaseResource from "./base";

class RegionsResource extends BaseResource {
  list() {
    const path = `/store/regions`;
    return this.client("GET", path);
  }

  retrieve(id) {
    const path = `/store/regions/${id}`;
    return this.client("GET", path);
  }
}

export default RegionsResource;