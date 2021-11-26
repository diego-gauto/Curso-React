//import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeContainer from "./container/home";
import ListContainer from "./container/list";
import DetailContainer from "./container/detail";
import { CartProvider } from "./context/cart";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route exact path="/home" element={<HomeContainer />} />
          <Route exact path="/list" element={<ListContainer />} />
          <Route path="/product/:id" element={<DetailContainer />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
