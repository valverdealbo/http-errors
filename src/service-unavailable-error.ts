import { HttpError } from './http-error';

export class ServiceUnavailableError extends HttpError {
  constructor(message = 'The server is down and is not accepting requests.') {
    super(503, 'ServiceUnavailableError', message);
  }
}
