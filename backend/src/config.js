import dotenv from 'dotenv';
dotenv.config();

const { env } = process;

const config = {
  bodyLimit: '100kb',
  port: 7000,
  dbScheme: env.DB_SCHEME || 'db',
  dbUser: env.DB_USER || 'api',
  dbPassword: env.DB_PASSWORD || 'api',
  dbHost: env.DB_HOST || 'backend-db',
  disableSqlLog: env.DISABLE_SQL_LOG || false,
};

export default config;
