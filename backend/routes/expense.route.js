import { Router } from "express";
import {
  createExpense,
  getExpense,
  getExpenseDetail,
  removeExpense,
  updateExpense,
} from "../controllers/expense.controller.js";

const router = Router();

router.post("/", createExpense);
router.get("/", getExpense);
router.get("/:id", getExpenseDetail);
router.put("/:id", updateExpense);
router.delete("/:id", removeExpense);

export default router;
