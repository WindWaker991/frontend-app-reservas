"use client";
import React, { useEffect, useState } from "react";
import { City } from "@/config/interfaces";
import { useRouter } from "next/navigation";

const ProfileEdit = () => {
    const [city, setCity] = useState<string>();
    const [cities, setCities] = useState<City[]>();
    const router = useRouter();

    function handleBackClick() {
        router.push("/home");
    }

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
                  Pepito
                </h1>
                <p className="text-center text-sm text-gray-400 font-medium">
                  Estudiante al borde del colapso
                </p>
                <p>
                  <span></span>
                </p>
                <div className="my-5 px-6">
                  <button
                    className="text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white"

                  >
                    Guardar <span className="font-bold">datos</span>
                  </button>
                </div>
  
                <div className="w-full">
                  <h3 className="font-medium text-gray-900 text-left px-6">
                    Datos personales
                  </h3>
                  <div className="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
                    <input className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150"
                    placeholder = "Nombre"
                    >
                      
                    </input>
  
                    <input className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150"
                        placeholder = "Nombre usuario"
                    >
                    </input>
  
                    <div>
                      <label
                        htmlFor="city"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        City
                      </label>
                      <select
                        name="cities"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 
                                  focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        {cities?.map((city) => (
                          <option key={city.id} value={city.id}>
                            {city.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
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
      </body>
    );
};
export default ProfileEdit;