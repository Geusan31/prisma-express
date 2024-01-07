import bodyParser from "body-parser";
import express, { Application } from "express";
import userRoutes from "./routes/userRoutes";
import postRoutes from "./routes/postRoutes";
import authRoutes from "./routes/authRoutes";
import { checkAuth } from "./middlewares/authMiddleware";
import { handleCors } from "./middlewares/corsMiddleware";
const app: Application = express();

app.use(bodyParser.json());
app.use(handleCors);
app.use("/auth", authRoutes);
app.use(checkAuth);
app.use("/users", userRoutes);
app.use("/posts", postRoutes);

app.listen(3000, () => {
  console.log("REST API server ready at: http://localhost:3000");
});
