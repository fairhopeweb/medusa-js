import BaseResource from './base';

const baseUrl = '/store/swaps';

class SwapResource extends BaseResource {
  retrieve(id: string): Types.AsyncResult<Types.Swap> {
    const path = `${baseUrl}/${id}`;
    return this.client.request('GET', path);
  }
}

export default SwapResource;
