import {
    FormContainer,
    FormElements,
    FormH1,
    FormH2,
    FormLabel,
    FormInput,
    Text,
} from "../Global/form-elements.js";
import {ButtonElements} from "../Global/button-elements.js"
import {MainBackground, BackgroundImg, Logo} from "../Global/background-elements.js"

function ForgotPassword() {

    return (
        <>
            <MainBackground>
                <BackgroundImg>
                    <Logo to="/">LOGO</Logo>

                    <FormContainer>
                        <FormElements action="#">
                            <FormH1 className="forgot-pass-h1" to="/">Forgot your password?</FormH1>
                            <FormH2> Please enter the email address that you used to sign up, and a reset link will be
                                sent to you.</FormH2>

                            <FormLabel htmlFor="for">Email</FormLabel>
                            <FormInput className="forgot-pass-input-mb" type="email" required/>


                            <ButtonElements className="mint-gradient lrg-btn" type="submit">send link</ButtonElements>

                            <Text to="/login" className='link-prompt'>Remembered your password? <Text to="/login"
                                                                                                      className='link'>Sign
                                In</Text></Text>
                        </FormElements>
                    </FormContainer>

                </BackgroundImg>
            </MainBackground>
        </>
    )
}

export default ForgotPassword