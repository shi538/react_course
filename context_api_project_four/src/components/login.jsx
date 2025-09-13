
import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { setData } = useContext(UserContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        setData({ email, password })
    }
    return (
        <div className='flex flex-col text-black  w-1/2               mx-auto  p-4 shadow-md  gap-y-3'>
            <h1 className='flex items-center text-xl'>Login</h1>
            <input
                className='py-2 px-5 rounded-md'
                type='email'
                placeholder='Enter your email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type='password'
                className='py-2 px-5 rounded-md'
                placeholder='Enter your password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button className=" p-2 bg-gray-200" onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login;
