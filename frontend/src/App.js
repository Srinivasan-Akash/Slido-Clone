// Component Imports
import Home from "./components/Home";
import Register from "./components/Register";

import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Home/>}></Route>
        <Route path="/Register" element={<Register/>}></Route>
      </Routes>
    </>
  );
}

export default App;
