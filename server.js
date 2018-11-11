const express = require('express');
const bodyParser = require('body-parser');
const bCrypt = require('bcrypt-nodejs');
const cors = require('cors');

const PORT = process.env.PORT || 3003;

const app = express();

const database = {
  users: [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@email.com',
      password: 'cookies',
      entries: 0,
      joined: new Date()
    },
    {
      id: 2,
      name: 'Sally Mustang',
      email: 'sally@email.com',
      password: 'cake',
      entries: 0,
      joined: new Date()
    }
  ]
}

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res, next) => {
  res.status(200).json({ users: database.users });
});

app.post('/signin', (req, res, next) => {

  const { email, password } = req.body;
  
  const userRequest = database.users.filter(user => {
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

app.post('/register', (req, res, next) => {
  if (req.body) {
    const { name, email, password } = req.body;
    const userId = database.users.length + 1;
    const newUser = {
      id: userId,
      name: name,
      email: email,
      password: password,
      entries: 0,
      joined: new Date()
    };

    database.users.push(newUser);
    res.status(200).json({ 
      message: 'User registered sucessfully',
      user: database.users[database.users.length - 1]
    });
  } else {
    res.status(500).json({ message: 'An error occurred. Please try again' });
  }
});

app.get('/profile/:id', (req, res, next) => {
  const { id } = req.params;
  const user = req.user;

  if (user.id === Number(id)) {
    res.status(200).json({ user: user });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

app.put('/entries', (req, res, next) => {
  const { id } = req.body;

  const userDb = database.users.filter((u) => { 
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

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});