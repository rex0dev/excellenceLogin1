import React from 'react'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const navigate = useNavigate();
    const handleLogOut = (e)=>{
        localStorage.removeItem("loggedin");
        navigate('/login');
    }
    const userName = JSON.parse(localStorage.getItem("user"));
  return (
    <div>
      {userName.name}
      <button type='submit' onClick={handleLogOut} className='bg-[#AED6B3] py-[16px] px-[30px] text-white font-bold w-[376px] rounded-[8px]'>Log Out</button>
    </div>
  )
}

export default Home
