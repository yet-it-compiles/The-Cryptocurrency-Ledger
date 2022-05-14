import {
    FormContainer,
    Form,
    FormH1,
    FormH2,
    FormLabel,
    FormInput,
    Text,
} from "../Global/Form";
import {Button} from "../Global/Button.js"
import {MainBackground, BackgroundImg, Logo} from "../Global/PageBackground"

function ForgotPassword() {
    
    return (
        <>
            <MainBackground>
                <BackgroundImg>
                <Logo to="/">LOGO</Logo> 

                    <FormContainer>
                        <Form action="#">
                            <FormH1 className="forgot-pass-h1" to="/">Forgot your password?</FormH1>
                            <FormH2> Please enter the email address that you used to sign up, and a reset link will be sent to you.</FormH2>

                            <FormLabel htmlFor="for">Email</FormLabel>
                            <FormInput className="forgot-pass-input-mb" type="email" required/>


                            <Button className="mint-gradient lrg-btn" type="submit">send link</Button>

                            <Text to="/login" className='link-prompt'>Remembered your password? <Text to="/login" className='link'>Sign In</Text></Text>
                        </Form>
                    </FormContainer>

                </BackgroundImg>
            </MainBackground>
        </>
  )
}

export default ForgotPassword