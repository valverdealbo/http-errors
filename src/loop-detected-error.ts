import { HttpError } from './http-error';

export class LoopDetectedError extends HttpError {
  constructor(message = 'The server detected an infinite loop in the request.') {
    super(508, 'LoopDetectedError', message);
  }
}
