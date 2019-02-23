import React from "react";
import styled from "styled-components";

import CurrencyFilter from "./Currency";

const StyledFilters = styled.div`
width: 100%;
max-height:min-content;
  display: grid;
  grid-template: minmax(min-content, min-content) / 100%;
  border-radius: 5px 5px 0 0;
  box-shadow: 0 1px 5px 0 rgba(0,0,0,.15);
  grid-area: panel;


`;

const Filters = () => {
  return (
    <StyledFilters>
      <CurrencyFilter />
    </StyledFilters>
  );
};

export default Filters;
