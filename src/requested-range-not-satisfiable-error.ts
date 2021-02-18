import { HttpError } from './http-error';

export class RequestedRangeNotSatisfiableError extends HttpError {
  constructor(message = 'The client has asked for a portion of the resource but the server cannot supply that portion.') {
    super(416, 'RequestedRangeNotSatisfiableError', message);
  }
}
