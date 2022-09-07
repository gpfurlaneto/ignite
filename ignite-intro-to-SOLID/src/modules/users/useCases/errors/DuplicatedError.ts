export default class DuplicatedError extends Error {
  isDuplicated = true;
  constructor() {
    super("Duplicated user");
  }
}
