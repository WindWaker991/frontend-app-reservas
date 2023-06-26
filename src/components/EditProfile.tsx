import { City, User } from "@/config/interfaces";
import axios from "axios";
import { useEffect, useState } from "react";
import ListCities from "./ListCities";

interface Props {
    user: User;
    city: City;
    setUser: (user: User) => void;
}

const EditProfile: React.FC<Props> = ({ user, city, setUser }) => {
    const [auxUser, setAuxUser] = useState<User>(user);
    const [City, setCity] = useState<string>();
    const [auxCity, setAuxCity] = useState<City>(city);

    const handleSaveClick = async () => {
        const token = localStorage.getItem("token");
        const options = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        const response = await axios.patch(
            process.env.NEXT_PUBLIC_USERS + "/auth/updateUser",
            {
                name: auxUser.name,
                city: auxCity.id,
                email: auxUser.email,
                password: user.password,

            },
            options
        );
        setUser(response.data);
    };
    return <>
        <div className="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
            <input type="text" className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150"
                value={auxUser.name}
                onChange={(e) =>
                    setAuxUser({
                        ...auxUser,
                        name: e.target.value,
                    })
                }
            />
            <input type="text" className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150"
                value={auxUser.email}
                onChange={(e) => setAuxUser({
                    ...auxUser,
                    email: e.target.value,
                })
                }
            />
            <div
                className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6"
            >
                <label
                    htmlFor="city"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    City
                    <ListCities />
                </label>

            </div>
            <div className="my-5 px-6">
                <button
                    className="text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white"
                    onClick={handleSaveClick}
                >
                    Guardar <span className="font-bold">datos</span>
                </button>
            </div>
        </div>
    </>
};

export default EditProfile;

