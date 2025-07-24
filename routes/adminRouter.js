import { Router } from "express";
import express from 'express'
const adminRouter = express.Router()

adminRouter.post("/signup", (req, res) => {
    res.json({
        message: "signup endpoin"
    })
})

adminRouter.post("/signin", (req, res) => {
    res.json({
        message: "signup endpoin"
    })
})

adminRouter.post("/course", (req, res) => {
    res.json({
        message: "course endpoint"
    })
})

export default adminRouter;