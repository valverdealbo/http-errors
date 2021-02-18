import { HttpError } from './http-error';

export class PaymentRequiredError extends HttpError {
  constructor(message = 'Reserved for future use.') {
    super(402, 'PaymentRequiredError', message);
  }
}
