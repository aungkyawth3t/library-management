import { createBrowserRouter } from "react-router";
import Home from '../pages/Home.jsx'
import Layout from "../pages/layouts/Layout.jsx";
import Create from "../pages/Create.jsx";
import Search from "../pages/Search.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "/create",
        element: <Create/>
      },
      {
        path: "/search",
        element: <Search/>
      }
    ]
  },
]);

export default router;