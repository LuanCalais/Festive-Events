import React from "react";
import "./login.css";

function Login() {
  return (
    // This code is not html, this is JSX, here we use to write html in js
    // className used in JSX
    <div className="login-content d-flex align-items-center">
      <form className="form-signin mx-auto">
        <div className="text-center mb-4">
          {/* <img
          className="mb-4"
          src="/docs/4.6/assets/brand/bootstrap-solid.svg"
          alt=""
          width="72"
          height="72"
        /> */}
          <h1 className="h3 mb-3 font-weight-normal text-white font-weight-bold">
            Login
          </h1>
        </div>

        <input
          type="email"
          id="inputEmail"
          className="form-control my-2"
          placeholder="Email"
        />

        <input
          type="password"
          id="inputPassword"
          className="form-control my-2"
          placeholder="Password"
        />

        <button className="btn btn-lg btn-block btn-login" type="submit">
          Sign in
        </button>
        <div className="msg-login text-white text-center my-5">
            <span>
                <strong>
                    Wow!
                </strong>
                 You are now connected &#128526;
            </span>
            <br/>
            <span>
                <strong>
                    Ops!
                </strong>
                 Please check your info &#128546;
            </span>
        </div>

        <div className="opcoes-login text-center mt-5">
          <a href="#" className="mx-2">Forget your password?</a>
          <span className="text-white">&#9773;</span>
          <a href="#" className="mx-2">Sing Up</a>
        </div>
      </form>
    </div>
  );
}

export default Login;
