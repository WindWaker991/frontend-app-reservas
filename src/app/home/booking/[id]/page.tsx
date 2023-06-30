import { Booking, User } from "@/config/interfaces";
import axios from "axios";
import { NextPage } from "next";

const getBooking = async (id: string) => {
  const response = await axios.get(
    process.env.NEXT_PUBLIC_INSTITUTION + "/booking/" + id
  );
  return response.data;
};

const getUser = async () => {
  const response = await axios.get(
    process.env.NEXT_PUBLIC_USERS + "/auth/profile",
    {
      withCredentials: true,
    }
  );
  return response.data;
};

const BookingConfirmationPage = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const booking: Booking = await getBooking(id);
  //const user: User = await getUser();
  return (
    <div className="bg-gray-300 antialiased">
      <div>{booking.object.number}</div>
    </div>
  );
};

export default BookingConfirmationPage;
