/**
 * Define all Http return codes
 * 2xx: Success
 * 4xx: Client side error
 * 5xx: Server error
 */
export const httpStatusCodes = {
  /**
   * Success status response code indicates that the request has succeeded.
   */
  SUCCESS: 200,

  /**
   * Bad Request response status code indicates that the server cannot
   * or will not process the request due to something that is perceived
   * to be a client error
   */
  BAD_REQUEST: 400,

  /**
   * Unauthorized response status code indicates that the client request
   * has not been completed because it lacks valid authentication credentials
   * for the requested resource.
   */
  UNAUTHORIZED: 401,

  /**
   * Forbidden response status code indicates that the that the server
   * understands the request but refuses to authorize it
   */
  FORBIDDEN: 403,

  /**
   * Not Found response status code indicates that the server cannot find
   * the requested resource. Links that lead to a 404 page are often called
   * broken or dead links and can be subject to link rot
   */
  NOT_FOUND: 404,

  /**
   * Conflict response status code indicated that the request could not be processed
   * because of conflict in the request, such as the requested resource is not in the
   * expected state, or the result of processing the request would create a conflict
   * within the resource
   */
  CONFLICT: 409,

  /**
   * Unprocessable Content response status code indicates that the server
   * understands the content type of the request entity, and the syntax
   * of the request entity is correct, but it was unable to process the
   * contained instructions.
   */
  INVALID_DATA: 422,

  /**
   *The HTTP 429 Too Many Requests response status code indicates the
   *user has sent too many requests in a given amount of time ("rate limiting").
   *A Retry-After header might be included to this response indicating how long to
   *wait before making a new request
   */
  TOO_MANY_REQUESTS: 429,

  /**
   * Internal Server Error response code indicates that the server encountered
   * an unexpected condition that prevented it from fulfilling the request.
   */
  SERVER_ERROR: 500
};
