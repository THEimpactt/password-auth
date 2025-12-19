import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignDawg from './assets/signdawg'
import LogDawg from './assets/logdawg'
import Dashdash from './assets/Dashdash'

  let routy=createBrowserRouter(
    [
      {
        path:'/login',
        element: <LogDawg/>
      },
      {
        path:'/',
        element: <SignDawg/>
      },
      {
        path:'/dashboard',
        element: <Dashdash/>
      },
    ]
  )


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routy}/>
  </StrictMode>,
)
