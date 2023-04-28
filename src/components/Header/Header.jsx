/** @format */
import { useState } from "react";

import "../Header/header.scss";

const Header = () => {
  const [changeMode, setChangeMode] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  function changeColor() {
    setChangeMode(!changeMode);
  }
  const openMenu = () => setShowMenu(true);
  const closeMenu = () => setShowMenu(false);

  const openModal = () => {
    setShowModal(true);
    closeMenu();
  };
  const closeModal = () => setShowModal(false);

  const handleOutsideClick = (e) => {
    if (e.target.className === "modal active") {
      closeModal();
    }
  };

  document.body.classList = changeMode ? "light" : "dark";
  return (
    <header>
      <nav>
        <div className='container'>
          <div className='nav'>
            <div className='logo'>
              {/* <img src={logo} alt='logo' /> */}
              <svg
                className={`${changeMode ? "active" : ""}`}
                width='114'
                height='24'
                viewBox='0 0 114 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g clip-path='url(#clip0_1_206)'>
                  <path
                    d='M92.25 1.5H108C111.314 1.5 114 4.18629 114 7.5V9C114 12.3137 111.314 15 108 15H96V19.5H114V24H91.5V16.5C91.5 13.1863 94.1863 10.5 97.5 10.5H109.5V6H92.25V1.5Z'
                    fill='white'
                  />
                  <path
                    d='M7.90358 15.475C10.1925 17.5981 11.625 20.6318 11.625 24H22.5C22.5 16.8762 19.1893 10.5257 14.0227 6.40305L7.90358 15.475Z'
                    fill='#742BF2'
                  />
                  <path
                    d='M11.2345 4.50116C7.92859 2.59228 4.09185 1.5 0 1.5V12.375C1.8386 12.375 3.57752 12.8018 5.12304 13.5618L11.2345 4.50116Z'
                    fill='#742BF2'
                  />
                  <path
                    d='M22.5 9C20.0147 9 18 6.98528 18 4.5C18 2.01472 20.0147 0 22.5 0C24.9853 0 27 2.01472 27 4.5C27 6.98528 24.9853 9 22.5 9Z'
                    fill='#EB864D'
                  />
                  <path
                    d='M58.5 1.5H54V10.5H40.5V1.5H36V9C36 12.3137 38.6863 15 42 15H45V24H49.5V15H52.5C55.8137 15 58.5 12.3137 58.5 9V1.5Z'
                    fill='white'
                  />
                  <path
                    d='M85.5 1.5H81V10.5H67.5V1.5H63V9C63 12.3137 65.6863 15 69 15H81V24H85.5V15H88.5V10.5H85.5V1.5Z'
                    fill='white'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_1_206'>
                    <rect width='114' height='24' fill='white' />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div
              className={`menu ${showMenu ? "active" : ""} ${
                changeMode ? "activeForBg" : ""
              }`}
            >
              <button
                className={`closeMenuBtn ${changeMode ? "active" : ""}`}
                onClick={closeMenu}
              >
                <i class='fa-sharp fa-solid fa-caret-up'></i>
              </button>
              <ul className='menu__ul'>
                <li className='menu__ul-item'>Products</li>
                <li className='menu__ul-item'>Resources</li>
                <li className='menu__ul-item'>Company</li>
                <li className='menu__ul-item'>
                  <button
                    className={`openModal ${changeMode ? "light" : "dark"}`}
                    onClick={openModal}
                  >
                    Modal
                  </button>
                </li>
              </ul>
            </div>
            <div className='btns'>
              <button
                className={`openModal desktop ${changeMode ? "light" : "dark"}`}
                onClick={openModal}
              >
                Modal
              </button>
              <button className='changeMode' onClick={changeColor}>
                {changeMode ? (
                  <i class='fa-solid fa-moon'></i>
                ) : (
                  <i class='fa-solid fa-sun'></i>
                )}
              </button>
              <button
                className={`openMenu ${changeMode ? "light" : "dark"}`}
                onClick={openMenu}
              >
                <i class='fa-solid fa-bars'></i>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`modal ${showModal ? "active" : ""}`}
        onClick={handleOutsideClick}
      >
        <div className={`modal-item ${showModal ? "active" : ""}`}>
          <h3>MODAL</h3>
          <button onClick={closeModal}>
            <i class='fa-solid fa-xmark'></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
