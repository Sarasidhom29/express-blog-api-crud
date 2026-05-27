import express from "express";
import { index, show, destroy } from "../controllers/posts.js";

const router = express.Router();

router.get("/posts", index);
router.get("/posts/:id", show);
router.delete("/posts/:id", destroy);

export default router;