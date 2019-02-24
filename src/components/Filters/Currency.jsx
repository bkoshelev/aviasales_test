import React, { useState } from "react";
import { styled } from 'linaria/react';

const StyledCurrency = styled.div`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  display: grid;
  grid-template: 50px 200px / 1fr;
`;

const CurrencyHeader = styled.div`
  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--general-text-color, #4a4a4a);
  margin: 0;
  line-height: 3.125rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;
  user-select: none;
  position: relative;
`;

const CurrencyItem = styled.button`
border: 1px solid #dce2e4;
display: flex;
align-items: center;
justify-items: center;
color: #2196f3;
&:hover {
    border-color: #2196f3;
    background-color: #e5f9ff;
    cursor: pointer;
}

`;
const CurrencyRubItem = styled(CurrencyItem)`
  border-radius: 5px 0 0 5px;
`;

const CurrencyUsdItem = styled(CurrencyItem)``;

const CurrencyEurItem = styled(CurrencyItem)`
  border-radius: 0 5px 5px 0;
`;

const CurrencyTab = styled.div`
  width: 100%;
  display: grid;
  grid-template: 45px / 1fr 1fr 1fr;
`;

const Currency = () => {
//   const [selectedCurrency, setCurrency] = useState(0);
  return (
    <StyledCurrency>
      <CurrencyHeader>Валюта</CurrencyHeader>
      <CurrencyTab>
        {/* <CurrencyRubItem selected={selectedCurrency === "rub"}>
          RUB
        </CurrencyRubItem>
        <CurrencyUsdItem selected={selectedCurrency === "usd"}>
          USD
        </CurrencyUsdItem>
        <CurrencyEurItem selected={selectedCurrency === "eur"}>
          EUR
        </CurrencyEurItem> */}
      </CurrencyTab>
    </StyledCurrency>
  );
};

export default Currency;
