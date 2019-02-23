import React from "react";
import styled from "styled-components";

const Time = styled.div`
  font-size: 1.75rem;
  color: #4a4a4a;
  line-height: 2.5rem;
`;

const City = styled.div`
  font-weight: 600;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: #8b9497;
  line-height: 1.5;
`;

const Date = styled.div`
  color: #8b9497;
  line-height: 1.5;
`;

const StyledRouteSegmentOrigin = styled.div`
display: grid;
grid-template: 40px 18px 18px / 100%;
`;

const RouteSegmentOrigin = ({ originName, departureDate, departureTime }) => {
  return (
    <StyledRouteSegmentOrigin>
      <Time>{departureTime}</Time>
      <City>{originName}</City>
      <Date>{departureDate}</Date>
    </StyledRouteSegmentOrigin>
  );
};

export default RouteSegmentOrigin;
