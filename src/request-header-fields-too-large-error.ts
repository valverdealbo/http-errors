import { HttpError } from './http-error';

export class RequestHeaderFieldsTooLargeError extends HttpError {
  constructor(message = 'The server is unwilling to process the request because its header fields are too large.') {
    super(431, 'RequestHeaderFieldsTooLargeError', message);
  }
}
