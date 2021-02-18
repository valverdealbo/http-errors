import { HttpError } from './http-error';

export class LengthRequiredError extends HttpError {
  constructor(message = 'The request did not specify the length of its content as required by the resource.') {
    super(411, 'LengthRequiredError', message);
  }
}
