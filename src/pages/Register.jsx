import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    let [username, setUsername] = useState('')
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')

    let [error, setError] = useState('')
    let [success, setSuccess] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        (username, email, password)
            .then(data => {
                if (data.error) {
                    setError(data.error)
                    setSuccess(false)
                }
                else {
                    setError('')
                    setSuccess(true)
                }
            })
    }
    const showError = () => {
        if (error) {
            return <div className='bg-red-200 text-center text-3xl py-2 text-red-600'>{error}</div>
        }
    }
    const showSuccess = () => {
        if (success) {
            return <div className='bg-green-200 text-center text-3xl py-2 text-green-600'>
                User Registered Successfully
            </div>
        }
    }


    return (
        <div style={{ minHeight: '79vh' }}>
            {showSuccess()}
            <form className='w-1/2 p-5 bg-slate-200 m-auto my-3 rounded-lg'>
                <h1 className='text-3xl text-center font-bold underline mb-3'>Register</h1>
            {showError()}
                <label htmlFor="username" className='text-xl text-left'>Username</label>
                <input type="text" id="username" className='w-full  outline-slate-500 px-2 py-1 rounded'
                    onChange={(event) => {
                        setUsername(event.target.value)
                    }} />
                <label htmlFor="email" className='text-xl text-left'>E-mail</label>
                <input type="text" id="email" className='w-full  outline-slate-500 px-2 py-1 rounded'
                    onChange={e => setEmail(e.target.value)} />
                <label htmlFor="pwd" className='text-xl text-left'>Password</label>
                <input type="password" id="pwd" className='w-full  outline-slate-500 px-2 py-1 rounded'
                    onChange={e => setPassword(e.target.value)} />
                <button className='bg-blue-500 w-full my-2 py-1 rounded text-white'
                    onClick={handleSubmit}>
                    Register</button>
                <span>Already not have an account? <Link to='/login' className='text-blue-800 hover: text-blue-900 hover:bg-gray-400 active:text-blue-950 px-2 py-1 rounded hover:text-white'>Login</Link></span>
            </form>
        </div>
    )
}

export default Register