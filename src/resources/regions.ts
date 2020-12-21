import BaseResource from './base';
import { Country } from './country';
import { Currency } from './currency';
import { AsyncResult, FulfillmentProvider, PaymentProvider } from './shared';

export interface Region {
  id: string;
  name: string;
  currency_code: string;
  currency: Currency;
  tax_rate: number;
  tax_code: string | null;
  countries: Country[];
  payment_providers: PaymentProvider[];
  fulfillment_providers: FulfillmentProvider[];
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
  metadata: JSON | null;
}

class RegionsResource extends BaseResource {
  /**
   * @description Retrieves a list of regions
   * @returns AsyncResult<Region[]>
   */
  list(): AsyncResult<Region[]> {
    const path = `/store/regions`;
    return this.client('GET', path);
  }

  /**
   * @description Retrieves a region
   * @param id is required
   * @returns AsyncResult<Region>
   */
  retrieve(id: string): AsyncResult<Region> {
    const path = `/store/regions/${id}`;
    return this.client('GET', path);
  }
}

export default RegionsResource;
