import React, { useState } from "react";
import "./passwordRecover.css";
import firebase from "../../config/firebase";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import Navbar from "../../components/navbar";

function UserForgetPassword() {
  const [email, setEmail] = useState();
  const [msg, setMsg] = useState();

  function recoverPassword() {
    const auth = getAuth();

    sendPasswordResetEmail(auth, email)
      .then((result) => {
        setMsg("A recover link was send to your email");
      })
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        setMsg("error");
        console.error(errorCode);
        console.error(errorMessage);
      });
  }

  return (
    <>
      <Navbar />
      <form className="text-center form-login mx-auto mt-5">
        <h2 className="mb-3">Password Recover</h2>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="form-control my-2"
          placeholder="Email"
        />
        <div className="msg my-4 text-center">
          <span>{msg}</span>
        </div>

        <button onClick={recoverPassword} type="button" className="btn btn-lg btn-block btn-send">
          Recover Password
        </button>
      </form>
    </>
  );
}

export default UserForgetPassword;
