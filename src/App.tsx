import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import ProductList from "./pages/ProductList/ProductList";
import NewProduct from "./pages/NewProduct/NewProduct";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/new" element={<NewProduct />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
