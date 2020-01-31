const UserRepository = require('../repositories/userRepository');
const { RuntimeError } = require('../utils/errorHandler');

module.exports.updateEntries = async id => {
  try {
    const user = await UserRepository.updateEntries(id);
    return user;
  } catch (err) {
    throw RuntimeError(err.type, err.message);
  }
};

module.exports.getProfile = async id => {
  try {
    const user = await UserRepository.getProfile(id);
    return user;
  } catch (err) {
    throw RuntimeError(err.type, err.message);
  }
};
