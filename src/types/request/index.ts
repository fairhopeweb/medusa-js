export interface RequestOptions {
  idempotency_key?: string;
  raw?: boolean;
}

export type Response<T> = T & {
  headers: {
    [key: string]: string;
  };
};

export type AsyncResult<T> = Promise<Response<T>>;

export type RequestMethod = 'DELETE' | 'POST' | 'GET';
