import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import ScrollTop from "./components/ScrollTop";
import ForgotPaasword from "./pages/ForgotPaasword";
import ResetPassword from "./pages/ResetPassword";
import Register from "./pages/Register";
import VerifyEmail from "./pages/VerifyEmail";
import { Toaster } from "react-hot-toast";
import axios from "axios";
import Dashboard from "./pages/Dashboard";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;
function App() {
  return (
    <BrowserRouter>
      <ScrollTop />
      <Toaster />
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forgot-password" element={<ForgotPaasword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
