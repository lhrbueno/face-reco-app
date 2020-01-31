const router = require('express').Router();
const LoginService = require('../services/loginService');
const { RESPONSE, HTTP_STATUS } = require('../utils/response');
const { ERROR } = require('../utils/messages');

router.post('/signin', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await LoginService.login(email, password);

    return user && user.id
      ? RESPONSE(res, HTTP_STATUS.OK, { user })
      : RESPONSE(res, HTTP_STATUS.OK, { message: 'User not found' });
  } catch (err) {
    console.log(err);
    return RESPONSE(res, HTTP_STATUS.UNAUTHORIZED, {
      message: 'Login or password is incorrect'
    });
  }
});

router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const newUser = { name, email, password };

    const user = await LoginService.register(newUser);

    return RESPONSE(res, HTTP_STATUS.CREATED, {
      message: 'User registered sucessfully',
      user
    });
  } catch (err) {
    console.log(err);
    return RESPONSE(res, HTTP_STATUS.INTERNAL_SERVER_ERROR, {
      message: ERROR.DEFAULT.message
    });
  }
});

module.exports = router;
