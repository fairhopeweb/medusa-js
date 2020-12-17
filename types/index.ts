declare module 'medusa' {
  export namespace Medusa {
    interface RequestOptions {
      apiKey?: string
      timeout?: number
      numberOfRetries?: number 
    }
  
    type Response<T> = T & {
      headers: {[key: string]: string};
    }
  }

  export interface MedusaConfig {
    baseUrl: string;
  }

  export class Medusa {
    constructor(config: MedusaConfig)
    
    carts: Medusa.CartsResource
  }

}