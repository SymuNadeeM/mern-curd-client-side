import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import InputForm from "../pages/InputForm";
import MemberList from "../pages/MemberList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout /> ,
    children: [
      {
        index: true,
        element: <MemberList /> ,
      },
      {
        path: "/create-member",
        element: <InputForm />,
      },
    ],
    
  },
]);

export default router;