import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import imageSrc from '../assets/image.png'; // Adjust the path as necessary
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        email:"",
        password:""
    })

    const handleLogin = (e)=>{
        e.preventDefault();
        const loggeduser = JSON.parse(localStorage.getItem("user"));
        if(input.email === loggeduser.email && input.password === loggeduser.password){
            localStorage.setItem("loggedin", true);
            navigate('/');
        }else{
            alert("wrong email or password");
        }
    }
  return (
    <div className='flex justify-between px-[60px] '>
      <form onSubmit={handleLogin} className='flex flex-col items-center bg-white rounded-[30px] w-[480px] h-[648px] pt-[58px] px-[52px] gap-[32px]'>
            <p className='font-bold text-2xl bg-white'>Sign in</p>
            <p className='bg-white'>Hey, Enter your details to login to your account</p>
            <div className='flex flex-col gap-[12px] bg-white'>
                <input className='w-[376px] h-[48px] bg-white rounded-[8px] border-[1px] px-[30px] border-[#5D5D5D]' type="text" name="email" value={input.email} onChange={(e)=>setInput({...input, [e.target.name]:e.target.value})} placeholder='Enter Email / Phone No'/>
                <input className='w-[376px] h-[48px] bg-white rounded-[8px] border-[1px] px-[30px] border-[#5D5D5D]' type="password" name="password" value={input.password} onChange={(e)=>setInput({...input, [e.target.name]:e.target.value})} placeholder='Password'/>
                <p className='text-left bg-white text-[#cfcfcf]'>Don't have an account yet?<Link className='font-bold bg-white text-black' to='/register'>Register now!</Link></p>
            </div>
           <div className='flex flex-col bg-white items-center gap-[32px]'>
                <button type='submit' className='bg-[#AED6B3] py-[16px] px-[30px] text-white font-bold w-[376px] rounded-[8px]'>Sign in</button>
                <p className='bg-white '>Or sign in with</p>
                <div className='bg-white flex flex-row gap-[7px]'>
                    <p className='rounded-[40px] bg-white py-[16px] px-[30px] border-[1px] border-[#000000]'>Google</p>
                    <p className='rounded-[40px] bg-white py-[16px] px-[30px] border-[1px] border-[#000000]'>apple ID</p>
                    <p className='rounded-[40px] bg-white py-[16px] px-[30px] border-[1px] border-[#000000]'>Facebook</p>
                </div>
                <p className='text-left bg-white text-[#cfcfcf]'>Don't have an account yet?<Link className='font-bold bg-white text-black' to='/register'>Register now!</Link></p>

            </div> 
      </form>
      <div><img src={imageSrc} alt="" /></div>
    </div>
  )
}

export default Login
