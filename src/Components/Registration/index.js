import {
    FormContainer,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    Text,
    PasswordContainer,
    TogglePassIcon
} from "../Global/Form";
import {Button} from "../Global/Button.js"
import {MainBackground, BackgroundImg, Logo} from "../Global/PageBackground"
import axios from 'axios';
import usePasswordToggle from "../../Hooks/usePasswordToggle";
import emailUser from './email'

let ENROLL = {
    state: {
        name: '',
        email: '',
        password: '',
        passwordConfirm: ''
    },
    onChangeName: function (e) {
        ENROLL.state.name = e.target.value;
        console.log(ENROLL.state.name);
    },
    onChangeEmail: function (e) {
        ENROLL.state.email = e.target.value;

    },
    onChangePassword: function (e) {
        ENROLL.state.password = e.target.value;
    },
    onChangePasswordConfirm: function (e) {
        ENROLL.state.passwordConfirm = e.target.value;
    },
    onSubmit(e) {
        e.preventDefault();

        if(ENROLL.state.password===ENROLL.state.passwordConfirm){
            const obj ={
                name: ENROLL.state.name,
                email: ENROLL.state.email,
                password: ENROLL.state.password,
                passwordConfirm: ENROLL.state.passwordConfirm,
            };

            // put data into php file
            axios.post('http://localhost/reactProject/insert.php',obj)
                .then(res=> console.log(res.data))
                .catch(error => {
                    console.log(error.response)
                });

            // clear variables
            ENROLL.state.name = '';
            ENROLL.state.email = '';
            ENROLL.state.password = '';
            ENROLL.state.passwordConfirm = '';

            // clear document form
            document.getElementById('username').value = '';
            document.getElementById('email').value = '';
            document.getElementById('password').value = '';
            document.getElementById('password_confirm').value = '';
            emailUser(obj.email);
            console.log(obj.email);
        }
        else{
            alert("Password mismatch")
        }
    }
}

function Registration() {
    const [PasswordInputType, ToggleIcon] = usePasswordToggle();

    return (
        <>
            <MainBackground>
                <BackgroundImg>
                    <Logo to="/">LOGO</Logo>

                     <FormContainer>
                         <Form action="#">
                             <FormH1 to="/">Create your ledger account</FormH1>

                             <FormLabel htmlFor="for">Username</FormLabel>
                             <FormInput className="signup-input-mb" id="username" type="text" onChange={ENROLL.onChangeName} required/>

                             <FormLabel htmlFor="for">Email</FormLabel>
                             <FormInput className="signup-input-mb" id="email" type="text" onChange={ENROLL.onChangeEmail} required/>

                             <FormLabel htmlFor="for">Password</FormLabel>

                             <PasswordContainer>
                             <FormInput className="signup-input-mb" id="password" type={PasswordInputType} onChange={ENROLL.onChangePassword}  required/>
                                 <TogglePassIcon>{ToggleIcon} </TogglePassIcon>
                             </PasswordContainer>

                             <FormLabel htmlFor="for">Confirm Password</FormLabel>


                             <FormInput className="signup-input-mb" id="password_confirm" type={PasswordInputType} onChange={ENROLL.onChangePasswordConfirm} required/>


                             <Button className="mint-gradient lrg-btn" type="submit" onClick={ENROLL.onSubmit}>Sign up</Button>

                             <Text to="/login" className='link-prompt'>Already have an account? <Text to="/login" className='link'>Sign In</Text></Text>
                         </Form>
                     </FormContainer>

                </BackgroundImg>
            </MainBackground>
        </>
    )
}

export default Registration