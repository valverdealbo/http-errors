import { HttpError } from './http-error';

export class RequestTimeoutError extends HttpError {
  constructor(message = 'The server timed out waiting for a request from the client. The client is allowed to repeat the request.') {
    super(408, 'RequestTimeoutError', message);
  }
}
