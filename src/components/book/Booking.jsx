import { Calendar } from "react-rainbow-components";
import TimezoneSelect from "react-timezone-select";
import TimePicker from "./TimePicker";
import { convertTZ, formatDate, getTimeSlot } from "../../utils";
import { useDispatch, useSelector } from "../../context/store";
import * as Actions from "../../context/actions";
import Loader from "react-loader-spinner";
import { useEffect } from "react";
import { useState } from "react";

const Booking = ({ timeSlots, loading }) => {
  const [slots, setSlots] = useState();
  useEffect(() => {
    setSlots(timeSlots);
  }, [timeSlots]);

  const dispatch = useDispatch();
  const bookDate = useSelector((state) => state.bookDate);
  const timeZone = useSelector((state) => state.timeZone);
  const selectDate = (bookDate) => {
    dispatch(Actions.setBookDate(bookDate));
  };
  const selectTimezone = (timeZone) => {
    dispatch(Actions.setTimezone(timeZone));
  };
  const selectedDate = Object.keys(timeSlots).filter(
    (item) => item === formatDate(bookDate)
  );
  const nextYear = new Date().getFullYear() + 1;

  useEffect(() => {
    const newTimeSlots = {};
    Object.keys(timeSlots).map((date) => {
      Object.keys(timeSlots[date]).map((timeslot) => {
        const newDate = new Date(`${date} ${timeslot}`);

        const newUTCDate = new Date(
          Date.UTC(
            newDate.getFullYear(),
            newDate.getMonth(),
            newDate.getDate(),
            newDate.getHours(),
            newDate.getMinutes(),
            newDate.getSeconds()
          )
        );
        const dateKey = formatDate(
          convertTZ(newUTCDate, timeZone.value || timeZone)
        );
        const timeSlotKey = getTimeSlot(
          convertTZ(newUTCDate, timeZone.value || timeZone)
        );
        newTimeSlots[dateKey] = {
          ...(newTimeSlots[dateKey] ? newTimeSlots[dateKey] : {}),
        };
        newTimeSlots[dateKey][timeSlotKey] = true;
        return "";
      });
      return "";
    });
    setSlots({ ...newTimeSlots });
  }, [timeZone, timeSlots]);

  return (
    <div className="_1Bm6brdqaB _1qz0a4uwN4">
      <div
        data-component="spotpicker"
        className="_30uoV3njfD b1P7SFgot4 _1n7iwH3DQJ"
      >
        <h2 className="azagJQlOpZ _1TIblCimGQ">Select a Date &amp; Time</h2>
        <div className="_2jmGh1HtJv _1XO44EYYk1 _--8H0pY0pn">
          <div
            data-component="spotpicker-dates"
            className="_2WKdni3y14 _2wzWP0QicO _1nJXzV3agT"
          >
            <div className="calendar k1wAD0GFi1">
              <Calendar
                id="calendar-1"
                value={bookDate}
                onChange={selectDate}
                minDate={new Date()}
                maxDate={new Date(nextYear, 11, 31)}
              />
            </div>
            <div className="timezone">
              <div className="_3vUmo3_KW8">Select a Timezone</div>
              <TimezoneSelect
                value={timeZone}
                onChange={selectTimezone}
                labelStyle="altName"
              />
            </div>
          </div>
          <div
            data-component="spotpicker-times"
            className="_1WAB_u6tgy _1K3AETiM0_ _19GgkHzXLz"
          >
            <div
              data-component="spotpicker-times-subtitle"
              className="_3vUmo3_KW8"
            >
              Schedule Policy Review
            </div>
            <div
              data-component="spotpicker-times-list"
              className="_31OiCICiBy _2BAWsZzdsR _2zxA_-5OZU"
            >
              {slots && (
                <div data-component="spot-list" className="_2YFzZKJ3S2">
                  {slots[selectedDate] === undefined ||
                  Object.keys(slots[selectedDate]).length === 0 ? (
                    <div>
                      <strong>No Time Slots</strong>
                    </div>
                  ) : (
                    <TimePicker slots={slots[selectedDate]} />
                  )}
                  {loading && (
                    <Loader
                      type="TailSpin"
                      color="rgba(1,182,245,1)"
                      height={45}
                      width={45}
                    />
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
