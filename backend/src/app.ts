import "dotenv/config";
import path from "path";
import cors from "cors";
import express from "express";
import router from "./routes";

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/assets", express.static(path.join(__dirname, "../assets")));
app.use("/thumb", express.static(path.join(__dirname, "../thumb")));

app.use(router);

export default app;
