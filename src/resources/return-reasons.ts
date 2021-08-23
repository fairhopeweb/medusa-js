import BaseResource from './base';
import * as Types from '../types';
import { RequestOptions } from '../types';

class ReturnReasonsResource extends BaseResource {
  /**
   * @description Retrieves a single Return Reason
   * @param id is required
   * @returns AsyncResult<{ return_reason: ReturnReason }>
   */
  retrieve(id: string, options: RequestOptions = {}): Types.AsyncResult<{ return_reason: Types.ReturnReason }> {
    const path = `/store/return-reasons/${id}`;
    return this.client.request('GET', path, {}, options);
  }

  /**
   * Lists return reasons defined in Medusa Admin
   * @returns AsyncResult<{ return_reasons: ReturnReason[] }>
   */
  list(options: RequestOptions = {}): Types.AsyncResult<{ return_reasons: Types.ReturnReason[] }> {
    const path = `/store/return-reasons`;
    return this.client.request('GET', path, {}, options);
  }
}

export default ReturnReasonsResource;
