import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomeContainer from "./containers/HomeContainers";
import ProductsContainer from "./containers/ProductsContainers";
import { EcommerceProvider } from "./context/EcommerceContext";

function App() {
  return (
    <div className="App">
      <Router>
        <EcommerceProvider>
          <Routes>
            <Route exact path="/" element={<HomeContainer />} />
            <Route exact path="/productos" element={<ProductsContainer />} />
            <Route path="/productos/:item" element={<ProductsContainer />} />
          </Routes>
        </EcommerceProvider>
      </Router>
    </div>
  );
}

export default App;
