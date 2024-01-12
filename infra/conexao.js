import mysql from 'mysql'
import dotenv from 'dotenv'

dotenv.config()

const conexao = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    database: 'bdcopa'
})

export default conexao
