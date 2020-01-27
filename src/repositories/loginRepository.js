const dbConfig = require('../config/database');
const db = require('knex')(dbConfig);
const PasswordUtils = require('../utils/passwordHandler');

module.exports.login = async (email, password) => {
  try {
    const [login] = await db
      .select('*')
      .from('login')
      .where({ email });

    console.log(login);

    const isPasswordValid = await PasswordUtils.comparePassword(
      password,
      login.hash
    );

    return isPasswordValid ? getUserByEmail(email) : {};
  } catch (err) {
    throw new Error(err);
  }
};

const getUserByEmail = async email => {
  try {
    const [user] = await db
      .select('*')
      .from('users')
      .where('email', '=', email);

    return user;
  } catch (err) {
    throw new Error(err);
  }
};
