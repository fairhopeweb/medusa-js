# Medusa Commerce JS SDK

[![Version](https://img.shields.io/npm/v/stripe.svg)](https://www.npmjs.org/package/@medusajs/medusa-js)

The Medusa Commerce JS SDK provides easy access to the Medusa Commerce API from clients written in JavaScript.

## Documentation

See the our [API reference](https://docs.medusa-commerce.com/api/store).

## Installation

Install the package with:

```sh
npm install @medusajs/medusa-js
# or
yarn add @medusajs/medusa-js
```

## Usage

The SDK can be configured with a secret key from your store (Coming soon!).

Import Medusa as a default import and initiate it:

```js
import Medusa from '@medusajs/medusa-js';

const medusa = new Medusa();

const { cart } = await medusa.carts.create({});
```

## Configuration

### Initialize with config object

The package can be initialized with several options:

```js
const medusa = new Medusa({
  maxRetries: 3,
  baseUrl: 'https://api.example.com',
});
```

| Option       | Default                             | Description                               |
| ------------ | ----------------------------------- | ----------------------------------------- |
| `maxRetries` | `0`                                 | The amount of times a request is retried. |
| `baseUrl`    | `'http://localhost:9000'`           | The url to which requests are made to     |
| `secretKey`  | `null`                              | Secret key to use for authenticated routes    |
