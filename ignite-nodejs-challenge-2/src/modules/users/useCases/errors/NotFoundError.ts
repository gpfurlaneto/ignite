export default class NotFoundError extends Error {
  isNotFound = true;
  constructor() {
    super("Not found");
  }
}
