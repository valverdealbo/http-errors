import { HttpError } from './http-error';

export class LockedError extends HttpError {
  constructor(message = 'The requested resource was found but has been locked and will not be returned.') {
    super(423, 'LockedError', message);
  }
}
