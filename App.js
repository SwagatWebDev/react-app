import React, {lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import About from "./src/components/About";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
import UserContext from "./src/utils/UserContext";
import {Provider} from "react-redux";

const Grocery = lazy(() => import("./src/components/Grocery"));

const Help = lazy(() => import("./src/components/Help"));

const AppLayout = () => {

    const [userName, setUserName] = useState();
    const [profilePicture, setProfilePicture] = useState();

    // authentication logic
    useEffect(() => {
        // Make an API call and send the username and password
        fetchGitHubUserInfo();
        const data = {
            name: "Swagat Mishra"
        }
    }, [])

    const fetchGitHubUserInfo = async () => {
        const data = await fetch("https://api.github.com/users/SwagatWebDev");
        const response = await data.json();
        setUserName(response.name);
        setProfilePicture(response.avatar_url)
    }

    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser: userName, profilePicture, setUserName}}>
                <div className="app">
                    <Header/>
                    <Outlet/>
                    <Footer/>
                </div>
            </UserContext.Provider>
        </Provider>
    );
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/help",
                element: <Suspense fallback={<h1>Loading...</h1>}><Help/></Suspense>
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu/>
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
            },
        ],
        errorElement: <Error/>
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);





