import { createPool } from "mysql2/promise";

export const connect = async () => {
  const connection = createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "origins",
    connectionLimit: 9999999,
  });

  return connection;
};
