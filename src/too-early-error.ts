import { HttpError } from './http-error';

export class TooEarlyError extends HttpError {
  constructor(message = 'The server is unwilling to risk processing a request that might be replayed.') {
    super(425, 'TooEarlyError', message);
  }
}
