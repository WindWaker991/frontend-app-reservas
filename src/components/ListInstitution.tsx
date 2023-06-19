'use client';
import { Institution } from "@/config/interfaces";
import { useInstitutionContext } from "@/context/InstitutionContext";
import axios from "axios";
import { useState } from "react";


const ListInstitution = () => {
    const { institutions } = useInstitutionContext();
    const [institution, setInstitution] = useState<string>();

    function handleInstitutionChange(e: React.ChangeEvent<HTMLSelectElement>) {
        setInstitution(e.target.value);
    }

    return (
        <select
            name="institutions"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 
                    focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleInstitutionChange}>
            {institutions.map((institution) => (
                <option key={institution.id} value={institution.id}>
                    {institution.name}
                </option>
            ))}
        </select>
    );
}

export default ListInstitution;