export default class AccessDeniedError extends Error {
  isAccessDenied = true;
  constructor() {
    super("Access denied");
  }
}
