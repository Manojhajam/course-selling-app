import mongoose, {Schema} from "mongoose";

const userSchema = Schema({
    email: String,
    password: String,
    passsword: String,
    firstName: String,
    lastName: String
})

const adminSchema = Schema({
  email: String,
  password: String,
  passsword: String,
  firstName: String,
  lastName: String
});

const courseSchema = Schema({
    title: String,
    description: String,
    price: Number,
    imageurl: String,
    createrId: String

})

const purchaseSchema = Schema({
    courseId: String,
    userId: String,
})

const userModel = mongoose.Model("user",userSchema)
const adminModel = mongoose.Model("admin",adminSchema)
const courseModel = mongoose.Model("course",courseSchema)
const purchaseModel = mongoose.Model("purchase",purchaseSchema)