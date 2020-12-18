declare module 'medusa' {
    namespace Medusa {
        interface RequestOptions {
            apiKey?: string;
            timeout?: number;
            numberOfRetries?: number;
        }
        type Response<T> = T & {
            headers: {
                [key: string]: string;
            };
        };
    }
    interface MedusaConfig {
        baseUrl: string;
    }
    class Medusa {
        constructor(config: MedusaConfig);
        carts: Medusa.CartsResource;
    }
}
