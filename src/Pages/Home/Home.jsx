import { NavLink } from "react-router"

const Home = () => {
    return (
        <div className="text-center my-80 space-x-5">
            <NavLink to='/login'><button className="rounded-lg bg-sky-500 px-8 py-3 text-xl text-white duration-300 active:scale-95">SignIn</button></NavLink>
            <NavLink to='/register'><button className="rounded-lg bg-sky-500 px-8 py-3 text-xl text-white duration-300 active:scale-95">SignUp</button></NavLink>
        </div>
    )
}

export default Home
