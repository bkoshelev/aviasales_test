import React from "react";
import styled from "styled-components";


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