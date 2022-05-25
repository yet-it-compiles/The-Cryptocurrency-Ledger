import styled from "styled-components";
import {Link} from "react-router-dom";

export const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

`;

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #2E3047;
    mix-blend-mode: normal;
    padding: 70px 120px;
    border-radius: 10px;
    box-shadow: 0px 7px 3px rgba(0, 0, 0, 0.5);
    opacity: .95;
    transition: 500ms ease;
    
    &.login-page{
        min-width: 700px;
        min-height: 650px;
    }
    &.signup-page{
        width: 700px;
        height: 650px;
    }
    &.forgotpass-page{
        width: 700px;
        height: 650px;
    }
    @media screen and (min-width: 2500px) {

        &.login-page{
            min-width: 1000px;
            min-height: 900px;
            padding: 70px 150px;
        }
        &.signup-page{
            width: 1000px;
            height: 900px;
            padding: 70px 150px;
        }
        &.forgotpass-page{
            width: 1000px;
            height: 900px;
            padding: 70px 150px;
        }
    }
`;

export const FormH1 = styled.h1`
    height: max-content;
    color: #fff;
    font-size: 2.5rem;
    font-weight: 300;
    text-align: center;
    letter-spacing: 0.05em;
    margin-bottom: 50px;

    &.forgotpass-h1{
        font-size: 2.3rem;
        margin-bottom: 20px;
    }
    &.signup-h1{
        font-size: 2rem;
    }
    @media screen and (min-width: 2500px) {
        &.login-h1{
            font-size: 3.5rem;
        }
        &.forgotpass-h1{
            font-size: 3.5rem;
            margin-bottom: 30px;
        }
        &.signup-h1{
            margin-bottom: 60px;
            font-size: 3rem;
        }
    }
`;
export const FormH2 = styled.h2`
    height: max-content;
    color: #fff;
    font-size: 1rem;
    font-weight: 300;
    text-align: center;
    margin-bottom: 60px;
    @media screen and (min-width: 2500px) {
        font-size: 1.4rem;
    }
`;

export const FormLabel = styled.label`
    margin-bottom: 10px;
    font-size: 1rem;
    color: #fff;
    height: max-content;
    @media screen and (min-width: 2500px) {
        font-size: 1.4rem;
    }
`;

export const FormInput = styled.input`
    display: flex;
    border: none;
    outline: none;
    font-weight: 300;
    font-size: 1rem;
    height: max-content;
    margin-bottom: 60px;
    border-bottom: 1px solid #ABB2CD;
    background-color: transparent;
    color: #fff;
    box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
    transform: matrix(1, 0, 0, 1, 0, 0);

    &.pass{
        margin-bottom: 20px;
    }
    &.input-mb{
        margin-bottom: 25px;
    }
    @media screen and (min-width: 2500px) {
        font-size: 1.4rem;
        &.input-mb{
            margin-bottom: 60px;
        }
    }
`;

export const Text = styled(Link)`  
    height: max-content;
    position: relative;
    text-decoration: none;
    font-size: .75rem;
    color: #47DBB8;
    font-weight: 600;
    cursor: pointer;
    
    &.forgot-pass{
        align-self: self-end;
        margin-bottom: 60px;
        
    }
    &.signup-prompt{
        margin: 20px auto;
        color: #fff;
    }
    &.link{
        color: #47DBB8;
    }
    
    &.signup-prompt::before {
        content: "";
        position: absolute;
        display: block;
        width: 100%;
        height: .5px;
        bottom: 0;
        left: 0;
        background-color: #fff;
        transform: scaleX(0);
        transition: transform 500ms ease;
    }
    
    &:hover::before {
        transform: scaleX(1);
    }
    &:hover:not(.signup-prompt){
        transition: 0.3s ease;
        color: #fff;
    }
    @media screen and (max-width: 500px) {
        &.forgot-pass{
            margin-bottom: 50px;
            top: 0;
        }
    }
    @media screen and (min-width: 2500px) {
        font-size: 1rem;
    }
`;