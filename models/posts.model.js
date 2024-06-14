const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    title: String,
    author: String,
    content: String,
    price: Number,
    phoneNumber: String,
    email: String,
    image: String
  },
  { collection: "posts", timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
