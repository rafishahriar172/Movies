import mysql from "mysql2"

export const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password: "Qaz123",
    database:"movie_db"
})