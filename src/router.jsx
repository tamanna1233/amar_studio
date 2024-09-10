
import { lazy } from "react"
import {createBrowserRouter} from "react-router-dom"


const App =lazy(()=>import("./App"))
const Home =lazy(()=>import("./components/Home.jsx"))
const About=lazy(()=>import("./components/About.jsx"))
const router=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:[<Home/>,<About/>]

            },
            {
                path:"/About",
                element:<About/>

            }
        ]
    }
])

export default router