import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import ScrollTop from "./components/ScrollTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
