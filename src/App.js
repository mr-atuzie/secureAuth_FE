import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthOptions from "./pages/auth/AuthOptions";
import AdminLogin from "./pages/auth/AdminLogin";
import ForgotPaasword from "./pages/auth/ForgotPaasword";
import ResetEmail from "./pages/auth/ResetEmail";
import ResetPassword from "./pages/auth/ResetPassword";
import PasswordChange from "./pages/auth/PasswordChange";
import GroupLogin from "./pages/auth/GroupLogin";
import DashboardLayout from "./components/DashboardLayout";
import Dashboard from "./pages/ReportDashboard/Dashboard";
import AddUser from "./pages/ReportDashboard/AddUser";
import PaymentGatewayLogin from "./pages/auth/PaymentGatewayLogin";
import SocialMarketLogin from "./pages/auth/SocialMarketLogin";
import BankLogin from "./pages/auth/BankLogin";
import AddUserOption from "./pages/ReportDashboard/AddUserOption";
import AddUserSuccess from "./pages/ReportDashboard/AddUserSuccess";
import DashboardUser from "./pages/ReportDashboard/DashboardUser";
import ScrollTop from "./components/ScrollTop";
import DashboardOptions from "./pages/DashboardOptions";
import Deposit from "./pages/ReportDashboard/Deposit";

function App() {
  return (
    <BrowserRouter>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<DashboardOptions />} />
        <Route path="/auth-options" element={<AuthOptions />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/bank-login" element={<BankLogin />} />
        <Route path="/group-login" element={<GroupLogin />} />
        <Route
          path="/payment-gateway-login"
          element={<PaymentGatewayLogin />}
        />
        <Route
          path="/social-marketplace-login"
          element={<SocialMarketLogin />}
        />
        <Route path="/forget-password" element={<ForgotPaasword />} />
        <Route path="/reset-email" element={<ResetEmail />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/password-changed" element={<PasswordChange />} />

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="main" index element={<Dashboard />} />
          <Route path="add-user/option" element={<AddUserOption />} />
          <Route path="add-user" element={<AddUser />} />
          <Route path="add-user/successfull" element={<AddUserSuccess />} />
          <Route path="user" element={<DashboardUser />} />
          <Route path="deposit" element={<Deposit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
