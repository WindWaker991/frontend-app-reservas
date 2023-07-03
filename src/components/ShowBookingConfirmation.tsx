"use client";
import { Booking } from "@/config/interfaces";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
  booking: Booking;
}

export const ShowBookingConfirmation: React.FC<Props> = ({ booking }) => {
  const router = useRouter();

  const handleButton = () => {
    router.push("/home");
  };

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Reserva confirmada
          </h1>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              N° de reserva: {booking.id}
            </label>
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Objeto reservado: {booking.object.number}
            </label>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-start"></div>
          </div>
          <button
            className="w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            onClick={handleButton}
          >
            Volver al Home
          </button>
        </div>
      </div>
    </div>
  );
};
