/** @format */
import { useParams, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./card.scss";

const Card = () => {
  const [singleData, setSingleData] = useState([]);
  const { id } = useParams();

  const url = `https://api.spaceflightnewsapi.net/v3/articles/${id}`;

  const fetchSingleData = async (url) => {
    const response = await axios.get(url);
    setSingleData(response.data);
  };

  useEffect(() => {
    fetchSingleData(url);
  }, [url]);

  console.log(singleData);

  return (
    <div className='header'>
      <div key={singleData.id} className='card'>
        <img src={singleData.imageUrl} alt={singleData.title} />
        <div className='card__text'>
          <h5>{singleData.title}</h5>
          <p>{singleData.summary}</p>
          <NavLink to='/'>Back</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Card;
