// lib and dependencies to use route in the application
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Login from "./view/login/";
import NewUser from "./view/new-user/";

function App() {
  // Return what gonna be render
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/new-user" element={<NewUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
