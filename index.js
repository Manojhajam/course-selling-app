import express, { response } from "express";
import mongoose from "mongoose";
// import dotenv from 'dotenv';
import courseRouter from "./routes/courseRoutes.js";
import userRouter from "./routes/userRoutes.js"
import adminRouter from "./routes/adminRouter.js"

const app = express();
// dotenv.config();

app.use(express.json());
const port = 5000;

app.get("/test", (req, res) => {
  res.send("hello world");
});

app.use("/api/v1/user", userRouter);
app.use('/api/v1/admin', adminRouter);
app.use("/api/v1/course", courseRouter);

app.use(express.json())


async function main() {
  //use dotenv
 const response =  await mongoose.connect(process.env.MONGO_URL);
console.log("Connected to DB", response.connection.name);

  app.listen(port, () => {
    console.log(`Example app listing on port ${port}`);
  });
}

main()
