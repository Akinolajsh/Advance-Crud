import express, { Application } from "express";
import { appConfig } from "./app";
import { Database } from "./config/DataBase";

const port: number = 2000;

const app: Application = express();

const server = async () => {
  try {
    appConfig(app);
    Database();
    app.listen(port, () => {
      console.log("");
      console.log("listening on port ✈✈ 🚀🚀🚀", port);
      console.log("");
    });
  } catch (error) {}
};

server();
