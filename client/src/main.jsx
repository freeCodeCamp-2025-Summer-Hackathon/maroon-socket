import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
import App from './App.jsx';
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';
import AddPlant from './pages/AddPlant.jsx';
import MyPlants from './pages/MyPlants.jsx';
import UserHome from './pages/UserHome.jsx';
import Community from './pages/Community.jsx';
import LandingPage from './pages/LandingPage.jsx';
import DetailedPost from './pages/DetailedPost.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import Profile from './pages/Profile.jsx';
import ErrorPage from './pages/ErrorPage.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage/>,
        children: [
            { path: '/', element: <LandingPage /> },
            {
                path: '/addPlant',
                element: (
                    <ProtectedRoute>
                        <AddPlant />
                    </ProtectedRoute>
                )
            },
            {
                path: '/myPlants',
                element: (
                    <ProtectedRoute>
                        <MyPlants />
                    </ProtectedRoute>
                )
            },
            {
                path: '/userHome',
                element: (
                    <ProtectedRoute>
                        <UserHome />
                    </ProtectedRoute>
                )
            },
            {
                path: '/community',
                element: <Community />
            },
            { path: 'community/:id', element: <DetailedPost /> },
            {
                path: '/profile',
                element: (
                    <ProtectedRoute>
                        <Profile />
                    </ProtectedRoute>
                )
            }
        ]
    },
    { path: '/login', element: <Login /> },
    { path: '/signup', element: <SignUp /> }
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
