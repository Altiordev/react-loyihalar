/** @format */
import { useState } from "react";
import { Link } from "react-router-dom";
import firebase from "../firebase";
import Style from "./register.module.scss";
import Logo from "../../assets/images/twitter.svg";

const Register = () => {
  const [showPassword, setShowPassvord] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleShowPassword = () => setShowPassvord(!showPassword);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name && !email && !password) {
      setError("Please fill all the fields!");
      return;
    }

    if (password !== confirmPassword) {
      setError("Password did not match!");
      return;
    }

    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      localStorage.setItem("userName", JSON.stringify({ name: name }));
    } catch (error) {
      console.error(error);
    }

    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setError("");
  };

  return (
    <section className={Style.register}>
      <div className={Style.register_wrapper}>
        <div className={Style.logo}>
          <img src={Logo} alt='Twitter logo' />
        </div>
        <h1>Create an account</h1>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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

          <input
            type='password'
            placeholder='Confirm Password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <span className={Style.errorWrapper}>{error}</span>
          <button type='submit'>Create account</button>
        </form>
        <span className={Style.toLogin}>
          Do you have an account?{" "}
          <Link to='/login'>
            <strong>Login</strong>
          </Link>
        </span>
      </div>
    </section>
  );
};

export default Register;
