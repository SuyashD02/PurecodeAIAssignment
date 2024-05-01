import { Suspense } from "react";
import  Footer from "../pages/Footer";
import Preloader from "./Preloader";
import Topbar from "./TopbarAdmin";
import Navbar from "./Navbar";

const AdminLayout = ({ children }) => {
  return (
    <Suspense>
      <Suspense>
        <Topbar />
      </Suspense>

      <Suspense>
        <Navbar />
      </Suspense>

      <Suspense fallback={<Preloader />}>{children}</Suspense>

      <Suspense>
        <Footer hideLinks />
      </Suspense>
    </Suspense>
  );
};

export default AdminLayout;
