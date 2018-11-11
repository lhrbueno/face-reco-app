const router = require('express').Router();
const mock = require('../config/database.mock');

router.post('/signin', (req, res, next) => {

  const { email, password } = req.body;
  
  const userRequest = mock.users.filter(user => {
    return user.email === email && user.password === password;
  })[0];

  if (userRequest !== undefined) {
    const { id, name, email, entries, joined } = userRequest;
    const user = {
      id: id,
      name: name,
      email: email,
      entries: entries,
      joined: joined
    };

    res.status(200).json({ 
      status: 200, 
      message: 'User logged in successfully',
      user: user
    });

  } else {
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