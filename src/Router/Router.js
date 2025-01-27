import { createBrowserRouter } from "react-router-dom";
import App from "../Components/App";
import Home from "../Components/Home";
import Toprated from "../Components/Toprated";
import Upcoming from "../Components/Upcoming";
import Favourite from "../Components/Favourite";
import Popular from "../Components/Popular";
import Details from "../Components/Details";
import Signup from "../Components/Signup";
import Login from "../Components/Login";

const Router = createBrowserRouter([
    {
        path: "",
        element: <App />,
        children: ([
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/top-rated",
                element: <Toprated />
            },
            {
                path: "/upcoming",
                element: <Upcoming />
            },
            {
                path: "/favourite",
                element: <Favourite />
            },
            {
                path: "/popular",
                element: <Popular />,
            },
            {
                path: "/detail/:id",
                element: <Details />,
            },
            {
                path: "/sign-up",
                element: <Signup />
            },
            {
                path: "/login",
                element: <Login />
            }
        ])
    }
])

export default Router;
