declare module 'medusa' {
  namespace Medusa {

    export interface RequestOptions {
      apiKey?: string
      timeout?: number
      numberOfRetries?: number 
    }
  
    export type Response<T> = T & {
      headers: {[key: string]: string};
    }

    
  }
}