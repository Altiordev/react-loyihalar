/** @format */

import "../App.css";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import MainForHome from "./Main/MainForHome";

const Home = () => {
  return (
    <div className='container'>
      <Header />
      <MainForHome />
      <Footer />
    </div>
  );
};

export default Home;
