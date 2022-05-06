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
import {Component} from "react";
import axios from 'axios';

class Register extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangePasswordConfirm = this.onChangePasswordConfirm.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            email: '',
            phone: '',
            password: '',
            passwordConfirm: '',

        }
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangePhone(e) {
        this.setState({
            phone: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onChangePasswordConfirm(e) {
        this.setState({
            passwordConfirm: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        if(this.state.password===this.state.passwordConfirm){
            const obj ={
                name:this.state.name,
                email:this.state.email,
                phone:this.state.phone,
                password:this.state.password,
                passwordConfirm:this.state.passwordConfirm,
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

    render() {

        return (
            <>
                <MainBackground>
                    <BackgroundImg>
                        <Logo to="/">LOGO</Logo>

                        <FormContainer>
                            <Form className="signup-page" action="#">
                                <FormH1 className="signup-h1" to="/">Create your ledger account</FormH1>

                                <FormLabel htmlFor="for">Username</FormLabel>
                                <FormInput className="input-mb" type="username" value={this.state.name} onChange={this.onChangeName} required/>

                                <FormLabel htmlFor="for">Email</FormLabel>
                                <FormInput className="input-mb" type="email" value={this.state.email} onChange={this.onChangeEmail} required/>

                                <FormLabel htmlFor="for">Password</FormLabel>
                                <FormInput className="input-mb" type="password" value={this.state.password} onChange={this.onChangePassword}  required/>

                                <FormLabel htmlFor="for">Confirm Password</FormLabel>
                                <FormInput className="input-mb" type="password" value={this.state.passwordConfirm} onChange={this.onChangePasswordConfirm} required/>

                                <Button className="mint-gradient lrg-btn" type="submit" onClick={this.onSubmit}>Sign up</Button>

                                <Text to="/login" className='signup-prompt'>Already have an account? <Text to="/login" className='link'>Sign In</Text></Text>
                            </Form>
                        </FormContainer>

                    </BackgroundImg>
                </MainBackground>
            </>
        )
    }
}


export default Register