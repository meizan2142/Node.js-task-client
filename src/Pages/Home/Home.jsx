// import { NavLink } from "react-router"

import { NavLink } from "react-router"

const Home = () => {
    return (
        // <div className="text-center my-80 space-x-5">
        //     <NavLink to='/login'><button className="rounded-lg bg-sky-500 px-8 py-3 text-xl text-white duration-300 active:scale-95">SignIn</button></NavLink>
        //     <NavLink to='/register'><button className="rounded-lg bg-sky-500 px-8 py-3 text-xl text-white duration-300 active:scale-95">SignUp</button></NavLink>
        // </div>
        <header className="p-4 dark:bg-gray-100 dark:text-gray-800">
            <div className="container flex justify-between items-center h-16 mx-auto">
                <h1 className="font-bold text-black text-2xl"><NavLink>TaskPlanet</NavLink></h1>
                <ul className="items-stretch hidden space-x-3 lg:flex">
                    <li className="flex">
                        <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border- dark:text-violet-600 dark:border-violet-600">Home</a>
                    </li>
                    <li className="flex">
                        <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border- dark:text-violet-600 dark:border-violet-600">Dashboard</a>
                    </li>
                </ul>
                <div className="items-center flex-shrink-0 hidden lg:flex gap-4">
                    <button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Sign up</button>
                    <button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Sign in</button>
                </div>
                <button className="p-4 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-800">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </header>
    )
}

export default Home
