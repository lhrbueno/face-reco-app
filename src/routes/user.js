const router = require('express').Router();
const mock = require('../config/database.mock');

router.get('/profile/:id', (req, res, next) => {
  const { id } = req.params;
  const userDb = mock.users.filter((u) => { 
    return u.id === Number(id);
  })[0];

  if (userDb !== undefined) {
    res.status(200).json({ user: userDb });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

router.put('/entries', (req, res, next) => {
  const { id } = req.body;

  const userDb = mock.users.filter((u) => { 
    return u.id === Number(id);
  })[0];

  if (userDb !== undefined) {
    userDb.entries++;
    const { id, name, email, entries, joined } = userDb;
    const user = {
      id: id,
      name: name,
      email: email,
      entries: entries,
      joined: joined
    };
  
    res.status(200).json({ user: user });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

module.exports = router;