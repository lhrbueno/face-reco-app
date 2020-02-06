const DATABASE_CONNECTION = {
  client: process.env.DB_CLIENT,
  connection: process.env.POSTGRES_URI,
  pool: {
    min: parseInt(process.env.DB_MIN_POOL_CONNECTION),
    max: parseInt(process.env.DB_MAX_POOL_CONNECTION)
  }
};

module.exports = DATABASE_CONNECTION;
