import BaseResource from './base';
import * as Types from '../types';

class ReturnReasonsResource extends BaseResource {
  /**
   * Lists return reasons defined in Medusa Admin
   * @returns AsyncResult<{ return_reasons: ReturnReason[] }>
   */
  list(): Types.AsyncResult<{ return_reasons: Types.ReturnReason[] }> {
    const path = `/store/return-reasons`;
    return this.client.request('GET', path);
  }
}

export default ReturnReasonsResource;
