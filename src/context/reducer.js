import * as ActionTypes from "./constants";

export const reducer = (state, action) => {
  const dispatch = state.dispatch;
  if (typeof action === "function") {
    action(dispatch);
    return;
  }

  switch (action.type) {
    case ActionTypes.SET_DATE_INFO:
      return {
        ...state,
        bookDate: action.payload,
      };
    case ActionTypes.SET_TIME_INFO:
      return {
        ...state,
        bookTime: action.payload,
      };
    case ActionTypes.SET_TIMEJONE_INFO:
      return {
        ...state,
        timeZone: action.payload,
      };
    case ActionTypes.SET_CONFIRM_STATUS:
      return {
        ...state,
        confirmStatus: action.payload,
      };
    default:
      return state;
  }
};
