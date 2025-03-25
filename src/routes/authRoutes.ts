import express from "express";
import { registerUser, loginUser, getUserProfile } from "../controllers/authController";
import authMiddleware from "../middlewares/authMiddleware";

const router = express.Router();

router.post("/register", (req, res, next) => {
  registerUser(req, res, next);
});

router.post("/login", (req, res, next) => {
  loginUser(req, res, next);
});

router.get("/profile", (req, res, next) => {
    authMiddleware(req, res, next);
  }, (req, res, next) => {
    getUserProfile(req, res, next);
  });

export default router;