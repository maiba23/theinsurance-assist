import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import ReactPixel from "react-facebook-pixel";
import Layout from "../Layout";
import HeroContent from "../components/shared/HeroContent";
import BookingContainer from "../Layout/BookingContainer";
import Booking from "../components/book/Booking";
import Confirmation from "../components/book/Confirmation";
import { useSelector, useDispatch } from "../context/store";
import * as Actions from "../context/actions";
import { getOffset } from "../utils";

const endPoint =
  process.env.REACT_APP_BOOKING_SERVER_URL +
  "/appointment/get/slots?month_delta=0";

const Book = () => {
  const dispatch = useDispatch();
  const confirmStatus = useSelector((state) => state.confirmStatus);
  const [slots, setSlots] = useState({});
  const [loading, setLoading] = useState(true);

  const search = useLocation().search;

  useEffect(() => {
    const user_id = new URLSearchParams(search).get("user-id");
    // console.log("log user id: ", user_id);
    user_id && dispatch(Actions.setUserId(user_id));

    ReactPixel.fbq("trackCustom", "PageView");

    axios
      .get(endPoint, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        setSlots(res.data);
        setLoading(false);
      });

    const fetch = async () => {
      const endPoint = "https://ipinfo.io/json";
      const token = "74fd336dab8d88";

      try {
        const res = await axios.get(endPoint, { params: { token } });

        dispatch(
          Actions.setTimezone({
            value: res.data?.timezone,
            offset: getOffset(res.data?.timezone),
          })
        );
      } catch (e) {
        console.log(e);
      }
    };
    fetch();
  }, [dispatch, search]);

  return (
    <Layout>
      <HeroContent
        clsName="bg-primary-5"
        title="Technical Meeting"
        content="Schedule a meeting to learn more about it."
        animation="fade-in-up"
        delay1="300"
        delay2="400"
      />
      <BookingContainer>
        {confirmStatus ? (
          <Confirmation />
        ) : (
          slots && <Booking timeSlots={slots} loading={loading} />
        )}
      </BookingContainer>
    </Layout>
  );
};

export default Book;
