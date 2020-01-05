const PasswordUtils = require('../utils/passwordHandler');

module.exports.login = async (db, email, password) => {
  try {
    const [login] = await db
      .select('*')
      .from('login')
      .where('email', '=', email);

    const isPasswordValid = await PasswordUtils.comparePassword(
      password,
      login.hash
    );

    if (isPasswordValid) {
      getUserByEmail(email);
    } else {
      return {};
    }
  } catch (err) {
    throw new Error(err);
  }
};

const getUserByEmail = email => {
  try {
    const [user] = db
      .select('*')
      .from('users')
      .where('email', '=', email);

    return user;
  } catch (err) {
    throw new Error(err);
  }
};
