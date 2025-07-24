import express from "express";

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

app.listen(port, () => {
  console.log(`Example app listing on port ${port}`);
});
