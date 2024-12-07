const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'root',
  password: 'root',
  database: 'mycontacts'
});

client.connect();

exports.query = async (query, values) => {
  try {
    const { rows } = await client.query(query, values);
    return rows;
  } catch (error) {
    console.error('Database query error:', error);
    throw error;
  }
};