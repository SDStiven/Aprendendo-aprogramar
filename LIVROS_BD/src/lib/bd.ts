import mysql from 'mysql2/promise';
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'servidor local',
    database: 'bd_livros'
})

export default db
