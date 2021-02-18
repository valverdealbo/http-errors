import { HttpError } from './http-error';

export class GatewayTimeoutError extends HttpError {
  constructor(message = 'The server is acting as a proxy and did not receive a response from the upstream server.') {
    super(504, 'GatewayTimeoutError', message);
  }
}
