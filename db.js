import mysql from "mysql";

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "react",
    connectionLimit: 5,
});

export default pool; 