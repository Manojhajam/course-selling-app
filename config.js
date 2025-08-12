import dotenv from 'dotenv';
dotenv.config();

const JWT_ADMIN_PASSWORD = process.env.JWT_ADMIN_PASSWORD;
const JWT_USER_PASSWORD = process.env.JWT_USER_PASSWORD;

export { JWT_ADMIN_PASSWORD, JWT_USER_PASSWORD };