/** @format */
import { useState, useEffect } from "react";
import axios from "axios";
import "./cards.scss";
import { NavLink } from "react-router-dom";

const Cards = () => {
  const url = "https://api.spaceflightnewsapi.net/v3/articles";
  const [data, setData] = useState([]);

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

  const changeNormTime = (data) => {
    const time = data.slice(0, 10);
    const year = data.slice(0, 4);
    const monthInNumbers = time.slice(5, 7);
    const day = data.slice(8, 10);

    switch (monthInNumbers) {
      case "01":
        return `${day}-January, ${year}`;
      case "02":
        return `${day}-February, ${year}`;
      case "03":
        return `${day}-March, ${year}`;
      case "04":
        return `${day}-April, ${year}`;
      case "05":
        return `${day}-May, ${year}`;
      case "06":
        return `${day}-June, ${year}`;
      case "07":
        return `${day}-July, ${year}`;
      case "08":
        return `${day}-August, ${year}`;
      case "09":
        return `${day}-September, ${year}`;
      case "10":
        return `${day}-October, ${year}`;
      case "11":
        return `${day}-November, ${year}`;
      case "12":
        return `${day}-December, ${year}`;

      default:
        return `${day}-${monthInNumbers}-${year}`;
    }
  };

  const cards = data.map((card) => (
    <div key={card.id} className='card'>
      <img src={card.imageUrl} alt={card.title} />
      <div className='card__text'>
        <span>{changeNormTime(card.publishedAt)}</span>
        <h5>{card.title}</h5>
        <NavLink to={`/${card.id}`}>Read More...</NavLink>
      </div>
    </div>
  ));

  return (
    <header>
      <div className='container'>
        <div className='cards'>{cards}</div>
      </div>
    </header>
  );
};

export default Cards;
