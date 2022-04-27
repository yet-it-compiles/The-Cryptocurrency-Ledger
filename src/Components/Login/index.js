import React from 'react';
import {
    Container,
    BackgroundImg,
    FormWrap,
    Logo,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    Text,
    FormButton,
} from "./LoginElements";


function Login() {
    
    return (
        <>
            <Container>
                <BackgroundImg>
                <FormWrap>
                    <Logo to="/">LOGO</Logo> 
                    <FormContent>
                        <Form action="#">
                            <FormH1 to="/">Login</FormH1>
                            <FormLabel htmlFor="for">Email</FormLabel>
                            <FormInput type="email" required></FormInput>
                            <FormLabel htmlFor="for">Password</FormLabel>
                            <FormInput className='pass' type="password" required></FormInput>
                            <Text className="forgot-pass" to="/">Forgot Password?</Text>
                            <FormButton className='mint-gradient' type="submit">Sign In</FormButton>
                            <Text className='signup-prompt'>Don't have an account? <Text className='signup-link'>Sign Up</Text></Text>
                        </Form>
                    </FormContent>
                </FormWrap>
                </BackgroundImg>
            </Container>
        </>
  )
}

export default Login