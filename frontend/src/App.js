// Component Imports
import Home from "./components/Home";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Protected from "./components/Protected";

import { Routes, Route } from "react-router-dom"
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Routes>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/dashboard" element={<Protected><Dashboard/></Protected>}></Route>
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
