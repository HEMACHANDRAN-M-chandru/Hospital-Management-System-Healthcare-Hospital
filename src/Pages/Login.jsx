import React, { useState } from "react";
import "../Components/css/Login.css";
const Login = () => {
  const [state, setState] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [name, setName] = useState("");
  const onSubmitHandler = async (event) => {
    event.preventDefault();
  };

  return (
    <form className="forms">
      <div className="loginform loginform-sm">
        <p className="twopage">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </p>
        <p>
          Please {state === "Sign Up" ? "sign up" : "log in"} to Book
          Appointment
        </p>
        {state === "Sign Up" && (
          <div className="widths">
            <p>Full Name</p>
            <input
              className="inputs"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>
        )}

        <div className="widths">
          <p>Email</p>
          <input
            className="inputs"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>

        <div className="widths">
          <p>Password</p>
          <input
            className="inputs"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>
        <button className="signup">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </button>

        {state === "Sign Up" ? (
          <p>
            {" "}
            Already have an account?{" "}
            <span onClick={() => setState("Login")} className="newlog">
              Login Here
            </span>
          </p>
        ) : (
          <p>
            Create an New account?{" "}
            <span onClick={() => setState("Sign Up")} className="newlog">
              click here.
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
