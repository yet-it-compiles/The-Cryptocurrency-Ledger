/* Simple module which allows the transition to different pages from the dashboard */
import "./Styles/global-styles.css";
import { LoginPage, RegistrationPage, LandingPage, ForgotPassPage, DashboardPage } from "./Pages/pages.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  return (
      <Router>
          <Routes>
            {/* Login and Signup Pages */}
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/signup" element={<RegistrationPage/>}/>
            <Route path="/forgotpass" element={<ForgotPassPage/>}/>

            {/* Dashboard */}
            <Route path="/dashboard" element={<DashboardPage/>}/>
          </Routes>
      </Router>
  )
}

export default App;