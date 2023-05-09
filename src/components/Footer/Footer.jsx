/** @format */
import axios from "axios";
import { useState, useEffect } from "react";
import Style from "./footer.module.scss";

const Footer = () => {
  const [data, setData] = useState([]);
  const [moreData, setMoreData] = useState(false);

  const options = {
    method: "GET",
    url: "https://twitter154.p.rapidapi.com/trends/available",
    headers: {
      "X-RapidAPI-Key": "9ecb531f17msh8c5ad715bde0fcap15c129jsn08147c440974",
      "X-RapidAPI-Host": "twitter154.p.rapidapi.com",
    },
  };

  const fetchTrends = async () => {
    try {
      const response = await axios.request(options);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTrends();
  });

  function toggleShowMore() {
    setMoreData(!moreData);
  }

  const threeData = data.slice(50, moreData ? 57 : 53);

  const trends = threeData.map((trend, index) => {
    return (
      <div key={index} className={Style.trend}>
        <span className='trending'>trending in {trend?.country}</span>
        <strong className='trandName'>{trend.name}</strong>
        <span className='views'>{trend?.woeid} wiews</span>
      </div>
    );
  });

  return (
    <footer>
      <div className={Style.footer}>
        <div className={Style.search}>
          <input type='text' placeholder='Search Twitter' />
        </div>
        <div className={Style.trends}>
          <h3>Trends for you</h3>
          {trends}
          <span className={Style.showMore} onClick={toggleShowMore}>
            {moreData ? "Hide" : "Show more"}
          </span>
        </div>
        <div className={Style.info}>
          <span>Terms of Service</span>
          <span>Privacy Policy</span>
          <span>Cookie Policy</span>
          <span>Imprint</span>
          <span>Ads Info</span>
          <span>© 2021 Twitter, Inc.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
