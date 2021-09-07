import { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducer";
const moment = require("moment-timezone");

const date = new Date();
const tzName = moment.tz.guess();

const tz = {
  altName: date.toTimeString().slice(9),
  value: tzName,
  offset: "",
};

const initialState = {
  bookDate: date,
  bookTime: "",
  timeZone: tz,
  confirmStatus: false,
  user_id: "",
};

export const store = createContext(initialState);

export const ApplicationContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState, (state) => state);

  return (
    <store.Provider value={{ state, dispatch }}>{children}</store.Provider>
  );
};

export const useDispatch = () => {
  const value = useContext(store);
  return value.dispatch;
};

export const useSelector = (selectorFn) => {
  const value = useContext(store);
  return selectorFn(value.state);
};
