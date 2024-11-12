const { Pool } = require('pg');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Create a connection pool to PostgreSQL
const pool = new Pool({
    user: process.env.DB_USER,        // PostgreSQL username
    host: process.env.DB_HOST,        // PostgreSQL host (e.g., localhost or cloud)
    database: process.env.DB_NAME,    // Database name
    password: process.env.DB_PASS,    // PostgreSQL password
    port: process.env.DB_PORT,        // PostgreSQL port (default is 5432)
});

// Export the pool to be used in other files
module.exports = pool;
