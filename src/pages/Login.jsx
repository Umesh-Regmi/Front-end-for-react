import React from 'react'
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <div style={{minHeight:'90vh'}}>
    <div className='w-1/2 p-5 bg-slate-200 m-auto my-3 rounded-lg'>
        <h1 className='text-3xl text-center font-bold underline mb-3'>Login</h1>
        <label htmlFor="email" className='text-xl text-left'>E-mail</label>
        <input type="text" id="email" className='w-full  outline-slate-500 px-2 py-1' />
        <label htmlFor="pwd" className='text-xl text-left'>Password</label>
        <input type="password" id="pwd" className='w-full  outline-slate-500 px-2 py-1' />
        <button className='bg-blue-500 w-full my-2 py-1 rounded text-white'>Login</button>
        <div className='flex justify-between'>
        <span>Do not have an account? <Link to='/register' className='text-blue-800 hover: text-blue-900 hover:bg-gray-400 active:text-blue-950 px-2 py-1 rounded hover:text-white'>Register</Link></span>
        
        <Link to='/forgotpassword' className='text-blue-800 hover: text-blue-900 hover:bg-gray-400 active:text-blue-950 px-2 py-1 rounded hover:text-white'>Forget Password</Link>
        </div>
        
    </div>
    </div>
  )
}

export default Login