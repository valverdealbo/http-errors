import { HttpError } from './http-error';

export class NotAcceptableError extends HttpError {
  constructor(message = 'The resource is valid, but cannot be provided in a format specified in the Accept headers in the request.') {
    super(406, 'NotAcceptableError', message);
  }
}
