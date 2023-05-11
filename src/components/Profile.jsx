/** @format */
import "../App.css";
import Footer from "./Footer/Footer";
import MainForProfile from "./Main/MainForProfile";
import Header from "./Header/Header";

const Profile = () => {
  return (
    <div className='container'>
      <Header />
      <MainForProfile />
      <Footer />
    </div>
  );
};

export default Profile;
