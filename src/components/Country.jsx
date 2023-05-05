/** @format */
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, NavLink } from "react-router-dom";

const Country = () => {
  const { countryName } = useParams();
  const [singleData, setSingleData] = useState([]);

  const url = `https://restcountries.com/v3.1/name/${countryName}`;
  const fetchSingleCountry = async (url) => {
    try {
      const response = await axios.get(url);
      setSingleData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchSingleCountry(url);
  }, [url]);

  console.log(singleData);

  return (
    <div className='container'>
      <div className='box'>
        {singleData.map((country, index) => (
          <div key={index} className='card'>
            <img src={country.flags.svg} alt={country.flags.alt} />
            <h2>{country.name.common}</h2>
            <h4>Capital: {country.capital}</h4>
            <h5>Population: {country.population}</h5>
            <NavLink to={"/"}>
              <span>Back</span>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Country;
