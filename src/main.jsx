import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router.jsx'
import { Suspense } from 'react'
import Loading from './components/Loading.jsx'

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
<Suspense fallback={<Loading/>}>
  <RouterProvider router={router} />
</Suspense>  </StrictMode>,
)
