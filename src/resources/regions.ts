import BaseResource from './base';

class RegionsResource extends BaseResource {
  /**
   * @description Retrieves a list of regions
   * @returns AsyncResult<Region[]>
   */
  list(): Types.AsyncResult<Types.Region[]> {
    const path = `/store/regions`;
    return this.client.request('GET', path);
  }

  /**
   * @description Retrieves a region
   * @param id is required
   * @returns AsyncResult<Region>
   */
  retrieve(id: string): Types.AsyncResult<Types.Region> {
    const path = `/store/regions/${id}`;
    return this.client.request('GET', path);
  }
}

export default RegionsResource;
