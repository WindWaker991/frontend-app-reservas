import { Navbar } from "@/components/Navbar";
import ShowSectors from "@/components/ShowSectors";
import { Institution } from "@/config/interfaces";
import axios from "axios";

const getSectors = async (id: string) => {
  const res = await axios.get(
    process.env.NEXT_PUBLIC_INSTITUTION + "/institution/" + id
  );
  return res.data;
};
const Page = async ({ params: { id } }: { params: { id: string } }) => {
  const institution: Institution = await getSectors(id.toString());

  return (
    <div className="bg-gray-100 w-screen h-screen">
      <Navbar />
      <ShowSectors institution={institution} />
    </div>
  );
};
export default Page;
