export interface RequestOptions {
  idempotency_key?: string;
}

export type Response<T> = T & {
  headers: {
    [key: string]: string;
  };
};

export type AsyncResult<T> = Promise<Response<T>>;

export type RequestMethod = 'DELETE' | 'POST' | 'GET';
