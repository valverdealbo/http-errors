import { HttpError } from './http-error';

export class HttpVersionNotSupportedError extends HttpError {
  constructor(message = 'The server does not support the HTTP protocol version specified in the request.') {
    super(505, 'HttpVersionNotSupportedError', message);
  }
}
