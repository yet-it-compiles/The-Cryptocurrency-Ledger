import { inTransaction, outTransaction } from '../../../Assets/Images/Widgets/widget-assets.js';
import styled from 'styled-components'

const TransactionsPortrait = () => {

    const Wrapper = styled.div`
        position: absolute;
        max-width: 400px;
        height: 450px;
        top: 50%;
        left: 50%;
        width: 100%;
        background: rgba(46, 48, 71, 0.7);
        border-radius: 15px;
        transform: translate(-50%, -50%);
        box-shadow: 10px 10px 15px rgba(0,0,0,0.06);
        transition: 500ms ease-in-out;
        :hover {
            color: rgba(255, 255, 255, 1);
            box-shadow: 0 5px 20px rgba(46, 48, 71, 0.7);
            transition: 500ms ease-in-out;
        }
    `
         const CryptoWrapper = styled.div`
         text-align: center;
         display: grid;
         justify-content: center;
         margin-top: 20px;
         grid-template-rows: 44px 44px; 
         grid-template-columns: 400px; 
         gap: 25px 0;
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
        &.purple{
            background: #C569FC;
        }
    `
     const Header = styled.h1`
        cursor: pointer;
        font-weight: 400;
        margin-top: 15px;
        font-size: 25px;
        line-height: 25px;
        padding: 15px 0  0 30px;
        text-align: left;
        color: white;
    
        :active {
            cursor: move;
            user-select: none;
        }
    `

     const T1 = styled.div`
        img {
            height: 50px;
        }
         grid-column: 1;
         grid-row: 1;
    `
     const T2 = styled.div`
        img {
            height: 50px;
        }     
         grid-column: 1;
         grid-row: 2;
     `
     const T3 = styled.div`
        img {
            height: 50px;
        }     
         grid-column: 1;
         grid-row: 3;

     `
     const T4 = styled.div`
        img {
            height: 50px;
        }     
         grid-column: 1;
         grid-row: 4;
     `
     const T5 = styled.div`
        img {
            height: 50px;
        }     
         grid-column: 1;
         grid-row: 5;

     `
  return (
      <>
        <Wrapper>
            <Buttons>
                <Btn className="orange"></Btn>
                <Btn className="green"></Btn>
                <Btn className="purple"></Btn>
            </Buttons>
            <Header>Transactions</Header>
            <CryptoWrapper>
                <T1>
                    <img src={ inTransaction } alt="transaction"/>
                </T1>
                <T2>
                    <img src={ inTransaction } alt="transaction"/>
                </T2>
                <T3>
                    <img src={ outTransaction } alt="transaction"/>
                </T3>
                <T4>
                    <img src={ outTransaction } alt="transaction"/>
                </T4>
                <T5>
                    <img src={ inTransaction } alt="transaction"/>
                </T5>

            </CryptoWrapper>
        </Wrapper>
      </>
  );
};

export default TransactionsPortrait;
