import React from "react";
import { styled } from "linaria/react";
import { connect } from "react-redux";

import { getTicketPrice } from "./../../TicketList/reducer";

const StyledBuyButton = styled.button`
  width: 100%;
  height: 48px;
  border-radius: 5px;
  box-shadow: 0 1px 0 0 #ed7a18, 0 2px 1px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background-color: #f57c00;
  color: #fff;
  display: grid;
  align-content: center;
  justify-content: center;
  border: 0;
  transition: all 0.3s;


  &:hover {
    border-bottom-color: transparent;
    background-color: #ffa353;
    transition: all 0.3s;
    cursor: pointer;
    outline: none;
  }

  &:active {
    transition: all 0.3s;
    border: 0;
    background-color: #f57c00;
    outline: none;

  }

  &:focus {
    transition: all 0.3s;
    border: 0;
    background-color: #f57c00;
    outline: none;

  }
`;

const BuyButtonText = styled.span`
  margin-right: 3px;
  font-weight: 600;
`;

const BuyButton = ({ price }) => {
  return (
    <StyledBuyButton>
      <BuyButtonText>
        {`Купить`}
        <br /> {`за ${price}`}
      </BuyButtonText>
    </StyledBuyButton>
  );
};

const mapStateToProps = (state, { id }) => {
  return {
    price: getTicketPrice(state, id)
  };
};

export default connect(
  mapStateToProps,
  {}
)(BuyButton);
