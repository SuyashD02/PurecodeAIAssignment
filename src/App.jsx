import { Toaster } from "sonner";
import AppProvidersWrapper from "./Components/AppProvidersWrapper";
import BackToTop from "./pages/BackToTop";
import AdminLayout from "./Components/AdminLayout";
import { configureFakeBackend } from "@/common";
import Dashboard from "./pages/dashboard/dashboard";
// styles
import "@/assets/css/style.css";

configureFakeBackend();

const App = () => {
  return (
    <AppProvidersWrapper>
      <AdminLayout>
      <Dashboard />
      </AdminLayout>
      <BackToTop />
    </AppProvidersWrapper>
  );
};

export default App;
