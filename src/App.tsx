import { Route, Routes } from "react-router-dom";

import DashboardPage from "@/pages/dashboard/index";
import EmployeesPage from "@/pages/employees/index";
import SettingsPage from "./pages/settings";
import HelpPage from "@/pages/help/index";

function App() {
  return (
    <Routes>
      <Route element={<DashboardPage />} path="/" />
      <Route element={<EmployeesPage />} path="/employees" />
      <Route element={<SettingsPage />} path="/settings" />
      <Route element={<HelpPage />} path="/help" />
    </Routes>
  );
}

export default App;
