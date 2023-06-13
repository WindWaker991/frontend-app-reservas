import { City, User } from "@/config/interfaces";

interface Props {
    user: User;
    city: City;
}

const ShowProfile: React.FC<Props> = ({ user, city}) => {
    return <>
    <div className="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
                  
            <p className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
            <img
                src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                alt=""
                className="rounded-full h-6 shadow-md inline-block mr-2"
            ></img>
            {user?.email}
            </p>

            <p className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
            <img
                src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                alt=""
                className="rounded-full h-6 shadow-md inline-block mr-2"
            ></img>
            {city?.name}
            </p>
        </div>
    </>
};

export default ShowProfile;