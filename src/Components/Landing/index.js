
import {SignUpBtn, Chicken} from "../Chicken"

function Landing() {
    
    return (
        <>
            <Chicken> 
                <SignUpBtn className="login" to="/login">Login</SignUpBtn>
                <SignUpBtn className="signup" to="/signup">Sign Up</SignUpBtn>
            </Chicken>
        </>
  )
}

export default Landing