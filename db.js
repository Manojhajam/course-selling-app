import mongoose, { Schema } from "mongoose";
const ObjectId = mongoose.Types.ObjectId;

mongoose.connect("mongodb://localhost:27017/course-app");
console.log("Connected to DB", mongoose.connection.name);

const userSchema = Schema({
  email: { type: String, unique: true },
  password: String,
  firstName: String,
  lastName: String
});

const adminSchema = Schema({
  email: { type: String, unique: true },
  password: String,
  firstName: String,
  lastName: String
});

const courseSchema = Schema({
  title: String,
  description: String,
  price: Number,
  imageUrl: String,
  creatorId: ObjectId
});

const purchaseSchema = Schema({
  courseId: ObjectId,
  userId: ObjectId
});

const userModel = mongoose.model("user", userSchema);
const adminModel = mongoose.model("admin", adminSchema);
const courseModel = mongoose.model("course", courseSchema);
const purchaseModel = mongoose.model("purchase", purchaseSchema);

export { userModel, adminModel, courseModel, purchaseModel };
