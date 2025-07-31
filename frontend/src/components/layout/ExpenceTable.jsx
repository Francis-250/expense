import { useEffect, useState, useCallback } from "react";
import { FaEdit, FaPlus, FaSearch, FaTrash } from "react-icons/fa";
import AddExpence from "./AddExpence";
import { expenseheader } from "../../utils/data";
import axios from "axios";
import { baseUrl } from "../../assets/asset";
import EditExpense from "./EditExpense";
import { toast } from "react-toastify";

export default function ExpenceTable() {
  const [openForm, setOpenForm] = useState(false);
  const [editExpense, setEditExpense] = useState({ open: false, id: null });
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchExpense = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(baseUrl);
      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching expenses:", error);
      toast.error("Failed to load expenses");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchExpense();
  }, [fetchExpense]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${baseUrl}/${id}`);
      toast.success("Expense deleted successfully");
      fetchExpense();
    } catch (error) {
      console.error("Error deleting expense:", error);
      toast.error("Failed to delete expense");
    }
  };

  const filteredData = data.filter((exp) => {
    const term = searchTerm.toLowerCase();
    return (
      exp.amount.toString().includes(term) ||
      exp.category.toLowerCase().includes(term) ||
      exp.date.toLowerCase().includes(term) ||
      (exp.description && exp.description.toLowerCase().includes(term))
    );
  });

  return (
    <main className="flex-1 p-3 overflow-auto md:m-3 md:rounded-lg bg-background">
      <div className="rounded-lg shadow-sm mb-6 bg-primary border border-secondary">
        <div className="p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="relative">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-color" />
                <input
                  type="text"
                  placeholder="Search expenses..."
                  className="pl-10 pr-4 py-2 border rounded-lg outline-none hover:border-accent w-full sm:w-64 transition-colors duration-200 bg-primary border-secondary text-color placeholder-muted-foreground"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <button
              onClick={() => setOpenForm(true)}
              className="bg-hover cursor-pointer hover:bg-accent-hover text-white px-4 py-4 rounded-lg flex items-center gap-2 transition-all duration-200 hover:shadow-md"
            >
              <FaPlus className="h-4 w-4" />
              New Expense
            </button>
          </div>
        </div>
      </div>

      <div className="rounded-lg shadow-sm overflow-hidden bg-primary border border-secondary">
        {isLoading ? (
          <div className="p-6 text-center text-color">Loading expenses...</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-secondary">
              <thead className="bg-secondary">
                <tr>
                  {expenseheader.map((header) => (
                    <th
                      key={header}
                      className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-color"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-primary divide-y divide-secondary">
                {filteredData.length > 0 ? (
                  filteredData.map((expense, i) => (
                    <tr key={expense._id} className="hover:bg-accent-hover">
                      <td className="px-6 py-4 whitespace-nowrap text-color">
                        {i + 1}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-color">
                        {expense.category}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-color">
                        {expense.amount.toFixed(2)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-color">
                        {new Date(expense.date).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-color">
                        {expense.description || "-"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-color">
                        <div className="flex gap-1.5">
                          <FaEdit
                            onClick={() =>
                              setEditExpense({ open: true, id: expense._id })
                            }
                            className="cursor-pointer text-hover hover:text-accent"
                            title="Edit expense"
                          />
                          <FaTrash
                            onClick={() => handleDelete(expense._id)}
                            className="cursor-pointer text-red-600 hover:text-accent"
                            title="Delete expense"
                          />
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={6}
                      className="px-6 py-4 text-center text-hover"
                    >
                      {searchTerm
                        ? "No matching expenses found"
                        : "No expenses found"}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {openForm && (
        <AddExpence
          openForm={openForm}
          setOpenForm={setOpenForm}
          onSuccess={fetchExpense}
        />
      )}

      {editExpense.open && (
        <EditExpense
          editExpense={editExpense.open}
          setEditExpense={() => setEditExpense({ open: false, id: null })}
          expenseId={editExpense.id}
          onSuccess={fetchExpense}
        />
      )}
    </main>
  );
}
