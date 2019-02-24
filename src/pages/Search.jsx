import React from "react";
import { styled } from "linaria/react";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { Provider } from "react-redux";

import Filters from "./../components/Filters";
import TicketList from "./../components/TicketList";
import ticketListState from "./../components/TicketList/reducer";
import filtersState from "./../components/Filters/reducer";

const Page = styled.div`
  width: 100%;
  height: 100vh;

  :global() {
   #root {
    position: relative;
    height: 100%;
   }

    body {
      font-family: Open Sans, Tahoma, sans-serif;
      box-sizing: border-box;
      display: block;
      margin: 0;
      padding: 0;
      overflow: unset;
    }
  }
`;

const StyledSearchPage = styled.div`
margin: 0 auto;
width: 1072px;
height: auto;

@media (max-width:1090px) {
width: 1011px;
}

@media (max-width:1030px) {
    width: 749px;
}
`;

const store = createStore(combineReducers({ ticketListState, filtersState }));

const SearchPage = () => {
  return (
    <Provider store={store}>
      <Page>
        <StyledSearchPage

        >
          <Filters />
          <TicketList />
        </StyledSearchPage>
      </Page>
    </Provider>
  );
};

export default SearchPage;
