import { ConnectionOptions } from "typeorm";

// Connetion to the database
export default {
  type: "postgres",
  url: process.env.DB_URL,
  entities: [__dirname + process.env.ENTITY_PATH],
  synchronize: true
} as ConnectionOptions;