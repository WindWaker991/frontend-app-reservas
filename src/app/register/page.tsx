import axios from "axios";
import { City } from "@/config/interfaces";
import { ShowRegister } from "@/components/ShowRegister";

async function getCities(): Promise<City[]> {
  const response = await axios.get(process.env.NEXT_PUBLIC_INSTITUTION + "/city");
  return response.data;
}

const Register = async () => {
  const cities: City[] = await getCities();

  return (
    <>
      <ShowRegister
        cities={cities!}
      />
    </>
  )
};

export default Register;
