import { createBrowserRouter } from "react-router-dom";
import LogIn from "./Pages/LogIn/LogIn";
import Register from "./Pages/Register/Register";
import Home from "./Pages/Home/Home";
import MainLayout from "./Pages/MainLayout/MainLayout";
import Info from "./Pages/Info/Info";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <LogIn />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/info',
                element: <Info />
            },
        ]
    }
]);
export default router;