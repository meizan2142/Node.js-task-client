import { useForm } from "react-hook-form"
import { NavLink, useLocation, useNavigate } from "react-router"
import { useAuth } from "../../hooks/useAuth"

const Register = () => {
    const { createUser } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        const email = data.email;
        const username = data.username;
        const password = data.password
        const userInfo = { email, password, username }
        console.log(userInfo);
        

        createUser(email, password)
        .then(res => {
            console.log(res.user);
            navigate(location?.state ? location?.state : '/login')
        })
        .catch(error => {
            console.log(error);
        })
        //     .then(() => {
        //         axios.post('https://full-stack-backend-liart.vercel.app/users', userInfo).then(res => {
        //             if (res.data.insertedId) {
        //                 Swal.fire({
        //                     position: "top-center",
        //                     icon: "success",
        //                     title: "Registered and stored.",
        //                     showConfirmButton: false,
        //                     timer: 1500
        //                 });
        //                 navigate(location?.state ? location?.state : '/')
        //             }
        //         })
        //     })
    }
    return (
        <div className="mx-auto  my-56 w-full max-w-md space-y-8 rounded-lg border bg-white p-7 shadow-xl mobile:p-10  ">
            <h1 className="text-3xl font-semibold tracking-tight">SIGN UP</h1>
            {/* Form starts from here */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2 text-sm">
                    <label htmlFor="username" className="block text-black font-medium">
                        Username
                    </label>
                    <input
                        className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                        id="username"
                        placeholder="Username"
                        type="text"
                        {...register('username', { 'required': true })}
                    />
                    {errors.username?.type === 'required' && (
                        <p className='text-red-400'>Name is required</p>
                    )}
                </div>
                <div className="space-y-2 text-sm">
                    <label htmlFor="username" className="block text-black font-medium">
                        Email
                    </label>
                    <input
                        className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                        id="email"
                        placeholder="Enter email"
                        type="email"
                        {...register('email', { 'required': true })}
                    />
                    {errors.email?.type === 'required' && (
                        <p className='text-red-400'>Email is required</p>
                    )}
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
                </div>
                <button className="rounded-md bg-sky-500 px-4 py-2 text-white mx-40 transition-colors hover:bg-sky-600 dark:bg-sky-700">Submit</button>
            </form>
            <p className="text-center text-sm text-black">
                Already have an account?
                <NavLink to='/login' className="font-semibold underline">signIn</NavLink>
            </p>
        </div>
    )
}

export default Register