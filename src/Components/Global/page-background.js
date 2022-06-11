import styled from 'styled-components'
import ethImg from "../../Assets/Images/Vector.png";
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
    background: url(${ethImg}) center center no-repeat;
    transition: 500ms ease;
  //Laptop Screen
    background-size: 90rem;

  //Desktop Screen
  @media screen and (min-width: 1920px){
    transition: 500ms ease;
    background-size: 110rem;
  }
`;

export const Logo = styled(Link)`

  position: absolute;
  top: 0;
  left: 0;
  margin-top: 2rem;
  margin-left: 5rem;
  color: #fff;
  text-decoration: none;
  font-weight: 700;
  cursor: pointer;
  transition: 500ms ease;

  //Laptop Screen
  font-size: 3.2rem;
  
  //Desktop Screen
  @media screen and (min-width: 1920px){
    font-size: 4rem;
  }
`;


