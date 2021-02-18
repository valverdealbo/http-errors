import { HttpError } from './http-error';

export class BandwidthLimitExceededError extends HttpError {
  constructor(message = 'The server has exceeded the bandwidth specified by the server administrator.') {
    super(509, 'BandwidthLimitExceededError', message);
  }
}
