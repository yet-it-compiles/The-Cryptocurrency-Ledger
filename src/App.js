import "./Styles/globalStyles.css";
import { LoginPage, RegistrationPage, LandingPage, ForgotPassPage, DashboardPage } from "./Pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  return (
      <Router>
          <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/dashboard" element={<DashboardPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/signup" element={<RegistrationPage/>}/>
            <Route path="/forgotpass" element={<ForgotPassPage/>}/>
          </Routes>
      </Router>
  )
}

export default App;
