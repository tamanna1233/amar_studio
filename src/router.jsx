
import { lazy } from "react"
import {createBrowserRouter} from "react-router-dom"
import Service from "./components/Service.jsx"
import Contactus from "./components/Contact-us.jsx"


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
                element:<About/>

            },
            {
                path:"/Gallery",
                element:<Gallery/>

            },
            {
            path:"/service",
            element:<Service/>
        },
         {
            path:"/Contact-us",
            element:<Contactus/>
         }
        ]
    }
])

export default router