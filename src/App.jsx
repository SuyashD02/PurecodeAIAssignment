import { Toaster } from "sonner";
import { AppProvidersWrapper, BackToTop } from "./components";
import {AdminLayout} from "./layouts";
import { configureFakeBackend } from "@/common";
import Dashboard from "./app/admin/dashboard/page";
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
