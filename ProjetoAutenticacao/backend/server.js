import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoute from "./src/routes/users.route.js";

const app = express();

app.use(express.json());
dotenv.config();
app.use(cors());

const PORT = process.env.SERVER_PORT;

app.use("/users", userRoute);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});
