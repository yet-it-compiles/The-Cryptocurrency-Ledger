import {
    FormContainer,
    Form,
    FormH1,
    FormH2,
    FormLabel,
    FormInput,
    Text,
} from "../Form";
import {Button} from "../Button.js"
import {MainBackground, BackgroundImg, Logo} from "../PageBackground"

function ForgotPassword() {
    
    return (
        <>
            <MainBackground>
                <BackgroundImg>
                <Logo to="/">LOGO</Logo> 

                    <FormContainer>
                        <Form className="forgotpass-page" action="#">
                            <FormH1 className="forgotpass-h1" to="/">Forgot your password?</FormH1>
                            <FormH2> Please enter the email address that you used to sign up, and a reset link will be sent to you.</FormH2>

                            <FormLabel htmlFor="for">Email</FormLabel>
                            <FormInput type="email" required/>


                            <Button className="mint-gradient lrg-btn" type="submit">send link</Button>

                            <Text to="/login" className='signup-prompt'>Remembered your password? <Text to="/login" className='link'>Sign In</Text></Text>
                        </Form>
                    </FormContainer>

                </BackgroundImg>
            </MainBackground>
        </>
  )
}

export default ForgotPassword