export class ActionError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    Object.setPrototypeOf(this, ActionError.prototype);

    this.status = status;
  }
}
