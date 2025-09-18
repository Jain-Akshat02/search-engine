import * as r from 'rethinkdb';

// It's a good practice to create a single connection object and reuse it
let connection: r.Connection | null = null;

async function getConnection(): Promise<r.Connection> {
  if (connection) {
    return connection;
  }
  
  try {
    connection = await r.connect({ host: 'localhost', port: 28015 });
    console.log("Connected to RethinkDB!");
    return connection;
  } catch (err) {
    console.error('Could not connect to RethinkDB', err);
    throw err;
  }
}

export default getConnection;