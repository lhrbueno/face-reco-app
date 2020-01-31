const { ERROR } = require('./messages');

module.exports.PersistenceError = (message = ERROR.PERSISTENCE.message) => {
  return this.RuntimeError(ERROR.PERSISTENCE.type, message);
};

module.exports.PasswordError = (message = ERROR.PASSWORD.message) => {
  return this.RuntimeError(ERROR.PASSWORD.type, message);
};

class CustomError extends Error {
  constructor(name = ERROR.DEFAULT.type, message = ERROR.DEFAULT.message) {
    super(message);
    this.name = name;
    this.stack = new Error().stack;
  }
}

module.exports.RuntimeError = CustomError;
