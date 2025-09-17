import r from 'rethinkdb';

let connection = null;

async function getConnection() {
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