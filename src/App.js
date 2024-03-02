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
import PaymentGatewayLogin from "./pages/PaymentGatewayLogin";
import SocialMarketLogin from "./pages/SocialMarketLogin";
import BankLogin from "./pages/BankLogin";
import AddUserOption from "./pages/AddUserOption";
import AddUserSuccess from "./pages/AddUserSuccess";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthOptions />} />
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
