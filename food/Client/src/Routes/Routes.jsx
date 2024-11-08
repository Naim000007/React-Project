import {
    createBrowserRouter,
    Outlet,
    RouterProvider,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/order/Order";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/menu",
                element: <Menu />
            },
            {
                path: "order",
                element: <Order />
            }
        ]
    }
])