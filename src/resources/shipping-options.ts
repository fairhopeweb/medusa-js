import BaseResource from './base';
import * as Types from '../types';
import { RequestOptions } from '../types';

class ShippingOptionsResource extends BaseResource {
  /**
   * @description Lists shiping options available for a cart
   * @param query should contain cart id
   * @returns AsyncResult<{ shipping_options: ShippingOptions[] }>
   */
  listCartOptions(
    cart_id: string,
    options: RequestOptions = {},
  ): Types.AsyncResult<{ shipping_options: Types.ShippingOption[] }> {
    let path = `/store/shipping-options/${cart_id}`;
    return this.client.request('GET', path, {}, options);
  }

  /**
   * @description Lists shiping options available for a cart
   * @param query should contain cart id
   * @returns AsyncResult<{ shipping_options: ShippingOptions[] }>
   */
  list(
    query: string | object,
    options: RequestOptions = {},
  ): Types.AsyncResult<{ shipping_options: Types.ShippingOption[] }> {
    let path = `/store/shipping-options`;
    if (typeof query === 'string') {
      path = `/store/shipping-options/${query}`;
    } else {
      const queryString = Object.entries(query).map(([key, value]) => {
        let val = value;
        if (Array.isArray(value)) {
          val = value.join(',');
        }

        return `${key}=${val}`;
      });

      path = `/store/shipping-options?${queryString.join('&')}`;
    }

    return this.client.request('GET', path, {}, options);
  }
}

export default ShippingOptionsResource;
