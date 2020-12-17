import BaseResource from './base';

class VariantsResource extends BaseResource {
  retrieve(id: string) {
    const path = `/variants/${id}`;
    return this.client('GET', path);
  }

  list(params = {}) {
    const path = `/variants`;

    const search = Object.entries(params).map(([key, value]) => {
      if (Array.isArray(value)) {
        return `${key}=${value.join(',')}`;
      }

      return `${key}=${value}`;
    });

    return this.client('GET', `${path}${search.length > 0 && `?${search.join('&')}`}`);
  }
}

export default VariantsResource;
