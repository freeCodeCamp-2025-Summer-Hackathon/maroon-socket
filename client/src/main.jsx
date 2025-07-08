import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import Login from './components/Login'
import SignUp from './components/SignUp.jsx'
import AddPlant from './pages/AddPlant.jsx';
import MyPlants from './pages/MyPlants.jsx';
import UserHome from './pages/UserHome.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <SignUp />
  },
  {
    path: "/addPlant",
    element: <AddPlant />
  },
  {
    path: "/myPlants",
    element: <MyPlants />
  },
  {
    path: "/userHome",
    element: <UserHome />
  },
  
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)