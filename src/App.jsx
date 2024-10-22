import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './components/Root'
import ErroePage from './components/pages/errorpages/ErroePage'
import DefaultHomePage from './components/pages/DefaultHomePage'
import Dashboard from './components/pages/Dashboard'
import Login from './components/pages/Login'
import ProtectedRoute from './components/helpers/ProtectedRoute'
import CreateUser from './components/users/CreateUser'
import ShowAllUsers from './components/users/ShowAllUsers'
import ShowProfile from './components/users/ShowProfile'
import UpdateUser from './components/users/UpdateUser'

const App = () => {
    const route = createBrowserRouter([
        {
            path:"/",
            element:<Root/>,
            errorElement:<ErroePage/>,
            //When the user is accessing a non existing path thta time the error element will render. in the entire routing concept if any error triggered then the error element will show in UI
            children:[
            {
                // path:"/",
                index:true, // it helps to make an componenrt or element give 1st priority to follow a parent. If we have n no. of children then only one need to have index:true
                element:<DefaultHomePage/>
            },
            {
                path:"dashboard",
                element:<ProtectedRoute>
                    <Dashboard/>
                </ProtectedRoute>,
                children:[
                    {
                        path:"/dashboard/createuser",
                        element:<CreateUser/>
                    },
                    {
                        path:"/dashboard/allusers",
                        element:<ShowAllUsers/>,
                    },
                    {
                        path:"/dashboard/profile",
                        element:<ShowProfile/>
                    },
                    {
                        path:"/dashboard/updateuser/:slug",
                        element:<UpdateUser/>
                    }
                ]
            },
            {
                path:"login",
                element:<Login/>
            }
            ]
        }
    ])
    return <RouterProvider router={route}></RouterProvider>
}

export default App