import React from 'react';
import { CiGlobe } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { MdOutlineArrowOutward } from "react-icons/md";


const NavBar = () => {
  return (
    <div>
        <div className='flex py-[20px] items-center justify-items-end gap-[12px] pl-[970px]'>
      <CiGlobe className='text-2xl'/>
      <Link to="/register"><button>Sign up</button></Link>
      <div><button className='flex items-center py-[12px] px-[18px] font-semibold bg-[#AED6B3] rounded-[4px]'>Request Demo <MdOutlineArrowOutward className='bg-[#AED6B3]'/></button></div>
    </div>
    </div>
  );
};

export default NavBar;
