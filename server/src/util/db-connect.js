import knex from "knex";

const db = knex({
  client: "pg",
  connection: {
    // POSTGRES_HOST=localhost ---
    //In einer .env-Datei (in Verbindung mit der dotenv-Bibliothek),
    //process.env ein Mechanismus, um externe Konfigurationswerte zu lesen
    //process.env ist ein Objekt in Node.js
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    ssl: process.env.POSTGRES_SSL === "true" && {
      rejectUnauthorized: false,
    },
  },
});

export default db;
