import express, { Router } from "express";
import * as userController from "../controllers/userController";

const router: Router = express.Router();

router.get("/", userController.getAllUsers);
router.get("/uposts/:id", userController.getUserWithPosts);
router.get("/:id", userController.getUser);
router.post("/", userController.createUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

export default router;
