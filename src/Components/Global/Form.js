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
  border-radius: 1rem;
  box-shadow: 0 .7rem .3rem rgba(0, 0, 0, 0.5);
  opacity: .95;
  transition: 500ms ease;

  // Laptop Screen
  min-width: 65rem;
  height: 60rem;
  padding: 0 11rem;

  //Desktop Screen
  @media screen and (min-width: 1920px) {
    min-width: 90rem;
    height: 80rem;
    padding: 0 15rem;
  }
  
`;

export const FormH1 = styled.h1`
  color: #fff;
  font-weight: 300;
  text-align: center;
  letter-spacing: .1rem;
  
  //Laptop Screen
  font-size: 3.2rem;
  margin-bottom: 3rem;

  &.forgot-pass-h1{
    margin-bottom: 1.5rem;
  }
  
  //Desktop Screen
  @media screen and (min-width: 1920px) {
    font-size: 4.8rem;
    margin-bottom: 4.6rem;

    &.forgot-pass-h1{
      margin-bottom: 2rem;
    }
  }
`;
export const FormH2 = styled.h2`
    height: max-content;
    color: #fff;
    font-weight: 300;
    text-align: center;
    margin-bottom: 7rem;
  
    //Laptop Screen
    font-size: 1.2rem;
  
    //Desktop Screen
    @media screen and (min-width: 1920px) {
        font-size: 1.6rem;
    }
`;

export const FormLabel = styled.label`
  margin-bottom: 1rem;
  color: #fff;
  
  //Laptop Screen
  font-size: 1.4rem;
  
  //Desktop Screen
  @media screen and (min-width: 1920px) {
    font-size: 1.6rem;
  }
`;

export const FormInput = styled.input`
  display: flex;
  border: none;
  outline: none;
  font-weight: 300;
  background-color: transparent;
  color: #fff;
  box-shadow: 0 .4rem 0 rgba(0, 0, 0, 0.25);
  width: 100%; 
  
  //Laptop Screen
  font-size: 1.4rem;
  border-bottom: .1rem solid #ABB2CD;
    
    &.login-input-mb{
        margin-bottom: 5rem;
    }
    &.signup-input-mb{
        margin-bottom: 3rem;
    }
    &.forgot-pass-input-mb {
        margin-bottom: 6rem;
    }
  
  //Desktop Screen
  @media screen and (min-width: 1920px) {  
    border-bottom: .2rem solid #ABB2CD;
    font-size: 1.6rem;
      
    &.signup-input-mb{
      margin-bottom: 6rem;
    }
  }
`;
export const PasswordContainer = styled.div`
  display: block ruby;
`;

export const TogglePassIcon = styled.button `
  background-color: transparent;
  color: #fff;
  border: none;
  cursor: pointer;
  
  &:hover {
    color: #47DBB8;
  }
  
  //Laptop Screen
  font-size: 1.4rem;
  margin-left: -1.8rem;

  //Desktop Screen
  @media screen and (min-width: 1920px) {
    font-size: 1.6rem;
    margin-left: -2rem;
  }
`;

export const Text = styled(Link)`
    position: relative;
    text-decoration: none;
    color: #47DBB8;
    font-weight: 600;
    cursor: pointer;
  
  //Laptop Screen
  font-size: 1.1rem;
  
  &.forgot-pass-link{
    align-self: self-end;
    margin: 1.5rem 0 5rem 0;
  }
  &.link-prompt{
    margin: 2rem auto;
    color: #fff;
  }
  &.link{
    color: #47DBB8;
  }
  
  &:hover:not(.link-prompt){
    transition: 0.3s ease;
    color: #fff;
  }

  //Desktop Screen
  @media screen and (min-width: 1920px) {
    font-size: 1.3rem;

    &.forgot-pass-link{
      margin: 2rem 0 9rem 0;
    }
  }
 
`;