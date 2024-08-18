import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Cab from './Cab.jsx'
import Hotel from './Hotel.jsx'
import Error from './Error.jsx'
import Train from './Train.jsx'

const appRouter=createBrowserRouter(
  [
    {
      path:"/",
      element:<App/>,
      errorElement:<Error></Error>,
      children:[
        {
          path:"/trains",
          element:<Train></Train>
        },
        {
          path:'/cab',
          element:<Cab></Cab>
        },
        {
          path:'/hotel',
          element:<Hotel></Hotel>
        }
      ]
    },
    
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter}></RouterProvider>
  </React.StrictMode>
)
