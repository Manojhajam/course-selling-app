import  {jwt} from "jsonwebtoken"
import { JWT_USER_PASSWORD } from "../config"

function userMiddleware(req, res, next) {
    const token = req.headers.token;
    const decoded = jwt.verify(token, JWT_USER_PASSWORD)

    if (decoded) {
        req.userId = decoded.id;
        next()
    }
    else {
        red.status(403).json({
            message: "You are not signed in"
        })
    }
}

export  default userMiddleware;