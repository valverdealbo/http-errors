import { HttpError } from './http-error';

export class TooManyRequestsError extends HttpError {
  constructor(message = 'The user has sent too many requests in a given amount of time.') {
    super(429, 'TooManyRequestsError', message);
  }
}
