import express, { Application } from "express";
import appConfig from "./app";
import dbConfig from "./config/DB";

// IIFE immediately invoked function expression

const app: Application = express();

const port:number= 4000

const server = async () => {
  try {
    appConfig(app);// initialize app
    dbConfig(); // initialize db
    app.listen(port, () => {
        console.log("")
      console.log(`Server listening on ${port}🚀🚀🚀`);
    });
  } catch (error:any) {
    console.log(error)
  }
};

// Server initialization
server();
