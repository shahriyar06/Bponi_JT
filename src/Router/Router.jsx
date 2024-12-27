import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Error from "../Page/Error";
import Home from "../Page/Home";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <Error/>,
        children: [
            {
                path: '/',
                element: <Home/>
            }
        ],
    },
]);

export default router;