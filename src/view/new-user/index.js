import React, { useState } from "react";
import firebase from "../../config/firebase";
// import auth and method verification to sign in from firebase
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import "./new-user.css";

import Navbar from "../../components/navbar";

function NewUser() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [msgType, setMessageType] = useState();
  const [msg, setMsg] = useState();
  const [loading, setLoading] = useState();

  function signUp() {
    setLoading(true);
    const auth = getAuth();
    // Set in null to clean the messages
    setMessageType(null);

    // if user dont enter with email or password
    if (!email || !password) {
      setMessageType("error");
      setMsg("E-mail or Password is empty");
      setLoading(false);
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setMessageType("success");
        setMsg("You are now registred");
        setLoading(false);
      })
      .catch((err) => {
        setMessageType("error");
        setMsg(err.message);
        const errorCode = err.code;
        const errorMessage = err.message;
        console.error(errorCode);
        console.error(errorMessage);
        setLoading(false);
      });
  }

  return (
    <>
      <Navbar />

      <div className="sign-up-form">
        <form className="text-center form-login mx-auto mt-5">
          <h1 className="h3 mb-3 text-black font-weight-bold">Sign Up</h1>

          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control my-2"
            placeholder="E-mail"
          />

          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control my-2"
            placeholder="Password"
          />

          {/* ternary if to show loading */}
          {loading ? (
            <div className="spinner-border text-danger mt-3" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <button
              onClick={signUp}
              type="button"
              className="btn btn-lg btn-block mt-3 mb-3 btn-sign-up"
            >
              Sign Up
            </button>
          )}

          <div className="text-center text-black">
            {msgType === "success" && (
              <span>
                <strong>Wow!</strong> {msg}
              </span>
            )}

            {msgType === "error" && (
              <span>
                <strong>Ops! </strong>
                {msg}
              </span>
            )}
          </div>
        </form>
      </div>
    </>
  );
}

export default NewUser;
