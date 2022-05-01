import './Styles/App.css';
import {LoginPage, RegistrationPage, LandingPage, ForgotPassPage} from "./Pages"
import {BrowserRouter as Router, Switch, Route, Routes} from "react-router-dom"

function App() {

  return (
    <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>} exact/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/signup" element={<RegistrationPage/>}/>
          <Route path="/forgotpass" element={<ForgotPassPage/>}/>

        </Routes>
    </Router>

  )
}

export default App;
