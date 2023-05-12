/** @format */
import { useState, useRef } from "react";

const Gradus = () => {
  const [gradus, setGradus] = useState(16);
  const [hot, setHot] = useState(false);
  const intervalRef = useRef(null);

  const handleToggle = () => {
    if (gradus >= 20) {
      setHot(true);
    }
    if (gradus < 20) {
      setHot(false);
    }
  };

  const handleIncrementGradus = () => {
    setGradus(gradus + 1);
    handleToggle();
  };

  const handleIntervalIncrementGradus = () => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      setGradus((prevGradus) => prevGradus + 1);
    }, 200);
    handleToggle();
  };
  const handleClearInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    handleToggle();
  };
  const handleDecrementGradus = () => {
    setGradus(gradus - 1);
    handleToggle();
  };

  const handleIntervalDecrementGradus = () => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      setGradus((prevGradus) => prevGradus - 1);
    }, 200);
    handleToggle();
  };

  return (
    <div className='container mt-[50px]'>
      <h2 className='text-center text-white text-[36px] font-bold my-4'>
        Gradusnik
      </h2>
      <section
        className={`mx-auto p-8 flex items-center justify-center flex-col gap-4 w-60 h-auto rounded-t-full rounded-b-[2500px] bg-sky-800  shadow-2xl text-white`}
      >
        <article
          className={`w-[200px] h-[200px] border-2 border-white rounded-full flex justify-center items-center ${
            hot ? "bg-red-800" : "bg-sky-400"
          } text-[36px] font-bold`}
        >
          {gradus}°C
        </article>
        <article className='flex items-center justify-center gap-5'>
          <button
            className='w-[70px] h-[70px] rounded-full cursor-pointer text-[36px] border-2 border-white bg-gray-500 hover:translate-y-[-4px] transition-all'
            onClick={handleIncrementGradus}
            onMouseDown={handleIntervalIncrementGradus}
            onMouseUp={handleClearInterval}
            onMouseLeave={handleClearInterval}
            onTouchStart={handleIntervalIncrementGradus}
            onTouchEnd={handleClearInterval}
          >
            +
          </button>
          <button
            className='w-[70px] h-[70px] rounded-full cursor-pointer text-[36px] border-2 border-white bg-gray-500 hover:translate-y-[-4px] transition-all'
            onClick={handleDecrementGradus}
            onMouseDown={handleIntervalDecrementGradus}
            onMouseUp={handleClearInterval}
            onMouseLeave={handleClearInterval}
            onTouchStart={handleIntervalDecrementGradus}
            onTouchEnd={handleClearInterval}
          >
            -
          </button>
        </article>
      </section>
    </div>
  );
};

export default Gradus;
