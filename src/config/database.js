const CONN = `${process.env.DB_VENDOR}://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DATABASE_NAME}`;

const DATABASE_CONNECTION = {
  client: process.env.DB_CLIENT,
  connection: CONN,
  pool: {
    min: parseInt(process.env.DB_MIN_POOL_CONNECTION),
    max: parseInt(process.env.DB_MAX_POOL_CONNECTION)
  }
};

module.exports = DATABASE_CONNECTION;
