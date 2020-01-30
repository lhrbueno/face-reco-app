const bcrypt = require('bcryptjs');
const { PasswordError } = require('./errorHandler');
const { CONSTANTS } = require('./messages');

module.exports.hashPassword = password => {
  try {
    const salt = bcrypt.genSaltSync(CONSTANTS.SALT_NUMBER);
    const hashedPassword = bcrypt.hashSync(password, salt);
    return hashedPassword;
  } catch (err) {
    throw PasswordError(err.message);
  }
};

module.exports.comparePassword = (passwordRequest, password) => {
  try {
    return bcrypt.compareSync(passwordRequest, password);
  } catch (err) {
    throw PasswordError(err.message);
  }
};
