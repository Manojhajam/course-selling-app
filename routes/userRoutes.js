import express from 'express'
import { Signup, Signin, Purchase } from '../controllers/userControllers.js';
import userMiddleware from '../middleware/user.js';

const userRouter = express.Router();

userRouter.route('/signup')
.post(Signup)
userRouter.route('/signin')
.post(Signin)
userRouter.route('/purchase')
.post(userMiddleware, Purchase)


export default userRouter;
    