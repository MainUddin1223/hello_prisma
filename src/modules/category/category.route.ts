import express from "express";
import { categroryController } from "./category.controller";

const router = express.Router();

router.post('/create-category', categroryController.insertCategory);

export const categoryRouter = router;