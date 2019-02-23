import React from "react";
import { styled } from 'linaria/react';

import BuyPanel from "./BuyPanel";
import Content from "./Content";

const StyledTicket = styled.div`
height: auto;
    display: grid;
    grid-template: 100% / 20% 80%;   

    border-radius: 5px 5px 0 0;
    box-shadow: 0 1px 5px 0 rgba(0,0,0,.15);
`;

const Ticket = ({ id }) => {
    return <StyledTicket>
        <BuyPanel id={id}></BuyPanel>
         <Content id={id}></Content>
    </StyledTicket>
}

export default Ticket;

