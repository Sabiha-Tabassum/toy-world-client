import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AddToy from "../Pages/AddToy/AddToy";
import AllToys from "../Pages/AllToys/AllToys";
import MyToy from "../Pages/MyToy/MyToy";


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
          element: <MyToy></MyToy>
        }

        
      ]
    },
  ]);

  export default router;