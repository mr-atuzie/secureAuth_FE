import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import ScrollTop from "./components/ScrollTop";
import ForgotPaasword from "./pages/ForgotPaasword";
import ResetPassword from "./pages/ResetPassword";

function App() {
  return (
    <BrowserRouter>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPaasword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
