import React from "react";
import styled from "styled-components";

import LeftPanel from "./../components/LeftPanel";
import TicketList from "./../components/TicketList";

const StyledSearchPage = styled.div`
display: grid;
grid-template: 100vh / 20vw 80vw;

grid-template-areas:    "panel tickets"
                        "panel tickets"
                        "panel tickets";
                    ;  

@media (max-width: 320px) {
    grid-template-areas:"tickets"
                        "tickets"
                        "tickets";
    align-items: center;
}

// @media (max-width: 320px) {
//     grid-template-areas:"tickets"
//                         "tickets"
//                         "tickets";
// }
`;  



const SearchPage = () => {
    return <StyledSearchPage></StyledSearchPage>
}

export default SearchPage;