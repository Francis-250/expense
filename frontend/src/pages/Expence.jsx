import { useState } from "react";
import Sidebar from "../components/ui/Sidebar";
import Header from "../components/ui/Header";
import Hero from "../components/layout/Hero";
import ExpenceTable from "../components/layout/ExpenceTable";

export default function Expence() {
  const [isOpen, setIsOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      <Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          collapsed ? "md:ml-20" : "md:ml-64"
        }`}
      >
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        <ExpenceTable />
      </div>
    </div>
  );
}
