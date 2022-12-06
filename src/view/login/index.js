import React, { useState } from "react";
// useState(react hook) save the state of the elements components
import "./login.css";
// import firebase
import firebase from "../../config/firebase";
// import auth and method verification to sign in from firebase
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// Import link to make the route navigation
import { Link } from "react-router-dom";

function Login() {
  // value, and the function that update this value
  // pretty similar to model i guess at this point
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  // Control return autentication from firebase
  const [msgType, setMsgType] = useState();

  // teste@mail.com 123456
  function logar() {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setMsgType("success");
      })
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        setMsgType("error");
        console.error(errorCode);
        console.error(errorMessage);
      });
  }

  return (
    // This code is not html, this is JSX, here we use to write html in js
    // className used in JSX
    <div className="login-content d-flex align-items-center">
      <form className="form-signin mx-auto">
        <div className="text-center mb-4">
          <h1 className="h3 mb-3 font-weight-normal text-white font-weight-bold">
            Login
          </h1>
        </div>

        {/* onChange={(e) => setEmail(e.target.value)} similiar to model, change value in real time */}
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          id="inputEmail"
          className="form-control my-2"
          placeholder="Email"
        />

        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          id="inputPassword"
          className="form-control my-2"
          placeholder="Password"
        />

        <button
          onClick={logar}
          className="btn btn-lg btn-block btn-login"
          type="button"
        >
          Sign in
        </button>
        <div className="msg-login text-white text-center my-5">
          {
            //Similar to v-if and ng-if the operaor && is simliar to "so you can render this..."
            // if login return success
            msgType === "success" && (
              <span>
                <strong>Wow!</strong>
                You are now connected &#128526;
              </span>
            )
          }
          {
            // if login returns a error
            msgType === "error" && (
              <span>
                <strong>Ops!</strong>
                Please check your info &#128546;
              </span>
            )
          }
        </div>

        <div className="opcoes-login text-center mt-5">
          <a href="#" className="mx-2">
            Forget your password?
          </a>
          <span className="text-white">&#9773;</span>
          <Link to="new-user" className="mx-2">
            Sing Up
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
