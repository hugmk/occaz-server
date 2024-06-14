const express = require("express");
const controller = require("../controllers/posts.controller");
const router = express.Router();

router.get("/getPost/:id", controller.getOne);
router.get("/getAllPosts", controller.getAll);

router.post("/addPost", controller.addOne);

module.exports = router;