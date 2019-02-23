import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import RouteSegmentOrigin from "./RouteSegmentOrigin"
import RouteSegmentPath from "./RouteSegmentPath";
import RouteSegmentDestination from "./RouteSegmentDestination";



import {
  getTicketOriginName,
  getTicketDestinationName,
  getTicketDepartureDate,
  getTicketDepartureTime,
  getTicketArrivalDate,
  getTicketArrivalTime,
  getTicketStops
} from "./../../../TicketList/reducer";

const StyledRoute = styled.div`
  display: grid;
  grid-template: auto / 1fr 1fr 1fr;
`;
const Route = ({
    originName,
    destinationName,
    departureDate,
    departureTime,
    arrivalDate,
    arravalTime,
    stops
}
    ) => {

  const originProps = {
    originName,
    departureDate,
    departureTime,
  }

  const destinationProps = {
    destinationName,
    arrivalDate,
    arravalTime
  }
  return <StyledRoute>
    <RouteSegmentOrigin {...originProps}></RouteSegmentOrigin>
    <RouteSegmentPath stops={stops}></RouteSegmentPath>
    <RouteSegmentDestination {...destinationProps}></RouteSegmentDestination>
  </StyledRoute>;
};

const mapStateToProps = (state, { id }) => {
  return {
    originName: getTicketOriginName(state,id),
    destinationName: getTicketDestinationName(state,id),
    departureData: getTicketDepartureDate(state,id),
    departureTime: getTicketDepartureTime(state,id),
    arrivalDate: getTicketArrivalDate(state,id),
    arravalTime: getTicketArrivalTime(state,id),
    stops: getTicketStops(state,id)
  };
};

export default connect(
  mapStateToProps,
  {}
)(Route);

