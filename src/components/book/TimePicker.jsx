import { useCallback, useState } from "react";
import { useDispatch } from "../../context/store";
import * as Actions from "../../context/actions";

const TimeSpot = ({
  id,
  target,
  handleSelectSpot,
  isActive,
  onConfirmClick,
}) => {
  const dispatch = useDispatch();
  const handleClick = (item) => {
    dispatch(Actions.setBookTime(item));
    onConfirmClick();
  };
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
        onClick={useCallback(() => handleSelectSpot(id), [
          id,
          handleSelectSpot,
        ])}
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
        onClick={() => handleClick(target.slice(0, 5))}
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
