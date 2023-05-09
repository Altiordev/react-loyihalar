/** @format */
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import Login from "./Login/Login";
import Profile from "./Profile";
import Register from "./Register/Register";
import { auth } from "./firebase";
import Header from "./Header/Header";

const Router = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return unsubscribe;
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/private/header' element={<Header user={user} />} />
        <Route path='/register' element={<Register />} />
        <Route
          path='/login'
          element={user ? <Navigate to={"/profile"} /> : <Login />}
        />
        <Route
          path='/profile'
          element={user ? <Profile /> : <Navigate to={"/login"} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
