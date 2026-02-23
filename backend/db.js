const { Pool } = require('pg');

const pool = new Pool({
  host: 'db.gebnmveredocgpelvibi.supabase.co',
  port: 5432,
  database: 'postgres',
  user: 'postgres',
  password: 'oe5zp1q84ssLUQGG',
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 10000,
});

// Test connection on startup
pool.query('SELECT 1')
  .then(() => console.log('Database connected successfully'))
  .catch(err => console.error('Database connection error:', err.message));

pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
});

module.exports = pool;
