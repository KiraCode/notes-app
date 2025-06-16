import express from "express";
import cors from "cors";
import connectToMongoDB from "./db/db.js";
import "dotenv/config";
import authRouter from "./routes/auth.js";
import noteRouter from "./routes/note.js";

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectToMongoDB();

app.use("/api/auth", authRouter);
app.use("/api/note", noteRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
