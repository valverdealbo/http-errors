import { HttpError } from './http-error';

export class ServiceUnavailableError extends HttpError {
  public retryAfter: number;

  constructor(message = 'The server is down and is not accepting requests.', retryAfter = 60) {
    super(503, 'ServiceUnavailableError', message);
    this.retryAfter = retryAfter;
  }
}
