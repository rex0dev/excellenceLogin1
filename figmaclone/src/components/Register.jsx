import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Register = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        name:"",
        email:"",
        password:"",
        confirmpassword:""
    })

    const handleSubmit = (e)=>{
        e.preventDefault();
        localStorage.setItem("user", JSON.stringify(input));
        navigate("/login");
    }
  return (
    <div>
      <div className='flex justify-center px-[60px] '>
      <form onSubmit={handleSubmit} className='flex flex-col items-center bg-white rounded-[30px] w-[480px] h-[648px] pt-[58px] px-[52px] gap-[32px]'>
            <p className='font-bold text-2xl bg-white'>Register</p>
            <div className='flex flex-col gap-[12px] bg-white'>
                <input className='w-[376px] h-[48px] bg-white rounded-[8px] border-[1px] px-[30px] border-[#5D5D5D]' type="text" name="name" id="" value={input.name} onChange={(e)=>setInput({...input, [e.target.name]:e.target.value})} placeholder='Username'/>
                <input className='w-[376px] h-[48px] bg-white rounded-[8px] border-[1px] px-[30px] border-[#5D5D5D]' type="text" name="email" value={input.email} onChange={(e)=>setInput({...input, [e.target.name]:e.target.value})} id="" placeholder='Enter Email / Phone No'/>
                <input className='w-[376px] h-[48px] bg-white rounded-[8px] border-[1px] px-[30px] border-[#5D5D5D]' type="password" name="password" value={input.password} onChange={(e)=>setInput({...input, [e.target.name]:e.target.value})} id="" placeholder='Password'/>
                <input className='w-[376px] h-[48px] bg-white rounded-[8px] border-[1px] px-[30px] border-[#5D5D5D]' type="password" name="confirmpassword" value={input.confirmpassword} onChange={(e)=>setInput({...input, [e.target.name]:e.target.value})} id="" placeholder='Confirm Password'/>
                <p className='text-left bg-white text-[#cfcfcf]'>Already has an account?<Link className='font-bold bg-white text-black' to='/login'>Login</Link></p>
            </div>
           <div className='flex flex-col bg-white items-center gap-[32px]'>
                <button type='submit' className=' bg-[#AED6B3] py-[16px] px-[30px] text-white font-bold w-[376px] rounded-[8px]'>Register</button>
            </div> 
      </form>
    </div>
    </div>
  )
}

export default Register
