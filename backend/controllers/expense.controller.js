import Expense from "../models/expense.model.js";

export const createExpense = async (req, res) => {
  const expense = req.body;
  const newExpense = new Expense(expense);
  try {
    await newExpense.save();
    res
      .status(201)
      .json({ success: true, data: newExpense, message: "Expense Created" });
  } catch (error) {
    console.log(error);
  }
};

export const getExpense = async (req, res) => {
  try {
    const expenses = await Expense.find({});
    res
      .status(200)
      .json({ success: true, data: expenses, message: "Expense Fetched" });
  } catch (error) {
    console.log(error);
  }
};

export const getExpenseDetail = async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Expense ID is required",
      });
    }
    const expenses = await Expense.findById(id);
    res
      .status(200)
      .json({ success: true, data: expenses, message: "Expense Fetched" });
  } catch (error) {
    console.log(error);
  }
};

export const updateExpense = async (req, res) => {
  const { id } = req.params;
  const expense = req.body;

  try {
    await Expense.findByIdAndUpdate(id, expense, { new: true });
    res
      .status(200)
      .json({ success: true, message: "Expense Updated", data: expense });
  } catch (error) {
    console.log(error);
  }
};

export const removeExpense = async (req, res) => {
  const { id } = req.params;

  try {
    await Expense.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Expense Deleted" });
  } catch (error) {
    console.log(error);
  }
};
