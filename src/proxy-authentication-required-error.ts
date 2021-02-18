import { HttpError } from './http-error';

export class ProxyAuthenticationRequiredError extends HttpError {
  constructor(message = 'Authentication is required with the proxy before requests can be fulfilled.') {
    super(407, 'ProxyAuthenticationRequiredError', message);
  }
}
