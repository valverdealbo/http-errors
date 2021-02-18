import { HttpError } from './http-error';

export class NotExtendedError extends HttpError {
  constructor(message = 'Further extensions to the request are necessary for it to be fulfilled.') {
    super(510, 'NotExtendedError', message);
  }
}
