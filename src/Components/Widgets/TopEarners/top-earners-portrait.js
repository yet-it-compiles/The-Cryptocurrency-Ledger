import { bitcoin, eth, sol, shiba, tether } from '../../../Assets/Images/Widgets';
import styled from 'styled-components'
import { Button } from '../../Global/Button';
const TopEarnersPortrait = () => {

    const Wrapper = styled.div`
        position: absolute;
        max-width: 284px;
        height: 547px;
        top: 50%;
        left: 50%;
        width: 100%;
        background: rgba(46, 48, 71, 0.7);
        border-radius: 15px;
        transform: translate(-50%, -50%);
        box-shadow: 10px 10px 15px rgba(0,0,0,0.06);
        text-align: center;
        transition: 500ms ease-in-out;
        :hover {
            color: rgba(255, 255, 255, 1);
            box-shadow: 0 5px 20px rgba(46, 48, 71, 0.7);
            transition: 500ms ease-in-out;
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
        content: icon;
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
        cursor: pointer;
        margin-top: 15px;
        font-weight: 400;
        font-size: 22px;
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
        grid-template-rows: 60px 60px; 
        grid-template-columns: 225px; 
        gap: 20px 0;
        margin-bottom: 15px;
    `
     const Crypto1 = styled.div`
        grid-column: 1;
        grid-row: 1;
    `
     const Crypto2 = styled.div`
        grid-column: 1;
        grid-row: 2;
    `
     const Crypto3 = styled.div`
        grid-column: 1;
        grid-row: 3;
    `
     const Crypto4 = styled.div`
        grid-column: 1;
        grid-row: 4;
    `
     const Crypto5 = styled.div`
        grid-column: 1;
        grid-row: 5;
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
                    <img src={ eth } alt="sol"/>
                </Crypto2>
                <Crypto3>
                    <img src={ shiba } alt="eth"/>
                </Crypto3>
                <Crypto4>
                    <img src={ sol } alt="shiba"/>
                </Crypto4>
                <Crypto5>
                    <img src={ tether } alt="tether"/>
                </Crypto5>
            </CryptoWrapper>
            <Button className='solid-mint widget-lrg-btn'>Show More</Button>
        </Wrapper>
      </>
  );
};

export default TopEarnersPortrait;
