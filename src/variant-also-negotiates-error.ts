import { HttpError } from './http-error';

export class VariantAlsoNegotiatesError extends HttpError {
  constructor(message = 'Transparent content negotiation for the request results in a circular reference.') {
    super(506, 'VariantAlsoNegotiatesError', message);
  }
}
