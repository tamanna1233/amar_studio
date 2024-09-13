import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './components/router.jsx'
import {lazy, Suspense } from 'react'
const Loading = lazy(() => import("./components/Loading.jsx"));
createRoot(document.getElementById('root')).render(
  
  <StrictMode>
<Suspense fallback={<Loading/>}>
  <RouterProvider router={router} />
</Suspense>  </StrictMode>,
)
