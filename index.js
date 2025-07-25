import express, { response } from "express";
import mongoose from "mongoose";



import courseRouter from "./routes/courseRoutes.js";
import userRouter from "./routes/userRoutes.js"
import adminRouter from "./routes/adminRouter.js"

const app = express();
const port = 5000;

app.get("/test", (req, res) => {
  res.send("hello world");
});

app.use("/api/v1/user", userRouter);
app.use('/api/v1/admin', adminRouter);
app.use("/api/v1/course", courseRouter);

async function main() {
 const response =  await mongoose.connect("mongodb://localhost:27017/course-app");
console.log("Connected to DB", response.connection.name);

  app.listen(port, () => {
    console.log(`Example app listing on port ${port}`);
  });
}

main()
