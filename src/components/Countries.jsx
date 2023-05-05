/** @format */
import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "../components/countries.scss";

const Countries = () => {
  const url = "https://restcountries.com/v3.1/all";
  const [data, setData] = useState([]);

  // const handleUzb = () => {
  //   setUrl("https://restcountries.com/v3.1/name/uzbekistan");
  // };
  // const handleGermany = () => {
  //   setUrl("https://restcountries.com/v3.1/name/germany");
  // };
  // const handleAll = () => {
  //   setUrl("https://restcountries.com/v3.1/all");
  // };

  const fetchData = async (url) => {
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return (
    <header>
      <div className='container'>
        <div className='info'>
          <span>Click on the flag for more information!</span>
        </div>
        <div className='box'>
          {data.map((countries, index) => (
            <div key={index} className='card'>
              <NavLink to={`/name/${countries.name.common.toLowerCase()}`}>
                <img src={countries.flags.svg} alt={countries.flags.alt} />
              </NavLink>
              <h2>{countries.name.common}</h2>
              <h4>Capital: {countries.capital}</h4>
              <h5>Population: {countries.population}</h5>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Countries;
