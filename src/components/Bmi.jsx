/** @format */
import { useState } from "react";

const Bmi = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState("");

  const [bmi, setBmi] = useState(() => {
    const localItem = localStorage.getItem("bmi");
    return localItem ? JSON.parse(localItem) : [];
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (weight === "" || height === "") {
      setResult("Iltimos ma'lumot kiriting!");
      return;
    } else {
      setResult("");
      const userBmi = (weight / (height / 100) ** 2).toFixed(1);

      setBmi([
        ...bmi,
        {
          userBmi: userBmi,
        },
      ]);
    }

    setHeight("");
    setWeight("");
  };

  localStorage.setItem("bmi", JSON.stringify(bmi));

  const handleDeleteAllItem = () => {
    setBmi([]);
  };

  const renderBmi = bmi.map((item, index) => {
    return (
      <div key={index} className='result'>
        <span className='font-semibold'>{(index += 1)}. </span>
        <span className='underline'>{item.userBmi}</span>
      </div>
    );
  });

  return (
    <div className='container mb-7'>
      <h2 className='text-center text-white text-[36px] font-bold my-4'>
        BMI (Body Mass Index) Calculator
      </h2>
      <form
        onSubmit={handleSubmit}
        className='mt-5 flex items-center justify-center gap-2 md:flex-col'
      >
        <input
          className='md:w-full border-2 outline-none text-[20px] p-2 border-[#30363d] bg-transparent text-white'
          type='number'
          value={weight}
          placeholder='O‘g‘irligingiz /kg'
          onChange={(e) => setWeight(e.target.value)}
        />
        <input
          className='md:w-full border-2 outline-none text-[20px] p-2 border-[#30363d] bg-transparent text-white'
          type='number'
          value={height}
          placeholder="Bo'yingiz /sm"
          onChange={(e) => setHeight(e.target.value)}
        />
        <button
          type='submit'
          className='bg-cyan-500 hover:bg-cyan-600 rounded-[20px] p-[15px]  text-[#FFF] text-[18px] font-bold'
        >
          Hisoblash
        </button>
        <button
          onClick={handleDeleteAllItem}
          type='button'
          className='bg-red-500 hover:bg-red-600 rounded-[20px] p-[15px] text-[#FFF] text-[18px] font-bold'
        >
          Tozalash
        </button>
      </form>
      <br />
      <div className='font-black text-center text-white'>{result}</div>
      <div className='text-[20px] text-center text-white'>{renderBmi}</div>
    </div>
  );
};

export default Bmi;
