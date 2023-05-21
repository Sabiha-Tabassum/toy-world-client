import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AddToy from "../Pages/AddToy/AddToy";
import AllToys from "../Pages/AllToys/AllToys";
import MyToy from "../Pages/MyToy/MyToy";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";
import DetailsPage from "../Pages/DetailsPage/DetailsPage";
import Blog from "../Pages/Blog/Blog";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>

        },

        {
          path: 'login',
          element: <Login></Login>
        },

        {
          path: 'register',
          element: <Registration></Registration>
        },

        {
          path: 'addtoy',
          element: <AddToy></AddToy>
        },

        {
          path: 'alltoys',
          element: <AllToys></AllToys>,
         

          
        },

        {
          path: 'mytoy',
          element: <PrivateRoute><MyToy></MyToy></PrivateRoute>
        },

        {
          path: 'details/:id',
          element: <DetailsPage></DetailsPage>,
          loader: ({params}) => fetch(`https://toy-world-server-lilac.vercel.app/addToy/${params.id}`)
        },

        {
          path: 'blog',
          element: <Blog></Blog>
        }

      

        
      ]
    },
  ]);

  export default router;