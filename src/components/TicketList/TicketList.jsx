import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import Ticket from "./../Ticket";
import { getTickets, getTicketsIds } from "./reducer";

const StyledTicketList = styled.div`
  display: grid;
  grid-auto-rows: 100px;

  grid-area: tickets;
  grid-row-gap: 20px;
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
