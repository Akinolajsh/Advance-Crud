import express, { Application } from "express";
import cors from "cors";
import router from "./Router/route";

export const appConfig= (app:Application)=>{
app.use(express.json())
.use(cors())

.use('/api', router)

}
