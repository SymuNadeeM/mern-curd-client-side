import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import InputForm from "../pages/InputForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <InputForm /> ,
      },
      
    ],
  },
]);

export default router;