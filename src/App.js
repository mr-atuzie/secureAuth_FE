import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import ScrollTop from "./components/ScrollTop";
import ForgotPaasword from "./pages/ForgotPaasword";
import ResetPassword from "./pages/ResetPassword";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPaasword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
