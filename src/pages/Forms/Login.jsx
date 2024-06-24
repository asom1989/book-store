import "./Forms.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Form Submit Handler
  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (email.trim() === "") {
      return toast.error("Email is required");
    }

    if (password.trim() === "") {
      return toast.error("Password is required");
    }

    console.log({ email, password });
    setEmail("");
    setPassword("");
  };
  // show Password handlar
  const showPasswordToggel = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="form-wrapper">
      <ToastContainer />
      <h1 className="form-title">Login to your account</h1>
      <form onSubmit={formSubmitHandler} className="form">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type={showPassword ? "text" : "password"}
          placeholder="Password"
        />
        {showPassword ? (
          <i
            onClick={showPasswordToggel}
            className="bi bi-eye-slash-fill show-password-icon"
          />
        ) : (
          <i
            onClick={showPasswordToggel}
            className="bi bi-eye-fill show-password-icon"
          />
        )}

        <button className="form-btn" type="submit">
          Login
        </button>
      </form>
      <div className="form-footer">
        Dont't have an account ?{" "}
        <Link to="/register" className="forms-link">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Login;
