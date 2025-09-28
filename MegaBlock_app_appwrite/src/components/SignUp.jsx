import React from 'react'
import { useState } from "react"
import authService from '../appWrite/auth'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../store/authSlice'
import { Button, Input, Logo } from './Index'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

function SignUp() {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [error, setError] = useState("")
    const { register, handleSubmit } = useForm()
    const create = async (data) => {
        setError("")
        try {
            const userData = await authService.createAccount(data)
            if (userData) {
                const userData = await authService.getCurrentUser()
                if (userData) {
                    dispatch(login(userData))
                    navigate("/")
            }
            }
        } catch (error) {
            setError(error.message);
        }
    }
    return (
        <div className='flex items-center justify-center'>
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">SignUp in your account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
                <form onSubmit={handleSubmit(create)}>
                    <Input
                        lable="Name"
                        type="text"
                        placeholder="Enter your name: "
                        {...register("name", {
                            required: true,
                        })}
                    />
                    <Input
                        lable="Email"
                        type="email"
                        placeholder="Enter your name"
                        {...register("email", {
                            required: true,
                            validate: {
                                matchPattern: (value) => /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(value) ||
                                    "Email address is must be a valid address"
                            }
                        })}
                    />
                    <Input
                        lable="Password"
                        type="password"
                        placeholder="Enter your password"
                        {...register("password", {
                            required: true,
                            validate: {
                                matchPattern: (value) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value) ||
                                    "Password is valid "
                            }
                        })}
                    />
                    <Button
                        type='submit'
                        className='w-full'
                    >
                        Sign Up
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default SignUp
