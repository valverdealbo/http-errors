import { HttpError } from './http-error';

export class RequestURITooLongError extends HttpError {
  constructor(message = 'The URI provided in the request is too long for the server to process.') {
    super(414, 'RequestURITooLongError', message);
  }
}
