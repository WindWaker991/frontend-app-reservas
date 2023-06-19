'use client';
import { Institution } from "@/config/interfaces";
import { Navbar } from "./Navbar";
import { useInstitutionContext } from "@/context/InstitutionContext";
import ShowInstitutions from "./ShowInstitutions";

interface Props {
    institutions: Institution[];
}

const ShowHome: React.FC<Props> = ({ institutions }) => {
    const { setInstitutions, setFilterInstitutions, filterInstitutions } = useInstitutionContext();
    setInstitutions(institutions);
    return (
        <div className="bg-gray-100">
            <Navbar />
            <ShowInstitutions />
        </div>
    );
}
export default ShowHome;