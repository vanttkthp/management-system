import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import connectDB from "./config/connectDB";
import configCors from "./config/cors";
import initApiRoutes from "./routes/api";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

//configCors
configCors(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connectDB();

initApiRoutes(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
