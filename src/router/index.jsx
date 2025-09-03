import { createBrowserRouter } from "react-router";
import App from '../pages/Home.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

export default router;