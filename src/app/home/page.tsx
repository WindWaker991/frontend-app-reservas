import ShowHome from "@/components/ShowHome";
import { Institution } from "@/config/interfaces";
import axios from "axios";

async function getInstitutions(): Promise<Institution[]> {
  const response = await axios.get(process.env.NEXT_PUBLIC_INSTITUTION + "/institution");
  return response.data;
}
const home = async () => {

  const institutions: Institution[] = await getInstitutions();
  return <>
    <ShowHome
      institutions={institutions!}
    />
  </>
};

export default home;
