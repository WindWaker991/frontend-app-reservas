"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Booking, City, User } from "@/config/interfaces";
import EditProfile from "@/components/EditProfile";
import ShowProfile from "@/components/ShowProfile";
import useShowPopup from "@/hooks/useShowPopup";
import ShowUserBookings from "@/components/ShowUserBookings";

const Profile = () => {
  const [city, setCity] = useState<City>();
  const [user, setUser] = useState<User>();
  const [bookings, setBookings] = useState<Booking[]>();
  const [showEdit, setShowEdit] = useState<boolean>(false);
  const { showPopup, handleHidePopup, handleShowPopup } = useShowPopup();
  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get(
        process.env.NEXT_PUBLIC_USERS + "/auth/profile",
        {
          withCredentials: true,
        }
      );
      setUser(response.data);
      const responseCity = await axios.post(
        process.env.NEXT_PUBLIC_INSTITUTION + "/city/getOne",
        response.data.city
      );
      setCity(responseCity.data);
    };
    getUser();

    const getBookings = async () => {
      const res = await axios.get(
        process.env.NEXT_PUBLIC_USERS + "/auth/profile",
        {
          withCredentials: true,
        }
      );
      const User = res.data;
      const response = await axios.get(
        process.env.NEXT_PUBLIC_INSTITUTION + "/booking/bookings/" + User?.id
      );
      setBookings(response.data);
    };
    getBookings();
  }, []);

  function handleBackClick() {
    router.push("/home");
  }

  function handleEditClick() {
    setShowEdit(!showEdit);
  }

  const handleShowBookings = () => {
    handleShowPopup();
  };

  return (
    <body className="bg-gray-300 antialiased">
      <div className="container mx-auto my-60">
        <div>
          <div className="bg-white relative shadow rounded-lg w-5/6 md:w-5/6  lg:w-4/6 xl:w-3/6 mx-auto">
            <div className="flex justify-center">
              <img
                src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                alt=""
                className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110"
              ></img>
            </div>

            <div className="mt-16">
              <h1 className="font-bold text-center text-3xl text-gray-900">
                {user?.name}
              </h1>
              <div className="my-5 px-6">
                <button
                  className="text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white"
                  onClick={handleEditClick}
                >
                  Editar <span className="font-bold">datos</span>
                </button>
                <button
                  className="text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white"
                  onClick={handleShowBookings}
                >
                  Ver <span className="font-bold">reservas</span>
                </button>
              </div>

              <div className="w-full">
                <h3 className="font-medium text-gray-900 text-left px-6">
                  Datos personales
                </h3>
                {showEdit ? (
                  <EditProfile user={user!} city={city!} setUser={setUser} />
                ) : (
                  <ShowProfile user={user!} city={city!} />
                )}
              </div>
            </div>
          </div>
          <div className="my-5 px-6">
            <button
              className="text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white"
              onClick={handleBackClick}
            >
              Volver al Home
            </button>
          </div>
        </div>
      </div>
      {bookings && showPopup && (
        <ShowUserBookings
          bookings={bookings}
          handleHidePopup={handleHidePopup}
        />
      )}
    </body>
  );
};
export default Profile;
