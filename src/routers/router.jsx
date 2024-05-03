import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import App from "../App.jsx";
  import Home from "../home/Home";
  import Shop from "../shop/Shop";
import Blog from "../components/Blog";
import About from "../components/About.jsx";
import SingleBook from "../shop/SingleBook.jsx";
import DashBoardLayout from "../dashboard/DashBoardLayout.jsx";
import DashBoard from "../dashboard/DashBoard.jsx";
import Uploadbook from "../dashboard/Uploadbook.jsx";
import Managebook from "../dashboard/Managebook.jsx";
import EditBooks from "../dashboard/EditBooks.jsx";
import Signup from "../components/Signup.jsx";
import Login from "../components/Login.jsx";
import PrivateRoute from "../PrivateRoute/PrivateRoute.jsx";
import Logout from "../components/Logout.jsx";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
           path: '/',
           element:  <Home/>
        },
        {
            path: "/shop",
            element: <Shop/>
        },
        {
            path: "/about",
            element: <About/>
        },
        {
            path: "/blog",
            element: <Blog/>
        },{
          path: "/book/:id",
          element: <SingleBook/>,
          loader: ({params})=> fetch(`https://localhost:5000/book/${params.id}`)
        }
      ]
    },
    {
      path: "/admin/dashboard",
      element: <DashBoardLayout/>,
      children: [
         {
          path: "/admin/dashboard",
          element: <PrivateRoute><DashBoard/></PrivateRoute>
         },
         {
          path: "/admin/dashboard/upload",
          element:  <Uploadbook/>
         },
         {
          path: "/admin/dashboard/manage",
          element:  <Managebook/>
         },
         {
          path: "/admin/dashboard/edit-books/:id",
          element:  <EditBooks/>,
          loader: ({params})=> fetch(`https://localhost:5000/book/${params.id}`)
         }
      ]
    },{
      path: "sign-up",
      element: <Signup/>
    },
    {
      path: "login",
      element: <Login/>
    },
    {
      path: "logout",
      element: <Logout/>
    }
  ]);

  export default router;