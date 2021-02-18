import { HttpError } from './http-error';

export class NotImplementedError extends HttpError {
  constructor(message = 'The server cannot respond to the request.') {
    super(501, 'NotImplementedError', message);
  }
}
