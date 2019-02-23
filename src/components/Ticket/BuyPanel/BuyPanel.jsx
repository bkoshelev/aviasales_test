import React from "react";
import { styled } from 'linaria/react';
import { connect } from "react-redux";
import { getTicketCarrier} from "./../../TicketList/reducer";

import AirLineLogo from "./AirLineLogo";
import BuyButton from "./BuyButton";

const StyledBuyPanel = styled.div`
  height: 150px;
  display: grid;
  grid-template: 1fr 1fr / 100%;
  padding-left: 20px;  
`;
const BuyPanel = ({ ticketCarrier, id}) => {
    return <StyledBuyPanel>
        <AirLineLogo ticketCarrier={ticketCarrier} ></AirLineLogo>
        <BuyButton id={id}></BuyButton>
    </StyledBuyPanel>
}


const mapStateToProps = (state, { id }) => {
    return {
      ticketCarrier: getTicketCarrier(state,id ),
    };
  };
  
  export default connect(
    mapStateToProps,
    {}
  )(BuyPanel);