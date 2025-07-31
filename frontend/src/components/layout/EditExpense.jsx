import axios from "axios";
import { useEffect, useState } from "react";
import {
  FiDollarSign,
  FiFileText,
  FiTag,
  FiCalendar,
  FiX,
} from "react-icons/fi";
import { baseUrl } from "../../assets/asset";

export default function EditExpense({ setEditExpense, expenseId }) {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Other");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    try {
      const response = await axios.get(`${baseUrl}/${expenseId}`);
      const expenseData = response.data.data;
      setAmount(expenseData.amount);
      setCategory(expenseData.category);
      setDate(expenseData.date);
      setDescription(expenseData.description);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching expense:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [expenseId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${baseUrl}/${expenseId}`, {
        amount,
        category,
        date,
        description,
      });
      setEditExpense(false);
    } catch (error) {
      console.error("Error updating expense:", error);
    }
  };

  const handleFormClick = (e) => {
    e.stopPropagation();
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div
      onClick={() => setEditExpense(false)}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
    >
      <div
        onClick={handleFormClick}
        className="w-full max-w-md rounded-xl shadow-2xl bg-primary border border-secondary"
      >
        {/* Form header */}
        <div className="sticky top-0 z-10 border-b border-secondary p-6 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-color">Update Expense</h2>
            <p className="text-sm mt-1 text-color/70">
              Update the expense details
            </p>
          </div>
          <button
            onClick={() => setEditExpense(false)}
            className="p-1 rounded-full text-color/50 hover:text-color hover:bg-secondary transition-colors"
            aria-label="Close"
          >
            <FiX size={24} />
          </button>
        </div>

        {/* Form body */}
        <div className="p-6 w-full">
          <form onSubmit={handleSubmit}>
            <div className="space-y-6 grid grid-cols-2 gap-2 w-full">
              {/* Amount field */}
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
                  value={amount}
                  required
                  className="w-full px-4 py-2.5 bg-secondary border border-secondary text-color rounded-lg outline-none placeholder-color/50"
                  placeholder="0.00"
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>

              {/* Category field */}
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
                  value={category}
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

              {/* Date field */}
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
                  value={date}
                  className="w-full px-4 py-2.5 bg-secondary border border-secondary text-color rounded-lg outline-none"
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>

              {/* Description field */}
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
                  value={description}
                  required
                  className="w-full px-4 py-2.5 bg-secondary border border-secondary text-color rounded-lg outline-none placeholder-color/50 resize-none"
                  placeholder="What was this expense for?"
                  onChange={(e) => setDescription(e.target.value)}
                />
                <p className="text-xs text-color/50">Max 100 characters</p>
              </div>
            </div>

            {/* Form buttons */}
            <div className="flex justify-end gap-3 pt-6 mt-6 border-t border-secondary">
              <button
                type="button"
                onClick={() => setEditExpense(false)}
                className="px-5 py-2.5 rounded-lg font-medium text-color hover:bg-secondary transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 bg-hover text-color hover:bg-hover/50 rounded-lg font-medium transition-colors"
              >
                Update Expense
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
