import {
    FormContainer,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    Text,
} from "../Form";
import {Button} from "../Button.js"
import {MainBackground, BackgroundImg, Logo} from "../PageBackground"

function Login() {
    
    return (
        <>
            <MainBackground>
                <BackgroundImg>
                <Logo to="/">LOGO</Logo> 

                    <FormContainer>
                        <Form className="login-page" action="#">
                            <FormH1 className='login-h1' to="/">Login</FormH1>
                            <FormLabel htmlFor="for">Email</FormLabel>
                            <FormInput type="email" required/>
                            <FormLabel htmlFor="for">Password</FormLabel>
                            <FormInput className='pass' type="password" required/>
                            <Text className="forgot-pass" to="/forgotpass">Forgot Password?</Text>

                            <Button className="mint-gradient med-btn" type="submit">Sign In</Button>

                            <Text to="/signup" className='signup-prompt'>Don't have an account? <Text to="/signup" className='signup-link'>Sign Up</Text></Text>
                        </Form>
                    </FormContainer>

                </BackgroundImg>
            </MainBackground>
        </>
  )
}

export default Login