import { HttpError } from './http-error';

export class NetworkAuthenticationRequiredError extends HttpError {
  constructor(message = 'The client must authenticate with the network before sending requests.') {
    super(511, 'NetworkAuthenticationRequiredError', message);
  }
}
