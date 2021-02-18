import { HttpError } from './http-error';

export class InternalServerErrorError extends HttpError {
  constructor(message = 'A generic status for an error in the server itself.') {
    super(500, 'InternalServerErrorError', message);
  }
}
