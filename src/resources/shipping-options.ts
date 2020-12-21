import BaseResource from './base';

export interface ShippingOption {
  option_id: string;
  data?: object; //TODO: find correct format
}

class ShippingOptionsResource extends BaseResource {
  list(query: string) {
    let path = `/shipping-options`;
    if (typeof query === 'string') {
      path = `/shipping-options/${query}`;
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

    return this.client.request('GET', path);
  }
}

export default ShippingOptionsResource;
