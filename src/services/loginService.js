const LoginRepository = require('../repositories/loginRepository');
const { RuntimeError } = require('../utils/errorHandler');

module.exports.login = async (email, pwd) => {
  try {
    const loginDB = await LoginRepository.login(email, pwd);
    const { password, ...user } = loginDB;
    return user;
  } catch (err) {
    throw RuntimeError(err.type, err.message);
  }
};

module.exports.register = async usr => {
  try {
    const user = await LoginRepository.register(usr);
    return user;
  } catch (err) {
    throw RuntimeError(err.type, err.message);
  }
};
