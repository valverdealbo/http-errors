import { HttpError } from './http-error';

export class MethodNotAllowedError extends HttpError {
  constructor(message = 'The resource was requested using a method that is not allowed.') {
    super(405, 'MethodNotAllowedError', message);
  }
}
