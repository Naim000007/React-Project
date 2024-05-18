import {
    createBrowserRouter,
    Outlet,
} from "react-router-dom";
import Register from "../page/Register";
import Login from "../page/Login";
import Single from "../page/Single";
import Write from "../page/write";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Home from "../page/Home";

const Layout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/post/:id",
                element: <Single />,
            },
            {
                path: "/write",
                element: <Write />,
            },
            {
                path: "/single",
                element: <Single />,
            },
        ]
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/single",
        element: <Single />,
    },
    {
        path: "/write",
        element: <Write />,
    },
]);


export default router;

