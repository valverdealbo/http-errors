import { HttpError } from './http-error';

export class TooManyRequestsError extends HttpError {
  public retryAfter: number;

  constructor(message = 'The user has sent too many requests in a given amount of time.', retryAfter = 60) {
    super(429, 'TooManyRequestsError', message);
    this.retryAfter = retryAfter;
  }
}
