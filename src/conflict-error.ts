import { HttpError } from './http-error';

export class ConflictError extends HttpError {
  constructor(message = 'The request cannot be completed due to a conflict in the request parameters.') {
    super(409, 'ConflictError', message);
  }
}
