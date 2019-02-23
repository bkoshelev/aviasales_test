import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { getTicketPrice} from "./../../TicketList/reducer";

const StyledBuyButton = styled.button`
// margin-bottom: 6px;
width: 100%;
height: 48px;
border-radius: 5px;
box-shadow: 0 1px 0 0 #ed7a18, 0 2px 1px 0 rgba(0,0,0,.1);
// font-size: 1rem;
overflow: hidden;
background-color: #f57c00;
color: #fff;  
display: grid;
align-content: center;
justify-content: center;
border: 0;

`;

const BuyButtonText = styled.span`
margin-right: 3px;
    font-weight: 600;
`;

const BuyButton = ({price}) => {
    return <StyledBuyButton>
       <BuyButtonText> {`Купить`}<br></br> {`за ${price}`}</BuyButtonText>
    </StyledBuyButton>
}


const mapStateToProps = (state, { id }) => {
    return {
      price: getTicketPrice(state,id ),
    };
  };
  
  export default connect(
    mapStateToProps,
    {}
  )(BuyButton);