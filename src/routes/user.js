const router = require('express').Router();
const UserService = require('../services/userService');
const { RESPONSE, HTTP_STATUS } = require('../utils/response');
const { ERROR } = require('../utils/messages');

router.get('/profile/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserService.getProfile(id);
    return RESPONSE(res, HTTP_STATUS.OK, user);
  } catch (err) {
    return RESPONSE(res, HTTP_STATUS.NOT_FOUND, { message: 'User not found' });
  }
});

router.patch('/entries', async (req, res) => {
  try {
    const { id } = req.body;

    const user = await UserService.updateEntries(id);
    return RESPONSE(res, HTTP_STATUS.OK, user);
  } catch (err) {
    console.log(err);
    return RESPONSE(res, HTTP_STATUS.NOT_FOUND, {
      message: 'User not found'
    });
  }
});

module.exports = router;
