'use client';
import { City } from "@/config/interfaces";
import { useCityContext } from "@/context/CityContext";
import axios from "axios";
import { useState } from "react";


const ListCities = () => {
    const { cities } = useCityContext();
    const [city, setCity] = useState<string>();

    function handleCityChange(e: React.ChangeEvent<HTMLSelectElement>) {
        setCity(e.target.value);
    }

    return (
        <select
            name="cities"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 
                    focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleCityChange}>
            {cities.map((city) => (
                <option key={city.id}>
                    {city.name}
                </option>
            ))}
        </select>
    );
}

export default ListCities;