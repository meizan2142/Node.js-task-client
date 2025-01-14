import { useForm } from "react-hook-form"
import {  NavLink, useLocation, useNavigate } from "react-router"
import { useAuth } from "../../hooks/useAuth"

const LogIn = () => {
    const {signIn} = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const {
        register,
        handleSubmit,
    } = useForm()
    const onSubmit = (data) => {
        signIn(data.email, data.password)
        console.log(data);
        navigate(location?.state ? location?.state : '/info')
    }
    return (
        <div className="mx-auto my-52 w-full max-w-md space-y-8 rounded-lg border bg-white p-7 shadow-xl mobile:p-10  ">
            <h1 className="text-3xl font-semibold tracking-tight">SIGN IN</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2 text-sm">
                    <label htmlFor="username" className="block text-black font-medium">
                        Email
                    </label>
                    <input
                        className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                        id="email"
                        placeholder="Email"
                        type="email"
                        {...register('email', { 'required': true })}
                    />
                </div>
                <div className="space-y-2 text-sm">
                    <label htmlFor="password" className="block text-black font-medium">
                        Password
                    </label>
                    <input
                        className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                        id="password"
                        placeholder="Enter password"
                        type="password"
                        {...register('password', { 'required': true })}
                    />
                    <div className="flex justify-end text-xs">
                        <a href="#" className="text-black hover:underline">
                            Forgot Password?
                        </a>
                    </div>
                </div>
                <button className="rounded-md bg-sky-500 px-4 py-2 mx-40 text-white transition-colors hover:bg-sky-600 dark:bg-sky-700">Submit</button>
            </form>
            <p className="text-center text-sm text-black">
                Don&apos;t have an account?
                <NavLink to='/register' className="font-semibold underline">signup</NavLink>
            </p>
        </div>
    )
}

export default LogIn