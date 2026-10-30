import { Route, Routes } from "react-router-dom";
import DashboardLayout from "./components/layout/DashboardLayout";

import HomePage from "./Pages/HomePage";
import OverviewPage from "./Pages/OverviewPage";
import DashboardPage from "./Pages/DashboardPage";
import EmployeesPage from "./Pages/EmployeesPage";
import AttendancePage from "./Pages/AttendancePage";
import LeavesPage from "./Pages/LeavesPage";
import PerformancePage from "./Pages/PerformancePage";
import PayrollPage from "./Pages/PayrollPage";
import RecruitmentPage from "./Pages/RecruitmentPage";
import AIAssistantPage from "./Pages/AIAssistantPage";
import SettingsPage from "./Pages/SettingsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route
        path="/overview"
        element={
          <DashboardLayout>
            <OverviewPage />
          </DashboardLayout>
        }
      />

      <Route
        path="/dashboard"
        element={
          <DashboardLayout>
            <DashboardPage />
          </DashboardLayout>
        }
      />

      <Route
        path="/employees"
        element={
          <DashboardLayout>
            <EmployeesPage />
          </DashboardLayout>
        }
      />

      <Route
        path="/attendance"
        element={
          <DashboardLayout>
            <AttendancePage />
          </DashboardLayout>
        }
      />

      <Route
        path="/leaves"
        element={
          <DashboardLayout>
            <LeavesPage />
          </DashboardLayout>
        }
      />

      <Route
        path="/performance"
        element={
          <DashboardLayout>
            <PerformancePage />
          </DashboardLayout>
        }
      />

      <Route
        path="/payroll"
        element={
          <DashboardLayout>
            <PayrollPage />
          </DashboardLayout>
        }
      />

      <Route
        path="/recruitment"
        element={
          <DashboardLayout>
            <RecruitmentPage />
          </DashboardLayout>
        }
      />

      <Route
        path="/ai-assistant"
        element={
          <DashboardLayout>
            <AIAssistantPage />
          </DashboardLayout>
        }
      />

      <Route
        path="/settings"
        element={
          <DashboardLayout>
            <SettingsPage />
          </DashboardLayout>
        }
      />
    </Routes>
  );
}

export default App;