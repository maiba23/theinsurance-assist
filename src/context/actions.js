import {
  SET_DATE_INFO,
  SET_TIME_INFO,
  SET_TIMEJONE_INFO,
  SET_CONFIRM_STATUS,
  SET_USER_ID,
} from "./constants";

export const setBookDate = (info) => ({
  type: SET_DATE_INFO,
  payload: info,
});

export const setBookTime = (info) => ({
  type: SET_TIME_INFO,
  payload: info,
});

export const setTimezone = (info) => ({
  type: SET_TIMEJONE_INFO,
  payload: info,
});

export const setConfirm = (info) => ({
  type: SET_CONFIRM_STATUS,
  payload: info,
});

export const setUserId = (info) => ({
  type: SET_USER_ID,
  payload: info,
});
