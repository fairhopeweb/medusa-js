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

The SDK needs to be configured with a publishable key from an environment. These are available in your environment settings in [Medusa Cloud](https://app.medusa-commerce.com)

Import Medusa as a default import and initiate it:

```js
import Medusa from "@medusajs/medusa-js";

const medusa = new Medusa('pk_...');

const createCart = async () => {
  const cart = await medusa.carts.create({});

  console.log(cart.id);
};

createCart();
```

## Configuration

### Initialize with config object

The package can be initialized with several options:

```js
const medusa = new Medusa('sk_...', {
  maxRetries: 1,
  baseUrl: 'https://api.example.com',
});
```

| Option              | Default            | Description                                                                                                                                                                                                                                       |
| ------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `maxRetries`        | `0`             | The amount of times a request is retried.                                                                             
| `baseUrl`              | `'https://api.medusa-commerce.com'` | The url to which requests are made to                    |
