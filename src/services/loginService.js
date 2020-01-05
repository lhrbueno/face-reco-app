const LoginRepository = require('../repositories/lognRepository');

module.exports.login = (db, email, password) => {
  try {
    const user = { ...LoginRepository.login(db, email, password) };
    delete user.password;
    return user;
  } catch (err) {
    throw new Error(err);
  }
};
