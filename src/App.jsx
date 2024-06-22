import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header, Footer } from "./components/index";
import {
  Home,
  About,
  Authors,
  Cart,
  Login,
  Register,
  Contact,
  Book,
} from "./pages/index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/authors" element={<Authors />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book/:id" element={<Book />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
