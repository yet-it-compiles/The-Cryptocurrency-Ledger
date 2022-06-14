import { bitcoin, eth, sol, shiba } from '../../../Assets/Images/Widgets/widget-assets.js';
import styled from 'styled-components'
import { ButtonElements } from '../../Global/button-elements.js';

const TopEarnersLandscape = () => {

    const Wrapper = styled.div`
        text-align: center;
        position: absolute;
        max-width: 572px;
        height: 286px;
        top: 50%;
        left: 50%;
        width: 100%;
        background: rgba(46, 48, 71, 0.7);
        border-radius: 15px;
        transform: translate(-50%, -50%);
        transition: 500ms ease-in-out;
        :hover {
            color: rgba(255, 255, 255, 1);
            transition: 500ms ease-in-out;
            box-shadow: 0 5px 20px rgba(46, 48, 71, 0.7);
        }
        
    `
    const Buttons = styled.div`
        display: flex;
        position: absolute;
        right: 15px;
        top: 15px;
    `
     const Btn = styled.button`
        margin-left: 10px;
        cursor: pointer;
        width: 15px;
        height: 15px;
        content: '';
        border-radius: 50px;
        border: 1px solid rgba(255, 255, 255, 0.5);
    
        &.orange{
            background: #FFAB45;
        }
        &.green{
            background: #3BBA9C;
        }
    `
     const Header = styled.h1`
        margin-top: 15px;
        font-size: 22px;
        cursor: pointer;
        font-weight: 400;
        line-height: 25px;
        padding: 17px 30px;
        text-align: center;
        color: white;
    
        :active {
            cursor: move;
            user-select: none;
        }
    `
     const CryptoWrapper = styled.div`
        display: grid;
        justify-content: center;
        margin-bottom: 20px;
        grid-template-rows: 60px 60px; 
        grid-template-columns: 225px 225px; 
        gap:20px 60px;
    `
     const Crypto1 = styled.div`
        grid-column: 1;
        grid-row: 1;

    `
     const Crypto2 = styled.div`
        grid-column: 2;
        grid-row: 1;
    `
     const Crypto3 = styled.div`
        grid-column: 1;
        grid-row: 2;
    `
     const Crypto4 = styled.div`
        grid-column: 2;
        grid-row: 2;
    `
  return (
      <>
        <Wrapper>
            <Buttons>
                <Btn className="orange"></Btn>
                <Btn className="green"></Btn>
            </Buttons>
            <Header>Top Earners</Header>
            <CryptoWrapper>
                <Crypto1>
                    <img src={ bitcoin } alt="bitcoin"/>
                </Crypto1>
                <Crypto2>
                    <img src={ sol } alt="sol"/>
                </Crypto2>
                <Crypto3>
                    <img src={ eth } alt="eth"/>
                </Crypto3>
                <Crypto4>
                    <img src={ shiba } alt="shiba"/>
                </Crypto4>
            </CryptoWrapper>
            <ButtonElements className='solid-mint widget-med-btn'>Show More</ButtonElements>
        </Wrapper>
      </>
  );
};

export default TopEarnersLandscape;
