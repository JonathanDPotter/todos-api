import dotenv from "dotenv";

dotenv.config();

const {
  PORT,
  HOST,
  NODE_ENV,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_SCHEMA,
  SERVER_TOKEN_EXPIRETIME,
  SERVER_TOKEN_ISSUER,
  SERVER_TOKEN_SECRET,
} = process.env;

const server = {
  hostname: HOST,
  port: PORT,
  env: NODE_ENV,
  baseURL:
    NODE_ENV === "development"
      ? `http://${HOST}:${PORT}/`
      : `https://${HOST}:${PORT}/`,
  token: {
    expireTime: SERVER_TOKEN_EXPIRETIME,
    issuer: SERVER_TOKEN_ISSUER,
    secret: SERVER_TOKEN_SECRET || "secret",
  },
};

const db = {
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_SCHEMA,
  localAddress: DB_HOST,
  port: parseInt(DB_PORT!),
};

const config = { server, db };

export default config;
