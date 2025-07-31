import { Link } from "react-router-dom";
import { webLinks } from "../../utils/data";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Sidebar({
  isOpen,
  setIsOpen,
  collapsed,
  setCollapsed,
}) {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-10 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`
        fixed z-20
        ${collapsed ? "w-20" : "w-64"} 
        bg-primary
        border-r border-slate-700/50
        h-full flex flex-col
        transition-all duration-300 ease-in-out
        shadow-2xl
        ${isOpen ? "left-0" : "-left-72"} md:left-0
      `}
      >
        <div className="flex justify-between items-center p-6 border-b border-slate-700/50 bg-slate-800/50">
          {!collapsed && (
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Menu
              </h2>
            </div>
          )}

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-2.5 hover:bg-slate-700/50 rounded-xl transition-all duration-200 group"
          >
            {collapsed ? (
              <FaChevronRight className="text-slate-400 group-hover:text-white transition-colors" />
            ) : (
              <FaChevronLeft className="text-slate-400 group-hover:text-white transition-colors" />
            )}
          </button>
        </div>
        <nav className="flex flex-col gap-2 p-4 flex-1 overflow-y-auto">
          {webLinks.map((link, i) => (
            <Link
              key={i}
              to={link.path}
              className={`
                group relative flex items-center gap-4 p-4 
                
                rounded-xl transition-all duration-200
                text-slate-300 hover:text-white
                ${collapsed ? "justify-center" : ""}
              `}
              onClick={() => setIsOpen(false)}
            >
              {link.icon && (
                <link.icon
                  className={`text-xl transition-all duration-200 group-hover:scale-110 ${
                    collapsed ? "text-hover" : "text-blue-400"
                  }`}
                />
              )}

              {!collapsed && (
                <span className="font-medium transition-all duration-200">
                  {link.name}
                </span>
              )}

              {!collapsed && (
                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <FaChevronRight className="text-xs text-slate-500" />
                </div>
              )}
              {collapsed && (
                <div className="absolute left-full ml-4 px-3 py-2 bg-slate-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-30 border border-slate-600">
                  {link.name}
                  <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-slate-800 border-l border-b border-slate-600 rotate-45" />
                </div>
              )}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setIsOpen(false)}
          className="md:hidden absolute top-4 right-4 p-2 hover:bg-slate-700/50 rounded-full transition-colors"
        >
          <FaTimes className="text-slate-400" />
        </button>
      </aside>
    </>
  );
}
