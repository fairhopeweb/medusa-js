/**
 * MedusaError is the base error for every other MedusaError
 */
class MedusaError extends Error {
  constructor() {
    super();
  }
}

/**
 * MedusaInvalidRequestError is raised when a request as invalid parameters.
 */
class MedusaInvalidRequestError extends MedusaError {}

/**
 * MedusaAPIError is raised in case no other type cover the problem
 */
class MedusaAPIError extends MedusaError {}

/**
 * MedusaAuthenticationError is raised when invalid credentials is used to connect to Medusa
 */
class MedusaAuthenticationError extends MedusaError {}

/**
 * MedusaPermissionErorr is raised when attempting to access a resource without permissions
 */
class MedusaPermissionError extends MedusaError {}

/**
 * MedusaConnectionError is raised when the Medusa servers can't be reached.
 */
class MedusaConnectionError extends MedusaError {}
