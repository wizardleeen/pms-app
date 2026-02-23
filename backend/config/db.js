require('dotenv').config();

module.exports = {
  host: process.env.DB_HOST || 'db.gebnmveredocgpelvibi.supabase.co',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'postgres',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'oe5zp1q84ssLUQGG'
};
