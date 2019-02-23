import React from "react";
import styled from "styled-components";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { Provider } from "react-redux";

import Filters from "./../components/Filters";
import TicketList from "./../components/TicketList";
import ticketListState from "./../components/TicketList/reducer";
import filtersState from './../components/Filters/reducer';

const StyledSearchPage = styled.div`
display: grid;
grid-template: 30vh auto / 0.5fr 293px 729px 0.5fr;
grid-column-gap: 50px;

grid-template-areas:    ". panel tickets ."
                        ". panel tickets ."
                        ". panel tickets .";
                
@media (max-width: 1280px) {
grid-template: 30vh auto / 0.5fr 232px 729px 0.5fr;
}

@media (max-width: 320px) {
//grid-template: auto / 100vw;

    grid-template-areas:"tickets tickets tickets tickets"
                        "tickets tickets tickets tickets"
                        "tickets tickets tickets tickets";
    align-items: center;
};
`;  

const store = createStore(
    combineReducers({ticketListState, filtersState})
  );

const SearchPage = () => {
    return   <Provider store={store}>
    <StyledSearchPage>
        <Filters></Filters>
        <TicketList></TicketList>
    </StyledSearchPage>
    </Provider>
}

export default SearchPage;