import { HttpError } from './http-error';

export class InsufficientStorageError extends HttpError {
  constructor(message = 'The user or server does not have sufficient storage quota to fulfill the request.') {
    super(507, 'InsufficientStorageError', message);
  }
}
