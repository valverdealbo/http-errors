import { HttpError } from './http-error';

export class UnauthorizedError extends HttpError {
  constructor(message = 'The requester is not authorized to access the resource.') {
    super(401, 'UnauthorizedError', message);
  }
}
