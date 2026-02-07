import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "./Loading.jsx";

const App = lazy(() => import("../App.jsx"));
const Home = lazy(() => import("./Home.jsx"));
const About = lazy(() => import("./About.jsx"));
const Service = lazy(() => import("./Service.jsx")); // Ensure casing matches filename
const Gallery = lazy(() => import("./Gallery.jsx"));
const ContactUs = lazy(() => import("./Contact-us.jsx")); // Ensure casing matches filename

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <App />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Loading />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/gallery",
        element: (
          <Suspense fallback={<Loading />}>
            <Gallery />
          </Suspense>
        ),
      },
      {
        path: "/service",
        element: (
          <Suspense fallback={<Loading />}>
            <Service />
          </Suspense>
        ),
      },
      {
        path: "/contact-us",
        element: (
          <Suspense fallback={<Loading />}>
            <ContactUs />
          </Suspense>
        ),
      },
       {
        path: "*",
        element: (
             <div className="min-h-screen flex items-center justify-center bg-black text-gold text-2xl font-title">
                404 - Page Not Found
             </div>
        ),
      },
    ],
  },
]);

export default router;
