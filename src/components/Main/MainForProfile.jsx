/** @format */
// import { useState, useEffect } from "react";
import Style from "./mainForHome.module.scss";

const MainForHome = () => {
  const name = JSON.parse(localStorage.getItem("userName"));

  return (
    <main>
      <div className={Style.header}>
        <h1>Profile</h1>
      </div>
      <div className={Style.bodyProfile}>Name: {name.name}</div>
    </main>
  );
};

export default MainForHome;
