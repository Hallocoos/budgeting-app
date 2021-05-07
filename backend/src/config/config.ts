import dotenv from 'dotenv';

dotenv.config();

const MYSQL_HOSTNAME = process.env.MYSQL_HOSTNAME;
const MYSQL_DATABASE = process.env.MYSQL_DATABASE;
const MYSQL_USERNAME = process.env.MYSQL_USERNAME;
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD;

const config = {
  host: MYSQL_HOSTNAME,
  database: MYSQL_DATABASE,
  user: MYSQL_USERNAME,
  password: MYSQL_PASSWORD,
};

export default config;
