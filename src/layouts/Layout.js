
import { Outlet } from "react-router-dom";
// import Footer from "../components/shared/Footer/Footer";


const Layout = () => {
  return (
    <div>
      <header>
        {/* <Navbar /> */}
      </header>

      {/* main */}
      <main>
        <Outlet />
      </main>

      {/* footer */}
      <footer>
        {/* <Footer /> */}
      </footer>
    </div>
  );
};

export default Layout;