import React from "react";
import { styled } from 'linaria/react';
import { connect } from "react-redux";

import Ticket from "./../Ticket";
import { getTickets, getTicketsIds } from "./reducer";

const StyledTicketList = styled.div`
  grid-auto-rows: 100px;
  width: 729px;
  grid-row-gap: 20px;
  display: inline-block;
  vertical-align: top;

  @media (max-width: 1030px) {
    margin-left: 10px;
    margin-right: 10px;
  }
`;


// лучше добавить id каждому тикету, чтобы вставить его в key
//, вместо него использую порядок тикета в массиве
const createTickets = (ticketsIds = []) => ticketsIds.map( (ticketId, i) => <Ticket id={i} key={ticketId} />);

const TicketList = ({ ticketsIds = [] }) => {
  const ticketsList = createTickets(ticketsIds);
  return <StyledTicketList>{ticketsList}</StyledTicketList>;
};

const mapStateToProps = (state, props) => {
  return {
    ticketsIds: getTicketsIds(state)
  };
};

export default connect(
  mapStateToProps,
  {}
)(TicketList);
