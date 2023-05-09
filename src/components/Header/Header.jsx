/** @format */
import { Link, NavLink } from "react-router-dom";
import { auth } from "../firebase";
import Style from "./header.module.scss";
import Hashtag from "../../assets/images/hashtag.svg";
import Home from "../../assets/images/home.svg";
import Profile from "../../assets/images/profile.svg";
import Twitter from "../../assets/images/twitter.svg";
import Logout from "../../assets/images/log_out.svg";

const Header = (user) => {
  const handleSignOut = async () => {
    await auth.signOut();
  };

  console.log(user);

  return (
    <header>
      <div className={Style.header}>
        <Link to='/'>
          <div className={Style.logo}>
            <img src={Twitter} alt='logo-twitter' />
          </div>
        </Link>
        <div className={Style.menuForDesktop}>
          <ul>
            <NavLink to='/'>
              <li>
                <div className='img'>
                  <img src={Home} alt='Home' />
                </div>
                <div className='text'>Home</div>
              </li>
            </NavLink>

            <li>
              <div className='img'>
                <img src={Hashtag} alt='Hashtag' />
              </div>
              <div className='text'>Explore</div>
            </li>

            <NavLink to='/profile'>
              <li>
                <div className='img'>
                  <img src={Profile} alt='Profile' />
                </div>
                <div className='text'>Profile</div>
              </li>
            </NavLink>
            <NavLink to={"/login"}>
              <li onClick={handleSignOut}>
                <div className='img'>
                  <img src={Logout} alt='Log out' />
                </div>
                {user ? (
                  <div className='text'> Log out </div>
                ) : (
                  <div className='text'> Log in </div>
                )}
              </li>
            </NavLink>
          </ul>
        </div>
        <div className={Style.menuForTablet}>
          <ul className={Style.forTablet}>
            <NavLink to='/'>
              <li>
                <div className='img'>
                  <img src={Home} alt='Home' />
                </div>
                <div className='text'></div>
              </li>
            </NavLink>

            <li>
              <div className='img'>
                <img src={Hashtag} alt='Hashtag' />
              </div>
              <div className='text'></div>
            </li>

            <NavLink to='/profile'>
              <li>
                <div className='img'>
                  <img src={Profile} alt='Profile' />
                </div>
                <div className='text'></div>
              </li>
            </NavLink>
            <NavLink to={"/login"}>
              <li onClick={handleSignOut}>
                <div className='img'>
                  <img src={Logout} alt='Log out' />
                </div>
                <div className='text'></div>
              </li>
            </NavLink>
          </ul>
        </div>
        <div className={Style.menuForMobile}>
          <ul className={Style.forMobile}>
            <NavLink to='/'>
              <li>
                <div className='img'>
                  <img src={Home} alt='Home' />
                </div>
                <div className='text'>Home</div>
              </li>
            </NavLink>

            <li>
              <div className='img'>
                <img src={Hashtag} alt='Hashtag' />
              </div>
              <div className='text'>Explore</div>
            </li>

            <NavLink to='/profile'>
              <li>
                <div className='img'>
                  <img src={Profile} alt='Profile' />
                </div>
                <div className='text'>Profile</div>
              </li>
            </NavLink>
            <NavLink to={"/login"}>
              <li onClick={handleSignOut}>
                <div className='img'>
                  <img src={Logout} alt='Log out' />
                </div>
                <div className='text'></div>
              </li>
            </NavLink>
          </ul>
        </div>
        <div className={Style.btnForDesktop}>Tweet</div>
        <div className={Style.btnForTablet}>
          <i className='fa-solid fa-feather'></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
