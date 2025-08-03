import express from 'express'
import { Signup, Signin, Purchase } from '../controllers/userControllers.js';

const userRouter = express.Router();

userRouter.route('/signup')
.post(Signup)
userRouter.route('/signin')
.post(Signin)
userRouter.route('/purchase')
.post(Purchase)


export default userRouter;
    