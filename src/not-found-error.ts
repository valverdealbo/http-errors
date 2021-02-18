import { HttpError } from './http-error';

export class NotFoundError extends HttpError {
  constructor(message = 'The resource could not be found.') {
    super(404, 'NotFoundError', message);
  }
}
