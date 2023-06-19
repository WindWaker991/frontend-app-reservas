'use client';
import { City } from "@/config/interfaces";
import { useCityContext } from "@/context/CityContext";
import { RegisterForm } from "./RegisterForm";

interface Props {
    cities: City[];
}
export const ShowRegister: React.FC<Props> = ({ cities }) => {
    const { setCities } = useCityContext();

    setCities(cities);

    return (
        <>
            <RegisterForm />
        </>
    )
}
