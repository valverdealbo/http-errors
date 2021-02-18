import { HttpError } from './http-error';

export class GoneError extends HttpError {
  constructor(message = 'The resource is no longer available at the requested URI and no redirection will be given.') {
    super(410, 'GoneError', message);
  }
}
