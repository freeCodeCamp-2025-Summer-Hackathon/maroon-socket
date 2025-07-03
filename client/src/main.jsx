import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import Login from './components/Login'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "login",
    element: <Login />
  },
  
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)