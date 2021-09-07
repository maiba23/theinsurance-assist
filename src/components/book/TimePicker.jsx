import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "../../context/store";
import * as Actions from "../../context/actions";
import axios from "axios";
import { formatDate, getTZOffest } from "../../utils";
import ReactPixel from "react-facebook-pixel";

// Date.prototype.toCustomString = function () {
//   const offset = -this.getTimezoneOffset();
//   console.log("timzoneoffest", offset);
//   const hour = `${Math.floor(offset / 60)}`;
//   const mins = `${offset % 60}`;
//   if (hour > 0) {
//     return `${this.toISOString().split(".")[0]}+${hour.padStart(
//       2,
//       "0"
//     )}:${mins.padStart(2, "0")}`;
//   } else {
//     return `${this.toISOString().split(".")[0]}${hour.padStart(
//       2,
//       "0"
//     )}:${mins.padStart(2, "0")}`;
//   }
// };

const TimeSpot = ({
  id,
  target,
  handleSelectSpot,
  isActive,
  onConfirmClick,
}) => {
  const dispatch = useDispatch();
  const user_id = useSelector((state) => state.user_id);
  const timeZone = useSelector((state) => state.timeZone);
  const bookDate = useSelector((state) => state.bookDate);
  const endPoint =
    process.env.REACT_APP_BOOKING_SERVER_URL + "/appointment/set/" + user_id;

  const handleClick = useCallback(
    (item) => {
      ReactPixel.fbq("trackCustom", "CompleteRegistration");
      dispatch(Actions.setBookTime(item.slice(0, 5)));
      onConfirmClick();
      // const dd = new Date(`${formatDate(bookDate)} ${item}`).toCustomString();

      // console.log(timeZone);

      const startTime =
        formatDate(bookDate) +
        "T" +
        item +
        getTZOffest(timeZone?.offset * 3600);

      // console.log(startTime);

      const params = {
        start_time: startTime,
        timezone: timeZone?.value || timeZone,
      };
      axios.post(endPoint, params).then((res) => console.log(res.data, params));
    },
    [dispatch, bookDate, timeZone, endPoint, onConfirmClick]
  );

  return (
    <div
      className="Jqp9X3YjPb"
      data-container={isActive ? "selected-spot" : ""}
    >
      <button
        data-container="time-button"
        tabIndex={isActive ? "-1" : "0"}
        data-start-time="1:00am"
        className={
          isActive
            ? "_2IrBWuPQTq _1byk5uh6y7 _4rcXoQPLhG _1Qg-rkOB2V _2zIir_wMTE"
            : "_2IrBWuPQTq _4rcXoQPLhG _1Qg-rkOB2V _2zIir_wMTE"
        }
        aria-describedby="tooltip-2349a"
        type="button"
        onClick={useCallback(
          () => handleSelectSpot(id),
          [id, handleSelectSpot]
        )}
      >
        <div
          className={
            isActive ? "_33HKFhUjZR hmvLs1WTG5" : "_33HKFhUjZR _1dAAh2NaV3"
          }
        >
          <div className="_2asEJ_k_27">{target.slice(0, 5)}</div>
        </div>
      </button>
      <button
        tabIndex={isActive ? "0" : "-1"}
        data-container="confirm-button"
        className={
          isActive
            ? "_2OQqVeh6S4 _1Es3W-g9AL _4rcXoQPLhG _1Qg-rkOB2V _2zIir_wMTE confirm-button-enter-done"
            : "_2OQqVeh6S4 _4rcXoQPLhG _1Qg-rkOB2V _2zIir_wMTE"
        }
        aria-describedby="tooltip-f73ef"
        type="button"
        onClick={() => handleClick(target)}
      >
        Confirm
      </button>
    </div>
  );
};

const TimePicker = ({ slots }) => {
  const dispatch = useDispatch();
  const [active, setActive] = useState(0);
  const slotsArr = Object.keys(slots);
  const handleConfirm = () => {
    dispatch(Actions.setConfirm(true));
  };

  const timeList = slotsArr?.map((item, idx) => (
    <TimeSpot
      key={idx}
      target={item}
      handleSelectSpot={setActive}
      id={idx}
      isActive={active === idx}
      onConfirmClick={handleConfirm}
    />
  ));
  return <>{timeList}</>;
};

export default TimePicker;
