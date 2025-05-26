import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Signin from "./components/Signin";
import Signup from "./components/Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
