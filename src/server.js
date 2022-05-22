import express, { json } from "express";
import dotenv from "dotenv";
import cors from "cors";

import multerRouter from "./routes/multerRoute.js";

const app = express();
app.use(json());
app.use(cors());
dotenv.config();

app.use(multerRouter);

app.listen(process.env.PORT,()=> {
    console.log("server connected on port " + process.env.PORT);
});