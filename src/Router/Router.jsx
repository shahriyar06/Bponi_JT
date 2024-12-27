import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Error from "../Page/Error";
import Home from "../Page/Home";
import Restaurant from "../Page/Restaurant";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <Error/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: 'restaurant',
                element: <Restaurant/>
            }
        ],
    },
]);

export default router;