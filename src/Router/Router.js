import { createBrowserRouter } from "react-router-dom";
import App from "../Components/App";
import Home from "../Components/Home";
import Toprated from "../Components/Toprated";
import Upcoming from "../Components/Upcoming";
import Favourite from "../Components/Favourite";
import Popular from "../Components/Popular";
import Details from "../Components/Details";

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
            }
        ])
    }
])

export default Router;
