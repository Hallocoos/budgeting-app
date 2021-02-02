import dotenv from 'dotenv';

dotenv.config();

const MYSQL_HOSTNAME = process.env.MYSQL_HOSTNAME || 'localhost';
const MYSQL_DATABASE = process.env.MYSQL_DATABASE || 'database';
const MYSQL_USERNAME = process.env.MYSQL_USERNAME || 'root';
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD || '12345678';

const config = {
  host: MYSQL_HOSTNAME,
  database: MYSQL_DATABASE,
  user: MYSQL_USERNAME,
  password: MYSQL_PASSWORD,
};

export default config;
