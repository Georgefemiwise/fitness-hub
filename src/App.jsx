import NavBar from "./components/Navbar";
import Detail from "./pages/Details";
import Home from "./pages/Home";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Product from "./pages/Product";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Product />}/>
          <Route path="detail/:id" element={<Detail />} />
       
      </Routes>
    </>
  );
}

export default App;
