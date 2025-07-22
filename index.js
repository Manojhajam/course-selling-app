import express from "express";

import { UserRoutes } from "./routes/user.js";
import { courseRoutes } from "./routes/course.js";

const app = express();
const port = 5000;

app.get("/test", (req, res) => {
  res.send("hello world");
});

UserRoutes(app);

courseRoutes(app);

app.listen(port, () => {
  console.log(`Example app listing on port ${port}`);
});
