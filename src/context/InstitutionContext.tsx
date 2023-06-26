'use client';
import { Institution } from "@/config/interfaces";
import React from "react";
import { ReactNode, createContext, useState } from "react";

type InstitutionContextType = {
    institutions: Institution[];
    setInstitutions: (institution: Institution[]) => void;
    selectedInstitution: Institution | undefined;
    setSelectedInstitution: (institution: Institution) => void;
    filterInstitutions: Institution[];
    setFilterInstitutions: (institution: Institution[]) => void;
};

export const InstitutionContext = createContext<InstitutionContextType | null>(null);

export default function InstitutionContextProvider({
    children,
}: {
    children: ReactNode;

}) {
    const [institutions, setInstitutions] = useState<Institution[]>([]);
    const [selectedInstitution, setSelectedInstitution] = useState<Institution>();
    const [filterInstitutions, setFilterInstitutions] = useState<Institution[]>([]);
    return (
        <InstitutionContext.Provider value={{
            institutions, setInstitutions, selectedInstitution, setSelectedInstitution,
            filterInstitutions, setFilterInstitutions
        }}>
            {children}
        </InstitutionContext.Provider>
    );
};

export const useInstitutionContext = (): InstitutionContextType => {
    const context = React.useContext(InstitutionContext);

    if (!context) {
        throw new Error("useInstitutionContext must be used within a InstitutionContextProvider");
    }

    return context;
};