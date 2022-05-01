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

function Registration() {
    
    return (
        <>
            <MainBackground>
                <BackgroundImg>
                <Logo to="/">LOGO</Logo> 

                    <FormContainer>
                        <Form className="signup-page" action="#">
                            <FormH1 className="signup-h1" to="/">Create your ledger account</FormH1>

                            <FormLabel htmlFor="for">Username</FormLabel>
                            <FormInput className="input-mb" type="username" required/>

                            <FormLabel htmlFor="for">Email</FormLabel>
                            <FormInput className="input-mb" type="email" required/>

                            <FormLabel htmlFor="for">Password</FormLabel>
                            <FormInput className="input-mb" type="password" required/>

                            <FormLabel htmlFor="for">Confirm Password</FormLabel>
                            <FormInput className="input-mb" type="password" required/>

                            <Button className="mint-gradient lrg-btn" type="submit">Sign up</Button>

                            <Text to="/login" className='signup-prompt'>Already have an account? <Text to="/login" className='link'>Sign In</Text></Text>
                        </Form>
                    </FormContainer>

                </BackgroundImg>
            </MainBackground>
        </>
  )
}

export default Registration