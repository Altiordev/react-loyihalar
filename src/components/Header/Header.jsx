/** @format */
import { useState, useEffect } from "react";
import axios from "axios";
import "../Header/header.scss";

const Header = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [url, setUrl] = useState("https://restcountries.com/v3.1/all");
  const [data, setData] = useState([]);

  const handleUzb = () => {
    setUrl("https://restcountries.com/v3.1/name/uzbekistan");
  };
  const handleGermany = () => {
    setUrl("https://restcountries.com/v3.1/name/germany");
  };
  const handleAll = () => {
    setUrl("https://restcountries.com/v3.1/all");
  };

  const fetchData = async (url) => {
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetchData(url);
  }, [url]);

  return (
    <header>
      <div className='container'>
        <div className='btns'>
          <button onClick={handleUzb}>Uzbekistan</button>
          <button onClick={handleGermany}>Germany</button>
          <button onClick={handleAll}>All countries</button>
        </div>
        <div className='box'>
          <div
            className={`${isLoading ? "modal_loader active" : "modal_loader"}`}
          >
            <span className='loader'></span>
          </div>
          {data.map((countries, index) => (
            <div key={index} className='card'>
              <img src={countries.flags.svg} alt={countries.flags.alt} />
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

export default Header;
