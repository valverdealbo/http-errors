import { HttpError } from './http-error';

export class UpgradeRequiredError extends HttpError {
  constructor(message = 'The client should repeat the request using an upgraded protocol such as TLS 1.0.') {
    super(426, 'UpgradeRequiredError', message);
  }
}
