import { HttpError } from './http-error';

export class UnsupportedMediaTypeError extends HttpError {
  constructor(message = 'The client provided data with a media type that the server does not support.') {
    super(415, 'UnsupportedMediaTypeError', message);
  }
}
