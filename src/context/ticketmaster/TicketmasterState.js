import { useReducer } from "react";
import axios from "axios";
import TicketmasterReducer from "./ticketmasterReducer";
import TicketmasterContext from "./ticketmasterContext";

const TicketmasterState = (props) => {
  const initialState = {
    events: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(TicketmasterReducer, initialState);

  // Get Events
  const searchEvents = async (text) => {
    setLoading();
    const res = await axios.get(
      `https://app.ticketmaster.com/discovery/v2/suggest.json?keyword=${text}&apikey=aGGAu8OcGXyfxtutc5oQRBUOWI0wpc5Z`);

    dispatch({
      type: "SEARCH_EVENTS",
      payload: res.data._embedded.events,
    });
  };

  // Clear Events
  const clearEvents = () => {
    dispatch({
      type: "CLEAR_EVENTS",
    });
  };

  // Set Loading
  const setLoading = () => {
    dispatch({
      type: "SET_LOADING",
    });
  };

  return (
    <TicketmasterContext.Provider value={{
      events: state.events,
      loading: state.loading,
      searchEvents,
      clearEvents,
    }}>{props.children}</TicketmasterContext.Provider>
  );
};

export default TicketmasterState;