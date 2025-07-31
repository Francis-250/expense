import axios from "axios";
import { useState } from "react";
import {
  FiDollarSign,
  FiFileText,
  FiTag,
  FiCalendar,
  FiX,
} from "react-icons/fi";
import { baseUrl } from "../../assets/asset";

export default function AddExpence({ openForm, setOpenForm }) {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Other");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const value = { amount, category, date, description };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      axios.post(`${baseUrl}`, value);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFormClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      onClick={() => setOpenForm(!openForm)}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
    >
      <div
        onClick={handleFormClick}
        className="w-full max-w-md rounded-xl shadow-2xl bg-primary border border-secondary"
      >
        <div className="sticky top-0 z-10 border-b border-secondary p-6 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-color">Add New Expense</h2>
            <p className="text-sm mt-1 text-color/70">
              Fill in the expense details
            </p>
          </div>
          <button
            onClick={() => setOpenForm(!openForm)}
            className="p-1 rounded-full text-color/50 hover:text-color hover:bg-secondary transition-colors"
            aria-label="Close"
          >
            <FiX size={24} />
          </button>
        </div>

        <div className="p-6 w-full">
          <div className="space-y-6 grid grid-cols-2 gap-2 w-full">
            <div className="space-y-2 col-span-2">
              <label
                htmlFor="amount"
                className="flex items-center text-sm font-medium text-color"
              >
                <FiDollarSign className="mr-2 text-hover" />
                Amount<span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                id="amount"
                name="amount"
                min="0"
                step="0.01"
                required
                className="w-full px-4 py-2.5 bg-secondary border border-secondary text-color rounded-lg outline-none placeholder-color/50"
                placeholder="0.00"
                onChange={(e) => setAmount(e.target.value)}
              />
              <p className="text-xs text-red-500 hidden" id="amount-error">
                Amount cannot be negative
              </p>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="category"
                className="flex items-center text-sm font-medium text-color"
              >
                <FiTag className="mr-2 text-hover" />
                Category<span className="text-red-500">*</span>
              </label>
              <select
                id="category"
                name="category"
                required
                className="w-full px-4 py-2.5 bg-secondary border border-secondary text-color rounded-lg outline-none"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="Food">Food</option>
                <option value="Transport">Transport</option>
                <option value="Bills">Bills</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="date"
                className="flex items-center text-sm font-medium text-color"
              >
                <FiCalendar className="mr-2 text-hover" />
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                className="w-full px-4 py-2.5 bg-secondary border border-secondary text-color rounded-lg outline-none"
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="space-y-2 col-span-2">
              <label
                htmlFor="description"
                className="flex items-center text-sm font-medium text-color"
              >
                <FiFileText className="mr-2 text-hover" />
                Description<span className="text-red-500">*</span>
              </label>
              <textarea
                id="description"
                name="description"
                rows="3"
                maxLength="100"
                required
                className="w-full px-4 py-2.5 bg-secondary border border-secondary text-color rounded-lg outline-none placeholder-color/50 resize-none"
                placeholder="What was this expense for?"
                onChange={(e) => setDescription(e.target.value)}
              />
              <p className="text-xs text-color/50">Max 100 characters</p>
            </div>
          </div>
          <div className="flex justify-end gap-3 pt-6 mt-6 border-t border-secondary">
            <button
              type="button"
              onClick={() => setOpenForm(!openForm)}
              className="px-5 py-2.5 rounded-lg font-medium text-color hover:bg-secondary transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 bg-hover text-color hover:bg-hover/50 rounded-lg font-medium transition-colors"
              onClick={handleSubmit}
            >
              Add Expense
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
