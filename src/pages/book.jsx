import { useState, useEffect } from "react";
import axios from "axios";
import ReactPixel from "react-facebook-pixel";
import Layout from "../Layout";
import HeroContent from "../components/shared/HeroContent";
import BookingContainer from "../Layout/BookingContainer";
import Booking from "../components/book/Booking";
import Confirmation from "../components/book/Confirmation";
import { useSelector } from "../context/store";

const endPoint =
  "http://dev-bookings-api.atidot.co/appointment/get/slots?month_delta=0";

const Book = () => {
  const confirmStatus = useSelector((state) => state.confirmStatus);
  const [slots, setSlots] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    ReactPixel.fbq("trackCustom", "Schedule");

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
  }, []);

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
