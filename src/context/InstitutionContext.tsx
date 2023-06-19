'use client';
import { Institution } from "@/config/interfaces";
import React from "react";
import { createContext, useState } from "react";

type InstitutionContextType = {
    institutions: Institution[];
    setInstitutions: (institution: Institution[]) => void;
    selectedInstitution: string | undefined;
    setSelectedInstitution: (institution: string) => void;
    filterInstitutions: Institution[];
    setFilterInstitutions: (institution: Institution[]) => void;
};

export const InstitutionContext = createContext<InstitutionContextType | null>(null);

export const InstitutionContextProvider = ({ children }) => {
    const [institutions, setInstitutions] = useState<Institution[]>([]);
    const [selectedInstitution, setSelectedInstitution] = useState<string>();
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