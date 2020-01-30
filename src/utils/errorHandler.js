const { ERROR } = require('./messages');

module.exports.PersistenceError = (message = ERROR.PERSISTENCE.message) => {
  return RuntimeError(ERROR.persistence.type, message);
};

module.exports.PasswordError = (message = ERROR.PASSWORD.message) => {
  return RuntimeError(ERROR.PASSWORD.type, message);
};

module.exports.RuntimeError = (
  type = ERROR.DEFAULT.type,
  message = ERROR.DEFAULT.message
) => ({
  type,
  message
});

const RuntimeError = (type, message) => {
  this.name = type;
  this.message = message;
  this.stack = new Error().stack;
};
