import { useSelector } from "../../context/store";
import { convertDate, addMinutes } from "../../utils";

const ConfrimSection = () => {
  const bookDate = useSelector((state) => state.bookDate);
  const bookTime = useSelector((state) => state.bookTime);
  const timeZone = useSelector((state) => state.timeZone);
  return (
    <div className="_1Bm6brdqaB _1qz0a4uwN4">
      <div className="_2SW8ZavgiT">
        <div data-component="confirmation-header" className="_2nrYIwWWa2">
          <div className="_13uopXL-3E"></div>
          <h2 className="y2oCQRYtj-">Confirmed</h2>
          You are scheduled with Person Name.
        </div>
        <div>
          <div
            data-container="details"
            className="_1Bb7pCnP06 _3-FM_THD4F _2Nb4AfSHpt"
          >
            <div className="_3HpTyYnhae _3NwaXVjVAL">
              <div className="_2o3pS4hCkF"></div>
              <h2 className="_19xNb_C6Tq">Technical meeting - Atidot</h2>
            </div>
            <div
              data-id="details-highlighted-item"
              className="GZMZnKlJFF _34MMem7DFr _3NwaXVjVAL"
            >
              <span
                className="icon-calendar-fill _2TgLIBcAXp _1nLYzhaa-n _2ZOdkKeS-8"
                data-id="details-highlighted-item-icon"
                aria-describedby="tooltip-65349"
              ></span>
              {bookTime +
                " - " +
                addMinutes(bookTime, "30") +
                ", " +
                convertDate(bookDate)}
            </div>
            <div className="_3NwaXVjVAL">
              <span
                className="icon-globe _2TgLIBcAXp _1nLYzhaa-n _2ZOdkKeS-8"
                data-id="details-item-icon"
                aria-describedby="tooltip-c61d2"
              ></span>
              {timeZone?.value || timeZone}
            </div>
          </div>
          <div className="_Xsb-9TbmH">
            A calendar invitation has been sent to your email address.
          </div>
        </div>
        <div className="_9jrTIVpHfN"></div>
      </div>
    </div>
  );
};

export default ConfrimSection;
