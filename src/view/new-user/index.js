import React, { useState } from "react";
import firebase from "../../config/firebase";
// import auth and method verification to sign in from firebase
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import "./new-user.css";

function NewUser() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [msgType, setMessageType] = useState();
  const [msg, setMsg] = useState();

  function signUp(){
    // Set in null to clean the messages
    setMessageType(null)

    // TODO: Sing up with firebase

  }

  return (
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

        <div className="text-center">
          {msgType === "success" && (
            <span>
              <strong>Wow!</strong> You are new connected
            </span>
          )}

          {msgType === "error" && (
            <span>
              <strong>Ops! </strong>
              Please check your info
            </span>
          )}
        </div>

        <button
          type="button"
          className="btn btn-lg btn-block mt-3 mb-3 btn-sign-up"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default NewUser;
