import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Expence from "./pages/Expence";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <div>
      <Routes>
{/*         <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Expence />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}
