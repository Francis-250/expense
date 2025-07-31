import { FaBars } from "react-icons/fa";

export default function Header({ isOpen, setIsOpen }) {
  return (
    <header className="sticky top-0 z-10 h-16 flex items-center justify-between px-4 bg-white/95 shadow-md backdrop-blur-sm">
      <button
        className="text-gray-700 hover:text-gray-900 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaBars className="text-xl" />
      </button>
      <p className="text-red-900">Expense Tracker</p>
    </header>
  );
}
