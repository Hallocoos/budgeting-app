import mysql from 'mysql';
import config from './config';

const params = {
  host: config.host,
  database: config.database,
  user: config.user,
  password: config.password,
};

const Connect = async () =>
  new Promise<mysql.Connection>((resolve, reject) => {
    const connection = mysql.createConnection(params);

    connection.connect((error) => {
      if (error) {
        reject(error);
        return;
      } else resolve(connection);
    });
  });

const Query = async (connection: mysql.Connection, query: string) =>
  new Promise((resolve, reject) =>
    connection.query(query, connection, (error, result) => {
      if (error) {
        reject(error);
        return;
      } else resolve(result);
    })
  );

export { Connect, Query };
