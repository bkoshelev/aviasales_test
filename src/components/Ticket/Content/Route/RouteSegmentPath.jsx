import React from "react";
import { styled } from 'linaria/react';


const StyledRouteSegmentPath = styled.div`
`;
const RouteSegmentPath = ({ stops }) => {
  return (
    <StyledRouteSegmentPath>
        {stops}
    </StyledRouteSegmentPath>
  );
};

export default RouteSegmentPath;