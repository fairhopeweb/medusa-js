'use strict';
/**
 * MedusaError is the base error for every other MedusaError
 */
export default class MedusaError extends Error {
  public MedusaAPIError: MedusaAPIError;
  public MedusaInvalidRequestError: MedusaInvalidRequestError;
  public MedusaAuthenticationError: MedusaAuthenticationError;
  public MedusaPermissionErorr: MedusaPermissionError;
  public MedusaConnectionError: MedusaConnectionError;

  constructor() {
    super();

    this.MedusaAPIError = new MedusaAPIError();
    this.MedusaInvalidRequestError = new MedusaInvalidRequestError();
    this.MedusaAuthenticationError = new MedusaAuthenticationError();
    this.MedusaPermissionErorr = new MedusaPermissionError();
    this.MedusaConnectionError = new MedusaConnectionError();
  }
}

/**
 * MedusaInvalidRequestError is raised when a request as invalid parameters.
 */
export class MedusaInvalidRequestError extends MedusaError {}

/**
 * MedusaAPIError is raised in case no other type cover the problem
 */
export class MedusaAPIError extends MedusaError {}

/**
 * MedusaAuthenticationError is raised when invalid credentials is used to connect to Medusa
 */
export class MedusaAuthenticationError extends MedusaError {}

/**
 * MedusaPermissionErorr is raised when attempting to access a resource without permissions
 */
export class MedusaPermissionError extends MedusaError {}

/**
 * MedusaConnectionError is raised when the Medusa servers can't be reached.
 */
export class MedusaConnectionError extends MedusaError {}
