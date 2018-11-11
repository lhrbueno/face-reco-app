const express = require('express');
const bodyParser = require('body-parser');
const bCrypt = require('bcrypt-nodejs');
const cors = require('cors');
const login = require('./src/routes/login');
const user = require('./src/routes/user');

const PORT = process.env.PORT || 3003;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res, next) => {
  res.status(200).json({ users: mock.users });
});

app.use('/api', login);
app.use('/api', user);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});