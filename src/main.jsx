import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const myCreatedRoute = createBrowserRouter([
  {
    path: '/',
    element: <div>hello</div>
  },
  {
    path:'/products',
    element: <div>products</div>
  },
  {
    path:'/about',
    element: <div>abouts</div>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={myCreatedRoute}></RouterProvider>
  </React.StrictMode>,
)
