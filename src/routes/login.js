const router = require('express').Router();
const mock = require('../config/database.mock');
const LoginService = require('../services/loginService');
const { RESPONSE, HTTP_STATUS } = require('../utils/response');

router.post('/signin', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await LoginService.login(email, password);
    return RESPONSE(res, HTTP_STATUS.OK, user);
  } catch (err) {
    console.log(err);
    res.status(401).json({ message: 'Login or password is incorrect' });
  }
});

router.post('/register', (req, res, next) => {
  if (req.body) {
    const { name, email, password } = req.body;
    const userId = mock.users.length + 1;
    const newUser = {
      id: userId,
      name: name,
      email: email,
      password: password,
      entries: 0,
      joined: new Date()
    };

    mock.users.push(newUser);
    res.status(200).json({
      message: 'User registered sucessfully',
      user: mock.users[mock.users.length - 1]
    });
  } else {
    res.status(500).json({ message: 'An error occurred. Please try again' });
  }
});

module.exports = router;
