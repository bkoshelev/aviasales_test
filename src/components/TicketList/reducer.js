import initalState from "./initialState";

const ticketListState = (state = initalState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const getTickets = state => state.ticketListState.tickets;
const getTicketsIds = state =>
  state.ticketListState.tickets.map((ticket, i) => i);
const getTicketCarrier = (state, id) =>
  state.ticketListState.tickets[id].carrier;
const getTicketPrice = (state, id) => state.ticketListState.tickets[id].price;
const getTicketOriginName = (state, id) => {
  const ticket = state.ticketListState.tickets[id];
  return `${ticket.origin}, ${ticket.origin_name}`;
};
const getTicketDestinationName = (state, id) => {
  const ticket = state.ticketListState.tickets[id];
  return `${ticket.destination}, ${ticket.destination_name}`;
};

//протестировать
const getTicketStops = (state, id) => {
  const stops = state.ticketListState.tickets[id].stops;
  const lastChar = Number(String(stops).slice(-1));
  if (lastChar === 0) {
    return "Без пересадок";
  }
  if (lastChar === 1) {
    return `${stops} Пересадка`;
  }
  if (lastChar === 2 || lastChar === 3 || lastChar === 4) {
    return `${stops} Пересадки`;
  }
  if (lastChar > 4) {
    return `${stops} Пересадок`;
  }
};
// В принципе, для получения большого количества данных
// можно было бы использовать функцию getTicketData,
// но у вас ключи в тикетах явно взяты с backend'а без обработки
// если они поменяют название ключа, нас ждет веселый дебаг кода
// так что надежнее получать через функцию.
// Если что, упадет прямо в ней и вычислить ключ будет проще

const getTicketData = (state, keys) =>
  keys.reduce((acc, key) => {
    acc[key] = state.ticketListState.tickets[id][key];
    return acc;
  }, {});
const getTicketDepartureDate = (state, id) =>
  state.ticketListState.tickets[id].departure_date;

const getTicketDepartureTime = (state, id) =>
  state.ticketListState.tickets[id].departure_time;

const getTicketArrivalDate = (state, id) =>
  state.ticketListState.tickets[id].arrival_date;

const getTicketArrivalTime = (state, id) =>
  state.ticketListState.tickets[id].arrival_time;

export default ticketListState;
export {
  getTickets,
  getTicketsIds,
  getTicketCarrier,
  getTicketPrice,
  getTicketData,
  getTicketOriginName,
  getTicketDestinationName,
  getTicketDepartureDate,
  getTicketDepartureTime,
  getTicketArrivalDate,
  getTicketArrivalTime,
  getTicketStops
};
