import BaseResource from './base';

class ShippingOptionsResource extends BaseResource {
  list(query: string): Types.AsyncResult<Types.ShippingOption[]> {
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
