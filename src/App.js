// lib and dependencies to use route in the application
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Login from "./view/login/";
import NewUser from "./view/new-user/";
import Home from "./view/home/";

function App() {
  // Return what gonna be render
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-user" element={<NewUser />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
