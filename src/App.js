import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthOptions from "./pages/AuthOptions";
import AdminLogin from "./pages/AdminLogin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthOptions />}></Route>
        <Route path="/admin-login" element={<AdminLogin />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
