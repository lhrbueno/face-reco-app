const LoginRepository = require('../repositories/lognRepository');

module.exports.login = async (email, pwd) => {
  try {
    const userDB = await LoginRepository.login(email, pwd);
    const { password, ...user } = userDB;
    return user;
  } catch (err) {
    throw new Error(err);
  }
};
