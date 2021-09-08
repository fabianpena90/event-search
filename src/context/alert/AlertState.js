import { useReducer } from "react";
import AlertReducer from "./alertReducer";
import AlertContext from "./alertContext";

const AlertState = (props) => {
  const initialState = null;

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  const setAlert = (msg) => {
    dispatch({
      type: "SET_ALERT",
      payload: { msg },
    });

    setTimeout(() => dispatch({ type: "CLEAR_ALERT" }), 3000);
  };

  return (
    <AlertContext.Provider value={{
      alert: state,
      setAlert
    }}>{props.children}</AlertContext.Provider>
  );
};

export default AlertState;