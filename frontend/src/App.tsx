import "./App.css";

import Signup from "./components/signup";
import Signin from "./components/signin";
import { ShowTasks } from "./components/ShowTask";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {" "}
          <Route path="/" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<ShowTasks />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
