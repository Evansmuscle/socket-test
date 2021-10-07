import express from "express";
import cors from "cors";
import morgan from "morgan";
import generateCodeRouter from "./routes/generateCode.router";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/code", generateCodeRouter);

export default app;
