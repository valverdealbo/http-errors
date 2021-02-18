import { HttpError } from './http-error';

export class RequestEntityTooLargeError extends HttpError {
  constructor(message = 'The request is larger than what the server is able to process.') {
    super(413, 'RequestEntityTooLargeError', message);
  }
}
