import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import About from "./src/components/About";
import Error from "./src/components/Error";
import Help from "./src/components/Help";
import RestaurantMenu from "./src/components/RestaurantMenu";

const AppLayout = () => {
    return (<div className="app">
        <Header/>
        <Outlet/>
        <Footer/>
    </div>);
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/help",
                element: <Help />
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu/>
            }
        ],
        errorElement: <Error />
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);





