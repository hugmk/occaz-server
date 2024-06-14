const Post = require("../models/posts.model");
const fs = require('fs');
const path = require('path');

var controller = {
  addOne: async (req, res, next) => {
    try {
      let post = req.body;
      let imageBase64 = post.image;

      const base64Data = imageBase64.replace(/^data:image\/\w+;base64,/, '');
      const buffer = Buffer.from(base64Data, 'base64');

      const contentType = imageBase64.substring("data:".length, imageBase64.indexOf(";base64"));

      let extension = contentType.split("/")[1];
      if (!extension) {
          extension = 'png';
      }
      const imagesFolderPath = path.join(__dirname, '..', 'public', 'images');
      let fileName = Date.now().toString() + '.' + extension;
      const filePath = path.join(imagesFolderPath, fileName);
      fs.writeFileSync(filePath, buffer);
      
      post.image = fileName;

      let newPost = await Post.create(post);
      res.json(newPost);
    } catch (error) {
      console.log(error);
      next(error);
    }
  },

  getOne: async (req, res, next) => {
    try {
      let post = await Post.findById(req.params.id);
      res.json(post);
    }
    catch(err) {
      console.log(err);
      next(err);
    }
  },

  getAll: async (req, res, next) => {
    try {
      let post = await Post.find();
      res.json(post);
    }
    catch(err) {
      console.log(err);
      next(err);
    }
  },
};

module.exports = controller;
