import { Booking, User } from "@/config/interfaces";
import axios from "axios";
import { NextPage } from "next";

async function getBookings(): Promise<Booking[]> {
  const res = await axios.get(process.env.NEXT_PUBLIC_INSTITUTION + "/booking");
  return res.data;
}

const getUser = async () => {
  const response = await axios.get(
    process.env.NEXT_PUBLIC_USERS + "/auth/profile",
    {
      withCredentials: true,
    }
  );
  return response.data;
};

const BookingConfirmationPage = async () => {
  const bookings: Booking[] = await getBookings();
  const user: User = await getUser();

  return (
    <>
      <h1>Booking Confirmation Page</h1>
    </>
  );
};

export default BookingConfirmationPage;
