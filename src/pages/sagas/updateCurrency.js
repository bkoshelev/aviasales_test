import axios from "axios";
import { put, takem, select } from "redux-saga";

import { getTickets } from "./../../components/TicketList/reducer";
import { getCurrentCurrency} from "./../../components/Filters/reducer";

const makeRequest = async () => {
  const result = await axios.get(
    "https://api.exchangeratesapi.io/latest?base=RUB"
  );
  console.warn("RESULT >>>", result);
};
function* updateCurrency() {
  const {
    payload: { newCurrency }
  } = yield take("UPDATE_CURRENCY");
  const tickets = yield select(getTickets);
  const currentCurrency = yield select(getCurrentCurrency);
  const newTickets = [];
}

export default updateCurrency;
