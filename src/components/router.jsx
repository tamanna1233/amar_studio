
import { lazy, Suspense } from "react"
import {createBrowserRouter} from "react-router-dom"
 const Service=lazy(()=>import("./Service.jsx")) 
 const Contactus = lazy(()=>import ("./Contact-us.jsx")) 
const Loading=lazy(()=>import("./Loading.jsx"))

const App =lazy(()=>import("../App.jsx"))
const Home =lazy(()=>import("./Home.jsx"))
const About=lazy(()=>import("./About.jsx"))
const Gallery =lazy(()=>import("./Gallery.jsx"))

const router=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:(<div><Home/> ,<About/> ,<Service/> , <Contactus/></div>)

            },
            {
                path:"/About",
                element:<Suspense fallback={<Loading/>}><About/></Suspense>

            },
            {
                path:"/Gallery",
                element:<Suspense fallback={<Loading/>}><Gallery/></Suspense>

            },
            {
            path:"/service",
            element:<Suspense fallback={<Loading/>}><Service/> </Suspense>
        },
         {
            path:"/Contact-us",
            element:<Suspense fallback={<Loading/>}><Contactus/></Suspense>
         }
        ]
    }
])

export default router