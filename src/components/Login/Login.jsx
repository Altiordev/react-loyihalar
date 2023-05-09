/** @format */

/** @format */
import { useState } from "react";
import { Link } from "react-router-dom";
import firebase from "../firebase";
import Style from "./login.module.scss";
import Logo from "../../assets/images/twitter.svg";

const Login = () => {
  const [showPassword, setShowPassvord] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleShowPassword = () => setShowPassvord(!showPassword);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email && !password) {
      setError("Please fill all the fields!");
    }

    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      console.log("logged!!!");
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        setError("User not found");
      } else if (error.code === "auth/wrong-password") {
        setError("Password is incorrect");
      } else {
        console.log(error.message);
      }
    }

    setEmail("");
    setPassword("");
  };

  return (
    <section className={Style.login}>
      <div className={Style.login_wrapper}>
        <div className={Style.logo}>
          <img src={Logo} alt='Twitter logo' />
        </div>
        <h1>Log in to Twitter</h1>
        <form onSubmit={handleLogin}>
          <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className={Style.password_wrapper}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <i
              onClick={handleShowPassword}
              className={
                showPassword ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"
              }
            ></i>
          </div>
          <span className={Style.errorWrapper}>{error}</span>
          <button type='submit'>Log in</button>
        </form>
        <span className={Style.toRegister}>
          Not registered yet?{" "}
          <Link to='/Register'>
            <strong>Register</strong>
          </Link>
        </span>
      </div>
    </section>
  );
};

export default Login;
