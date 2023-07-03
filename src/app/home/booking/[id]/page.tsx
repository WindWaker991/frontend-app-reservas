import { ShowBookingConfirmation } from "@/components/ShowBookingConfirmation";
import { Booking, User } from "@/config/interfaces";
import axios from "axios";
import { useRouter } from "next/navigation";

const getBooking = async (id: string) => {
  const response = await axios.get(
    process.env.NEXT_PUBLIC_INSTITUTION + "/booking/" + id
  );
  return response.data;
};

const BookingConfirmationPage = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const booking: Booking = await getBooking(id);

  return <ShowBookingConfirmation booking={booking} />;
};

export default BookingConfirmationPage;
