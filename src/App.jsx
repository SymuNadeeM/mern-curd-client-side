import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import router from "./routes";
import AddDetails from "./pages/AddDetails";
import InputForm from "./pages/InputForm";
import MemberList from "./pages/MemberList";
import "./style/index.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MemberList />,
    },
    {
      path: "/create-member",
      element: <InputForm />,
    },
    {
      path: "/add-details",
      element: <AddDetails />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
