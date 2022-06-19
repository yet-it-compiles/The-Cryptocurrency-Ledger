import {SignUpBtn, Chicken} from "../chicken"

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