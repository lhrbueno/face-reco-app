module.exports.ERROR = {
  DEFAULT: {
    type: 'Server Error',
    message: 'Something went wrong. Try again in few minutes'
  },
  UNAUTHORIZED: {
    type: 'Unauthorized request',
    message: 'Unauthorized user'
  },
  PERSISTENCE: {
    type: 'Persistence Error',
    message: 'Something went wrong trying to mess with the DB'
  },
  PASSWORD: {
    type: 'BCryptJS Password Error',
    message: 'Something went wrong with BCrypt'
  }
};

module.exports.CONSTANTS = {
  SELECT_ALL: '*',
  SALT_NUMBER: 13,
  TABLES: {
    USERS: 'users',
    LOGIN: 'login'
  }
};
