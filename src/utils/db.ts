import mysql from "mysql2";
import config from "../config";

const connection = mysql.createPool(config.db);

export default connection;
