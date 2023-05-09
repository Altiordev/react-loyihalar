/** @format */
import { useState, useEffect } from "react";
import axios from "axios";
import Style from "./mainForHome.module.scss";
import Loader from "../Loader/Loader";

const MainForHome = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const options = {
    method: "GET",
    url: "https://twitter154.p.rapidapi.com/lists/tweets",
    params: {
      list_id: "1591033111726391297",
    },
    headers: {
      "X-RapidAPI-Key": "9ecb531f17msh8c5ad715bde0fcap15c129jsn08147c440974",
      "X-RapidAPI-Host": "twitter154.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.request(options);
      console.log(response.data);
      setData(response.data.results);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  console.log(data);

  const tweets = data.map((card) => {
    return (
      <div className={Style.card} key={card.tweet_id}>
        <div className={Style.user__logo}>
          <img src={card.user.profile_pic_url} alt={card.user.name} />
        </div>
        <div className={Style.textCnt}>
          <div className={Style.user__info}>
            <p>
              <span>{card.user.name}</span> @{card.user.username.toLowerCase()}{" "}
              | {card.user.creation_date.slice(4, 10)}
            </p>
          </div>
          <div className={Style.user__content}>
            <p>{card.text}</p>
          </div>
          <div className={Style.user__actives}>
            <div className={Style.likes}>
              <i className='fa-solid fa-heart'></i>
              {card.user.following_count}
            </div>
            <div className={Style.retweets}>
              <i className='fa-sharp fa-solid fa-retweet'></i>
              {card.user.favourites_count}
            </div>
            <div className={Style.views}>
              <i className='fa-solid fa-eye'></i>
              {card.views}
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <main>
      <div className={Style.header}>
        <h1>Home</h1>
      </div>
      <div className={Style.body}>{tweets}</div>
    </main>
  );
};

export default MainForHome;
