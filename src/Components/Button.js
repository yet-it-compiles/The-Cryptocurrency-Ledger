import styled from 'styled-components'
export const Button = styled.button`
    margin: 0 auto;
    text-transform: uppercase;
    font-weight: 700;
    border-radius: 5px;
    outline: none;
    border: none;
    cursor: pointer;
    white-space: nowrap;
    letter-spacing: 1px;
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, .5);

    transition: all .4s ease-in-out;

    &.mint-gradient{
        color: #fff;
        background-color: #47DBB8; 
        background-image: linear-gradient(300deg, #d2f6ed, #47DBB8, #6dd9c0, #abfbe7); 
        background-size: 300% ;
        background-position: left;
        transition: 500ms background-position ease-in-out; 
    }

    &.mint-gradient:hover{
        background-position: right; 
        transform: scale(1.05);
        transition: 500ms;
    }
    &.med-btn {
        width: 9rem; 
        height: 2.5rem; 
        font-size: 1rem;
    }
    &.lrg-btn {
        margin-top: 10px;
        font-size: 1.3rem;
        width: 14rem; 
        height: 2.8rem; 
    }
    @media screen and (min-width: 2500px) {
        &.med-btn {
            width: 12rem; 
            height: 3.5rem; 
            font-size: 1.4rem;
        }

        &.lrg-btn {
            font-size: 1.6rem;
            width: 16rem; 
            height: 3.8rem; 
        }
    }
`;
