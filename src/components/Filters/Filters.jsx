import React from "react";
import { styled } from "linaria/react";

import CurrencyFilter from "./Currency";

const StyledFilters = styled.div`
  width: 293px;
  border-radius: 5px 5px 0 0;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.15);
  display: inline-block;
  margin-right: 50px;
  vertical-align: top;

  @media (max-width: 1090px) {
    width: 232px;
  }

  @media (max-width: 1030px) {
    display: none;
  }
`;

const Filters = () => {
  return (
    <StyledFilters>
      <CurrencyFilter />
    </StyledFilters>
  );
};

export default Filters;
