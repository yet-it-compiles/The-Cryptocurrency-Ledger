import { Link } from "react-router-dom";
import styled from "styled-components";
import { btnReset, v } from "../Global/variables";

export const Bar = styled.div`
    width: ${({ isOpen }) => !isOpen ? `auto` : v.sidebarWidth};
    background: ${({ theme }) => theme.sidebarColor};
    min-height: 100vh;
    padding: ${v.lgSpacing};
    
    //Desktop Screen
    @media screen and (min-width: 1920px) {
        padding: ${v.lgSpacing};
    }
`;

export const Logo = styled.div`
    width: 5rem;
    cursor: pointer;
    margin: 0 auto;

    img{
        max-width: 100%;
        height: auto;
        filter: ${({ theme }) => theme.invert};
    }
`;

export const SidebarBtn = styled.button`
    ${btnReset};
    position: absolute;
    top: ${v.xxlgSpacing};
    left: ${({ isOpen }) => (isOpen ? `23.6rem` : `8.4rem`)};
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;;
    background: ${({ theme }) => theme.primaryColor};
    box-shadow: 0 0 .4rem ${({ theme }) => theme.secondaryColor}, 0 0 .7rem ${({ theme }) => theme.bgColor};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transform: ${({ isOpen }) => !isOpen ? `rotate(180deg)` : `initial`};
    
    // Desktop screen
    @media screen and (min-width: 1920px) {
        left: ${({ isOpen }) => (isOpen ? `24.8rem` : `9rem`)};
    }
`

export const Search = styled.div`
    margin-top: ${v.lgSpacing};
    background: ${({ theme }) => theme.secondaryColor};
    border-radius: ${v.borderRadius};
    box-shadow: inset 0 .4rem .4rem rgba(0, 0, 0, 0.03);
    display: flex;
    height: 4.5rem;

    input{
        padding: 0 ${v.smSpacing};
        font-family: inherit;
        font-size: 1.4rem;
        width: 100%;
        outline: none;
        border: none;
        color: inherit;
        background: transparent;
        cursor: pointer;

        ::selection{
            background-color: ${({ theme }) => theme.primaryColor};
            color: ${({ theme }) => theme.textHoverColor};
        }
    }
`

export const SearchIcon = styled.button`
    ${btnReset};
    padding: calc(${v.mdSpacing} - .2rem) ${v.mdSpacing};
    display: flex;
    cursor: pointer;
    filter: ${({ theme }) => theme.invert};

    img{
        height: 2rem;
    }
`

export const Divider = styled.div`
    height: .1rem;
    width: 100%;
    background: ${({ theme }) => theme.bgColor};
    margin: ${v.lgSpacing} 0;

`

export const PageContainer = styled.div`
    background-color: transparent;
    border-radius: ${v.borderRadius};
    margin: ${v.smSpacing} 0;
    

    :hover {
        transition: all ease .3s;
        background-color: ${({ theme }) => theme.primaryColor};
        color: ${({ theme }) => theme.textHoverColor};
        box-shadow: inset 0 .4rem .4rem rgba(0, 0, 0, 0.1);
    }
    @media screen and (min-width: 1920px) {
        margin: ${v.mdSpacing} 0;
    }
`
export const PageLink = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
    font-size: 1.5rem;
    font-weight: 600;
    padding: calc(${v.smSpacing} - .2rem) 0;
`;

export const PageIcon = styled.div`
    padding: ${v.smSpacing} ${v.mdSpacing};
    display: flex;
    filter: ${({ theme }) => theme.invert};

    img {
        width: 2.5rem;
    }
`;

export const PageLabel = styled.span`
    display: block;
    flex: 1;
    margin-left: ${v.smSpacing};
`;

export const Theme = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.6rem;
`;

export const ThemeLabel = styled.span`
    display: block;
    flex: 1;
  ::selection{
    background-color: ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.textHoverColor};
  }
`;

export const ThemeToggle = styled.button`
    ${btnReset};
    margin: 0 auto;
    cursor: pointer;
    width: 3.6rem;
    height: 2rem;
    border-radius: 1rem;
    background: ${({ theme, isActive }) => (!isActive ? theme.bgColor : theme.primaryColor)};
    box-shadow: inset 0 .4rem .4rem rgba(0, 0, 0, 0.1);
    position: relative;
`;

export const ToggleBtn = styled.div`
    height: 1.8rem;
    width: 1.8rem;
    position: absolute;
    top: .1rem;
    bottom: .1rem;
    transition: 0.2s ease right;
    right: calc(100% - 1.8rem - .1rem);
    border-radius: 50%;
    background: ${({ theme }) => theme.textHoverColor};
`;


