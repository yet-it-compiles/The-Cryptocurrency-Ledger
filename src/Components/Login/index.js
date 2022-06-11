import {
    FormContainer,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    Text,
    PasswordContainer,
    TogglePassIcon
} from "../Global/form";
import {Button} from "../Global/button.js"
import {MainBackground, BackgroundImg, Logo} from "../Global/page-background"
import usePasswordToggle from "../../Hooks/usePasswordToggle";

function Login() {
    const [PasswordInputType, ToggleIcon] = usePasswordToggle();
    return (
        <>
            <MainBackground>
                <BackgroundImg>
                <Logo to="/dashboard">LOGO</Logo> 

                    <FormContainer>
                        <Form action="#">
                            <FormH1 to="/">Login</FormH1>
                            <FormLabel htmlFor="for">Email</FormLabel>
                            <FormInput className="login-input-mb" type="email" required/>
                            
                            <FormLabel htmlFor="for">Password</FormLabel>

                            <PasswordContainer>
                            <FormInput type={PasswordInputType} required />
                            <TogglePassIcon>{ToggleIcon} </TogglePassIcon>
                            </PasswordContainer>

                            <Text className="forgot-pass-link" to="/forgotpass">Forgot Password?</Text>
                            <Button className="mint-gradient med-btn" type="submit">Sign In</Button>
                            <Text to="/signup" className='link-prompt'>Don't have an account? <Text to="/signup" className='link'>Sign Up</Text></Text>
                        </Form>
                    </FormContainer>

                </BackgroundImg>
            </MainBackground>
        </>
  )
}

export default Login