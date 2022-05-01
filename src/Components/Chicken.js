import styled from "styled-components"
import { Link } from "react-router-dom";
import finn from "../Assets/Images/FinnNFriend.png";

export const Chicken = styled.div`
    height: 100vh;
    background-image: url(${finn});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 1200px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SignUpBtn = styled(Link) `
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-weight: 700;
    border-radius: 5px;
    outline: none;
    border: none;
    cursor: pointer;
    white-space: nowrap;
    letter-spacing: 1px;
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, .5);

    width: 20rem; 
    height: 7rem; 
    font-size: 2.8rem;
    text-decoration: none;
    color: white;
    background-color: #FF4444;

    &.login {
        margin-right: 300px;
        margin-top: 300px;
    }
    &.signup {
        margin-right: 100px;
        margin-top: 300px;
    }
`
