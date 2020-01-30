const dbConfig = require('../config/database');
const db = require('knex')(dbConfig);
const PasswordUtils = require('../utils/passwordHandler');
const { PersistenceError, RuntimeError } = require('../utils/errorHandler');
const { CONSTANTS } = require('../utils/messages');

module.exports.login = async (email, password) => {
  try {
    const [login] = await db
      .select(CONSTANTS.SELECT_ALL)
      .from(CONSTANTS.TABLES.LOGIN)
      .where({ email });

    const isPasswordValid = await PasswordUtils.comparePassword(
      password,
      login.hash
    );

    return isPasswordValid ? getUserByEmail(email) : {};
  } catch (err) {
    if (err && err.type) {
      throw RuntimeError(err.type, err.message);
    }

    throw PersistenceError(err.message);
  }
};

const getUserByEmail = async email => {
  try {
    const [user] = await db
      .select(CONSTANTS.SELECT_ALL)
      .from(CONSTANTS.TABLES.USERS)
      .where({ email });

    return user;
  } catch (err) {
    throw PersistenceError(err.message);
  }
};

module.exports.register = async user => {
  try {
    const { name, email, password } = user;

    const userDB = await db(CONSTANTS.TABLES.USERS).insert({
      name,
      email,
      joined: new Date()
    });

    const hashedPwd = await PasswordUtils.hashPassword(password);

    await db(CONSTANTS.TABLES.LOGIN).insert({
      email,
      hash: hashedPwd
    });

    return userDB;
  } catch (err) {
    if (err && err.type) {
      throw RuntimeError(err.type, err.message);
    }

    throw PersistenceError(err.message);
  }
};
