import {
    FormContainer,
    FormElements,
    FormH1,
    FormLabel,
    FormInput,
    Text,
    PasswordContainer,
    TogglePassIcon
} from "../Global/form-elements.js";
import {ButtonElements} from "../Global/button-elements.js"
import {MainBackground, BackgroundImg, Logo} from "../Global/background-elements.js"
import usePasswordToggle from "../../Hooks/use-password-toggle";

function Login() {
    const [PasswordInputType, ToggleIcon] = usePasswordToggle();
    return (
        <>
            <MainBackground>
                <BackgroundImg>
                    <Logo to="/dashboard">LOGO</Logo>

                    <FormContainer>
                        <FormElements action="#">
                            <FormH1 to="/">Login</FormH1>
                            <FormLabel htmlFor="for">Email</FormLabel>
                            <FormInput className="login-input-mb" type="email" required/>

                            <FormLabel htmlFor="for">Password</FormLabel>

                            <PasswordContainer>
                                <FormInput type={PasswordInputType} required/>
                                <TogglePassIcon>{ToggleIcon} </TogglePassIcon>
                            </PasswordContainer>

                            <Text className="forgot-pass-link" to="/forgotpass">Forgot Password?</Text>
                            <ButtonElements className="mint-gradient med-btn" type="submit">Sign In</ButtonElements>
                            <Text to="/signup" className='link-prompt'>Don't have an account? <Text to="/signup"
                                                                                                    className='link'>Sign
                                Up</Text></Text>
                        </FormElements>
                    </FormContainer>

                </BackgroundImg>
            </MainBackground>
        </>
    )
}

export default Login