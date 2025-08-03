import { userModel } from "../db.js";

export const Signup = (req, res) => {
    const reqBody = req.reqBody;
    res.json({
        message: "Signup endpoint"
    });
}

export const Signin = (req, res) => {
    res.json({
        message: "Signin endpoint"
    });
}

export const Purchase = (req, res) => {
    res.json({
        message: "Purchase endpoint"
    });
}