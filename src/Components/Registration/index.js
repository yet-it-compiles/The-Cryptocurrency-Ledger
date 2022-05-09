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
import axios from 'axios';

let ENROLL = {
    state: {
        name: '',
        email: '',
        password: '',
        passwordConfirm: ''
    },
    onChangeName: function (e) {
        this.state.name = e.target.value;
    },
    onChangeEmail: function (e) {
        this.state.email = e.target.value;
    },
    onChangePassword: function (e) {
        this.state.password = e.target.value;
    },
    onChangePasswordConfirm: function (e) {
        this.state.passwordConfirm = e.target.value;
    },
    onSubmit(e) {
        e.preventDefault();

        if(this.state.password===this.state.passwordConfirm){
            const obj ={
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                passwordConfirm: this.state.passwordConfirm,
            };

            axios.post('http://localhost/reactProject/insert.php',obj)
                .then(res=> console.log(res.data))
                .catch(error => {
                    console.log(error.response)
                });

            //To clear text box values
            this.setState({
                name: '',
                email:'',
                phone:'',
                password:'',
                passwordConfirm:'',

            })
        }

        else{
            alert("Password mismatch")
        }
    }
}

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
                             <FormInput className="input-mb" type="username" value={ENROLL.state.name} onChange={ENROLL.onChangeName} required/>

                             <FormLabel htmlFor="for">Email</FormLabel>
                             <FormInput className="input-mb" type="email" value={ENROLL.state.email} onChange={ENROLL.onChangeEmail} required/>

                             <FormLabel htmlFor="for">Password</FormLabel>
                             <FormInput className="input-mb" type="password" value={ENROLL.state.password} onChange={ENROLL.onChangePassword}  required/>

                             <FormLabel htmlFor="for">Confirm Password</FormLabel>
                             <FormInput className="input-mb" type="password" value={ENROLL.state.passwordConfirm} onChange={ENROLL.onChangePasswordConfirm} required/>

                             <Button className="mint-gradient lrg-btn" type="submit" onClick={ENROLL.onSubmit}>Sign up</Button>

                             <Text to="/login" className='signup-prompt'>Already have an account? <Text to="/login" className='link'>Sign In</Text></Text>
                         </Form>
                     </FormContainer>

                </BackgroundImg>
            </MainBackground>
        </>
    )
}

export default Registration