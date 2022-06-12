import mysql from 'mysql2'
import { MYSQL_HOST, MYSQL_USER, MYSQL_ROOT_PASSWORD, MYSQL_DATABASE } from './config'

const db = mysql.createPool({
    host: MYSQL_HOST,
    user: MYSQL_USER,
    password: MYSQL_ROOT_PASSWORD,
    database: MYSQL_DATABASE
});

export default db;