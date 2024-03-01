import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthOptions from "./pages/AuthOptions";
import AdminLogin from "./pages/AdminLogin";
import ForgotPaasword from "./pages/ForgotPaasword";
import ResetEmail from "./pages/ResetEmail";
import ResetPassword from "./pages/ResetPassword";
import PasswordChange from "./pages/PasswordChange";
import GroupLogin from "./pages/GroupLogin";
import DashboardLayout from "./components/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import AddUser from "./pages/AddUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthOptions />}></Route>
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/group-login" element={<GroupLogin />} />
        <Route path="/forget-password" element={<ForgotPaasword />} />
        <Route path="/reset-email" element={<ResetEmail />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/password-changed" element={<PasswordChange />} />

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="main" index element={<Dashboard />} />
          <Route path="add-user" element={<AddUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
