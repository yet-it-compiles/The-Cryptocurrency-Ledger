import styled from 'styled-components'

export const ButtonElements = styled.button`
  margin: 0 auto;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  border-radius: .4rem;
  outline: none;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  letter-spacing: .1rem;
  box-shadow: 0 .4rem 1.2rem 0 rgba(0, 0, 0, .5);

  transition: all 500ms ease-in-out;

  &.mint-gradient {
    color: #fff;
    background-image: linear-gradient(to right, #3BBA9C 0%, #74f8d2 51%, #3BBA9C 100%);
    background-size: 200%;
    background-position: left;
    transition: 500ms background-position ease-in-out;
  }

  &.mint-gradient:hover {
    background-position: right;
    transform: scale(1.1);
    transition: 500ms ease-in-out;
  }
  &.solid-mint {
    background-color: #47DBB8;
    color: #fff;
  }

  //Laptop Screen
  &.widget-med-btn {
    width: 25rem;
    height: 3rem;
    font-size: 1.6rem;
    :hover {
      transition: 500ms ease;
      transform: scale(1.05);
    }
  }
  &.widget-lrg-btn {
    width: 22.4rem;
    height: 4rem;
    font-size: 1.6rem;
    :hover {
      transition: 500ms ease;
      transform: scale(1.05);
    }
  }

  &.med-btn {
    width: 13rem;
    height: 3.2rem;
    font-size: 1.4rem;
  }

  &.lrg-btn {
    width: 15rem;
    height: 3.2rem;
    font-size: 1.4rem;
  }

  //Desktop Screen
  @media screen and (min-width: 1920px) {
    &.med-btn {
      width: 20rem;
      height: 4rem;
      font-size: 2rem;
    }

    &.lrg-btn {
      width: 25rem;
      height: 4.5rem;
      font-size: 2rem;
    }
  }

`;
