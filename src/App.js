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
import NIP from "./pages/ReportDashboard/NIP";
import Transfer from "./pages/ReportDashboard/Transfer";
import Withdraw from "./pages/ReportDashboard/Withdraw";
import BillPayment from "./pages/ReportDashboard/BillPayment";
import Referral from "./pages/ReportDashboard/Referral";
import Revenue from "./pages/ReportDashboard/Revenue";
import CommissionPayment from "./pages/ReportDashboard/CommissionPayment";
import AtmCard from "./pages/ReportDashboard/AtmCard";
import PaymentRequest from "./pages/ReportDashboard/PaymentRequest";
import Pos from "./pages/ReportDashboard/Pos";
import Ussd from "./pages/ReportDashboard/Ussd";
import Scan from "./pages/ReportDashboard/Scan";
import CardPayment from "./pages/ReportDashboard/CardPayment";
import Invoicing from "./pages/ReportDashboard/Invoicing";
import GenerateReportForm from "./pages/ReportDashboard/GenerateReportForm";
import GenerateReportTable from "./pages/ReportDashboard/GenerateReportTable";
import GatewayLayout from "./components/GatewayLayout";
import User from "./pages/GatewayDasboard/User";
import MarketplaceLayout from "./components/MarketplaceLayout";
import MarketUser from "./pages/MarketplaceDashboard/MarketUser";
import GroupLayout from "./components/GroupLayout";
import GroupUser from "./pages/GroupDashboard/GroupUser";
import PosTerminal from "./pages/ReportDashboard/PosTerminal";
import Loan from "./pages/ReportDashboard/Loan";
import Sms from "./pages/ReportDashboard/Sms";
import AccountCreation from "./pages/ReportDashboard/AccountCreation";
import GatewayCommission from "./pages/GatewayDasboard/GatewayCommission";
import GatewayRevenue from "./pages/GatewayDasboard/GatewayRevenue";
import GatewayInvoice from "./pages/GatewayDasboard/GatewayInvoice";
import GatewayPaymentTerminal from "./pages/GatewayDasboard/GatewayPaymentTerminal";

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
          <Route path="nip" element={<NIP />} />
          <Route path="transfer" element={<Transfer />} />
          <Route path="withdraw" element={<Withdraw />} />
          <Route path="bill-payment" element={<BillPayment />} />
          <Route path="referral" element={<Referral />} />
          <Route path="revenue" element={<Revenue />} />
          <Route path="commission-payment" element={<CommissionPayment />} />
          <Route path="atm-card" element={<AtmCard />} />
          <Route path="payment-request" element={<PaymentRequest />} />
          <Route path="invoicing" element={<Invoicing />} />
          <Route path="card-payment" element={<CardPayment />} />
          <Route path="scan" element={<Scan />} />
          <Route path="ussd" element={<Ussd />} />
          <Route path="pos-terminal" element={<PosTerminal />} />
          <Route path="pos" element={<Pos />} />
          <Route path="loan" element={<Loan />} />
          <Route path="sms" element={<Sms />} />
          <Route path="account-creation" element={<AccountCreation />} />
          <Route path="generate-report" element={<GenerateReportForm />} />
          <Route
            path="generate-report-table"
            element={<GenerateReportTable />}
          />
        </Route>

        <Route path="/payment-gateway" element={<GatewayLayout />}>
          <Route path="user" index element={<User />} />
          <Route
            path="commission-payment"
            index
            element={<GatewayCommission />}
          />
          <Route path="revenue" index element={<GatewayRevenue />} />
          <Route path="invoicing" index element={<GatewayInvoice />} />
          <Route
            path="payment-terminal"
            index
            element={<GatewayPaymentTerminal />}
          />
        </Route>

        <Route path="/marketplace" element={<MarketplaceLayout />}>
          <Route path="user" index element={<MarketUser />} />
        </Route>

        <Route path="/group" element={<GroupLayout />}>
          <Route path="user" index element={<GroupUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
