import logo from "./logo.svg";
import "../src/_metronic/assets/sass/style.react.scss";
import "../src/_metronic/assets/fonticon/fonticon.css";
import "../src/_metronic/assets/keenicons/duotone/style.css";
import "../src/_metronic/assets/keenicons/outline/style.css";
import "../src/_metronic/assets/keenicons/solid/style.css";
import "../src/_metronic/assets/sass/style.scss";

/**
 * TIP: Replace this style import with rtl styles to enable rtl mode
 *
 * import './_metronic/assets/css/style.rtl.css'
 **/
import { Login } from "./pages/Login";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import { AppProvider } from "./context/userContext";

document.documentElement.setAttribute("data-bs-theme", "light");

function App() {
  return (
    <div>
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to={"/"} />} />
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </div>
  );
}

export default App;
