/** @format */
import { useState } from "react";
import Data from "../assets/Data";

const GitUsers = () => {
  const [data, setData] = useState(Data);

  const filteredUsers = (e) => {
    if (e.target.value !== "") {
      const filteredData = data.filter((user) => {
        return user.login.toLowerCase().includes(e.target.value.toLowerCase());
      });
      setData(filteredData);
    } else {
      setData(Data);
    }
  };

  const renderUsers = data.map((user, index) => (
    <div
      key={index}
      className='p-[25px] w-[250px] h-[205px] bg-[#0d1117] border-[1px] border-[#30363d] rounded-[6px] overflow-hidden text-[#f0f0f0]'
    >
      <div className='my-0 mx-auto w-[70px] h-[70px] rounded-full mb-2'>
        <img
          className='w-[70px] h-[70px] rounded-full'
          src={user.avatar_url}
          alt='human'
        />
      </div>
      <div className='flex items-center flex-col gap-4'>
        <div className='flex items-center gap-[10px]'>
          <i className='fa-solid fa-user'></i>
          <div className='text'>{user.login}</div>
        </div>
        <div className='flex items-center gap-[10px]'>
          <i className='fa-solid fa-link fa-fade'></i>
          <a href={user.html_url}>hisobga o‘tish uchun havola</a>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <h2 className='mt-[50px] text-center text-white text-[36px] font-bold my-4'>
        <i className='fa-brands fa-github fa-flip mr-4'></i>GitHub hisoblar
      </h2>
      <div className='flex justify-center'>
        <input
          className='w-[400px] md:w-full border-2 outline-none text-[20px] p-4 border-[#30363d] bg-transparent text-white rounded-[20px]'
          type='search'
          placeholder='Qidiruv...'
          onChange={filteredUsers}
        />
      </div>
      <div className='my-7 flex justify-center flex-wrap gap-[10px]'>
        {renderUsers}
      </div>
    </>
  );
};

export default GitUsers;
