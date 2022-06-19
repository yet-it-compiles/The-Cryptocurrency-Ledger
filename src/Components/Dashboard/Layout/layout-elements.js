import styled from "styled-components";

import {v} from "../../Global/variables";

export const Container = styled.div`
    display: flex;
    overflow: hidden;
    max-height: 100vh;
`
export const Header = styled.h1`
    font-weight: 500;
    font-size: 3.2rem;

    ::selection{
        background-color: ${({theme}) => theme.primaryLight};
        color: ${({theme}) => theme.textHoverLight};
    }
`

export const Main = styled.main`
    padding: calc(${v.mdSpacing} * 2);
    width: 100%;
`
export const AddWidgetBtn = styled.button`
    position: absolute;
    bottom: 25px;
    right: 25px;
    background: transparent;
    border: none;
    cursor: pointer;
    transition: 500ms ease-in-out;
    img {
        width: 60px;
    }
    :hover {
        transition: 500ms ease-in-out;
        transform: scale(1.1);
    }
`



