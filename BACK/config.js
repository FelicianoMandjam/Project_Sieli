import dotenv from 'dotenv'

dotenv.config()

export const env = {
  port: process.env.PORT,
  DATABASE_URI : process.env.DATABASE_URI,
  DATABASE_NAME : process.env.DATABASE_NAME,
  DATABASE_USER : process.env.DATABASE_USER,
  DATABASE_PASSWORD : process.env.DATABASE_PASSWORD,
  DATABASE_TYPE : process.env.DATABASE_TYPE,
}