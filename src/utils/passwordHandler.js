const bcrypt = require('bcryptjs');
const SALT_NUMBER = 17;

module.exports.hashPassword = async password => {
  try {
    const salt = await bcrypt.genSalt(SALT_NUMBER);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports.comparePassword = async (passwordRequest, password) => {
  const hashedPassword = await this.hashPassword(passwordRequest);
  console.log('hashedPassword', hashedPassword);
  return bcrypt.compare(hashedPassword, password);
};
