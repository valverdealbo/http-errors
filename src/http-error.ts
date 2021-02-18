export class HttpError extends Error {
  public status: number;

  constructor(status: number, name: string, message: string) {
    super(message);
    this.status = status;
    this.name = name;
    Error.captureStackTrace(this);
  }
}
