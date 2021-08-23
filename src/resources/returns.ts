import BaseResource from './base';
import * as Types from '../types';
import { RequestOptions } from '../types';

class ReturnsResource extends BaseResource {
  /**
   * Creates a return request
   * @param payload details needed to create a return
   * @returns AsyncResult<{ return: Return }>
   */
  create(
    payload: Types.ReturnCreateResource,
    options: RequestOptions = {},
  ): Types.AsyncResult<{ return: Types.Return }> {
    const path = `/store/returns`;
    return this.client.request('GET', path, {}, options);
  }
}

export default ReturnsResource;
