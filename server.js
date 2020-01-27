// Server
const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const morgan = require('morgan');

// Environment variables
require('dotenv').config({
  path: path.join(__dirname + '/.env.development.local')
});

const PORT = process.env.SERVER_PORT;

// Routes
const loginRoutes = require('./src/routes/login');
const userRoutes = require('./src/routes/user');

// Database
const dbConfig = require('./src/config/database');
const db = require('knex')(dbConfig);
const { RESPONSE, HEADERS, HTTP_STATUS } = require('./src/utils/response');

app.use(morgan('combined'));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', async (req, res) => {
  try {
    const users = await db
      .select('*')
      .from('users')
      .limit(1);

    res.header(HEADERS);
    return RESPONSE(res, HTTP_STATUS.OK, users);
  } catch (err) {
    return RESPONSE(res, HTTP_STATUS.INTERNAL_SERVER_ERROR, {
      status: HTTP_STATUS.INTERNAL_SERVER_ERROR,
      message: 'Error trying to fetch the users from database'
    });
  }
});

app.use('/api', loginRoutes);
app.use('/api', userRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
