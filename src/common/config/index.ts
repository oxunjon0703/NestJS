import dotenv from 'dotenv/config';
import { Config } from '../types/types';

dotenv;

export const config: Config = {
  port: Number(process.env.PORT),
  jwtKey: process.env.JWT_KEY || '',
  dbName: process.env.DB_NAME || '',
  dbPort: Number(process.env.DB_PORT),
  dbHost: process.env.DB_HOST || '',
  dbUser: process.env.DB_USER || '',
  dbPassword: process.env.DB_PASSWORD || '',
};
