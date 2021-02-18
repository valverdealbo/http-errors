import { HttpError } from './http-error';

export class ExpectationFailedError extends HttpError {
  constructor(message = 'The server cannot meet the requirements of the Expect request-header field.') {
    super(417, 'ExpectationFailedError', message);
  }
}
