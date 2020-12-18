import BaseResource from './base';
import { Country } from './country';
import { Currency } from './currency';
import { FulfillmentProvider, PaymentProvider } from './shared';

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
  list() {
    const path = `/store/regions`;
    return this.client('GET', path);
  }

  retrieve(id: string) {
    const path = `/store/regions/${id}`;
    return this.client('GET', path);
  }
}

export default RegionsResource;
