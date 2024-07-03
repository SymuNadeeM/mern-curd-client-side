import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import router from "./routes";
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
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
