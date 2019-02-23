import React from "react";
import { styled } from 'linaria/react';

import Route from "./Route";

const StyledContent = styled.div`
`;
const Content = ({ id }) => {
  return (
    <StyledContent>
      <Route id={id}/>
    </StyledContent>
  );
};

export default Content;
