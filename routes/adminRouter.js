import { Router } from "express";
import express from 'express'
const adminRouter = express.Router()

adminRouter.post("/signup", (req, res) => {
    res.json({
        message: "signup endpoint"
    })
})

adminRouter.post("/signin", (req, res) => {
    res.json({
        message: "signin endpoint"
    })
})


//  /api/v1/admin
adminRouter.post("/course", (req, res) => {
    res.json({
        message: "course endpoint"
    })
})
adminRouter.put("/course", (req, res) => {
  res.json({
    message: "course endpoint",
  });
});
adminRouter.get("/course/bulk", (req, res) => {
  res.json({
    message: "course endpoint",
  });
});

export default adminRouter;