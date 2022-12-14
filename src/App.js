// lib and dependencies to use route in the application
import { BrowserRouter, Routes, Route } from "react-router-dom";

// indicate the store we are using
import store from "../src/store/";

// Pages
import Login from "./view/login/";
import NewUser from "./view/new-user/";
import Home from "./view/home/";
import { Provider } from "react-redux";

function App() {
  // Return what gonna be render
  return (

    // the store to all the routes use 
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-user" element={<NewUser />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
