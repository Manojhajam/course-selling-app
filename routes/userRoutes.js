import express from 'express'
import { Signup } from '../controllers/userControllers.js';

const userRouter = express.Router();

userRouter.route('/signup')
.get(Signup)
userRouter.route('/signin')
.post(Signup)
userRouter.route('/purchase')
.post(Signup)


export default userRouter;
    