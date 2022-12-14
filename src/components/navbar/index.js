import React from "react";
import "./navbar.css";
import { Link, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function Navbar() {
  
  const dispatch = useDispatch();

  return (
    <nav className="navbar navbar-expand-lg">
      <span className="navbar-brand text-white">Events</span>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars text-white"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to={"/"}>
              Home
            </Link>
          </li>

          {!useSelector((state) => state.userLoged) ? (
            <>
              <li className="nav-item active">
                <Link className="nav-link" to={"/login"}>
                  Login
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to={"/new-user"}>
                  Sign In
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item active">
                <Link className="nav-link" to="">
                  Publish Event
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="">
                  My Events
                </Link>
              </li>
              <li className="nav-item active">
                <Link
                  className="nav-link"
                  onClick={() => dispatch({ type: "LOG_OUT" })}
                >
                  Log out
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
