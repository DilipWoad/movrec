import Browse from "./Browse";
import Login from "./Login";
import {createBrowserRouter, RouterProvider} from 'react-router';

const Body=()=>{
    const bodyRoutes = createBrowserRouter([
        {
            path:'/',
            element:<Login/>
        },
        {
            path:'/browse',
            element:<Browse/>
        }
    ])

    return(
        <div>
            <RouterProvider router={bodyRoutes}>
            </RouterProvider>
        </div>
    )
}

export default Body;