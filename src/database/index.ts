import { createConnection } from "typeorm";

createConnection()
  .then(() => {
    console.log("💾 [database]: Database is running.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database", error);
    process.exit(1);
  });