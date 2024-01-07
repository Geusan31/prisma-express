import express, { Router } from "express";
import * as postController from "../controllers/postController";

const router: Router = express.Router();

router.get("/", postController.getAllPost);
router.get("/:id", postController.getPost);
router.post("/", postController.createPost);
router.put("/:id", postController.updatePost);
router.delete("/:id", postController.deletePost);

export default router;
