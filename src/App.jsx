import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Character from "./pages/Character";
import InventoryContext from "./context/InventoryContext";

function App() {
  return (
    <>
      <InventoryContext>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="character" element={<Character />} />
          </Routes>
        </BrowserRouter>
      </InventoryContext>
    </>
  );
}

export default App;
