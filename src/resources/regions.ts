import BaseResource from './base';
import * as Types from '../types';
import { RequestOptions } from '../types';

class RegionsResource extends BaseResource {
  /**
   * @description Retrieves a list of regions
   * @returns AsyncResult<{ regions: Region[] }>
   */
  list(options: RequestOptions = {}): Types.AsyncResult<Types.Region[]> {
    const path = `/store/regions`;
    return this.client.request('GET', path, {}, options);
  }

  /**
   * @description Retrieves a region
   * @param id is required
   * @returns AsyncResult<{ region: Region }>
   */
  retrieve(id: string, options: RequestOptions = {}): Types.AsyncResult<Types.Region> {
    const path = `/store/regions/${id}`;
    return this.client.request('GET', path, {}, options);
  }
}

export default RegionsResource;
