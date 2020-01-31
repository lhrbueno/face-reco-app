const dbConfig = require('../config/database');
const db = require('knex')(dbConfig);
const { PersistenceError } = require('../utils/errorHandler');
const { CONSTANTS } = require('../utils/messages');

module.exports.updateEntries = async id => {
  try {
    const userDB = await this.getProfile(id);
    const user = { ...userDB };
    user.entries = Number(user.entries) + 1;
    await db(CONSTANTS.TABLES.USERS)
      .where({ id })
      .update({ entries: user.entries });

    return user;
  } catch (err) {
    throw PersistenceError(err.message);
  }
};

module.exports.getProfile = async id => {
  try {
    const [user] = await db
      .select(CONSTANTS.SELECT_ALL)
      .from(CONSTANTS.TABLES.USERS)
      .where({ id });

    return user;
  } catch (err) {
    throw PersistenceError(err.message);
  }
};
