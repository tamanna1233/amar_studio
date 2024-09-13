
import { lazy, Suspense } from "react"
import {createBrowserRouter} from "react-router-dom"
 const Service=lazy(()=>import("./components/Service.jsx")) 
 const Contactus = lazy(()=>import ("./components/Contact-us.jsx")) 
const Loading=lazy(()=>import("./components/Loading.jsx"))

const App =lazy(()=>import("./App"))
const Home =lazy(()=>import("./components/Home.jsx"))
const About=lazy(()=>import("./components/About.jsx"))
const Gallery =lazy(()=>import("./components/Gallery.jsx"))
const router=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:(<div><Home/> <About/> <Service/>  <Contactus/></div>)

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