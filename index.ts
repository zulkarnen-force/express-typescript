import express, { Express, Request, Response, Application } from "express";
import mongoose from "mongoose";
import UserRouter from "./routes/UserRouter";
import EncounterRouter from "./routes/EncounterRouter";
import bodyParser from "body-parser";
const app: Application = express();
const port = process.env.PORT || 8000;
app.use(bodyParser.json());
app.use("/users", UserRouter);
app.use("/encounters", EncounterRouter);
app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
  mongoose
    .connect("mongodb://127.0.0.1:27017/labmu")
    .then(() => console.log(`mongoo DB is has been connected`));
});
