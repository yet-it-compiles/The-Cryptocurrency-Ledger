import styled from 'styled-components'
import ethImg from "../Assets/Images/Vector.png";
import { Link } from "react-router-dom";

export const MainBackground = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 0;
    overflow: hidden;
    background: linear-gradient(180.02deg, #2E3047 25.58%, #707793 99.98%) no-repeat center center fixed;
`;
export const BackgroundImg = styled.div`
    display: flex;
    justify-content: center;
    align-self: center;
    height: 100%;
    background-image: url(${ethImg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 110vh;
    transition: 500ms ease;
`;

export const Logo = styled(Link)`
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 32px;
    margin-left: 50px;
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    font-size: 2rem;
    cursor: pointer;
    transition: 500ms ease;
    
    @media screen and (max-width: 980px) {
        margin-top: 10px;
    }
`;


