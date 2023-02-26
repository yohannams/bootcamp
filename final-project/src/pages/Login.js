import axios from 'axios'
import React, { useState } from 'react'
import Cookies from "js-cookie"
import { Navigate, useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";

const Login = () => {

    let navigate = useNavigate()

    const [ input, setInput ] = useState({
        email : "",
        password : ""
    })
    const [user,setUser] = useState({
        email: "",
        name: "",
        image: ""
    })
    const handleInput = (event) => {

        let value = event.target.value
        let name = event.target.name

        setInput({ ...input, [name] : value })
    }

    const LoginRoute = (props) => {
        if(Cookies.get('token') === undefined){
            return props.children;
        }else if(Cookies.get('token') !== undefined){
            return <Navigate to={'/'}/>
        }
    }

    const DashboardRoute = (props) => {
        if(Cookies.get('token') === undefined){
            return <Navigate to={'/'}/>
        }else if(Cookies.get('token') !== undefined){
            return props.children;
        }
    }

    const handleLogin = (event) => {

        event.preventDefault()

        let { email, password } = input
        // console.log(input)

        axios.post('https://dev-example.sanbercloud.com/api/login', {email, password} )
        .then((res) => {
            let data = res.data
            Cookies.set('token', data.token, {expires : 1})
            Cookies.set('user', JSON.stringify(data.user), {expires : 1})
            navigate('/')
        })

        .catch((error) => {
            // console.log(error)
            alert(error.message)
        })

    }

    return(
        <>
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Login to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input value={input.email} onChange={handleInput} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input value={input.password} onChange={handleInput} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                            </div>
                            <button type="submit" className="bg-emerald-400 w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Login</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet? <Link to="/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Register here</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </>

    )

}

export default Login