'use client';

import { City } from "@/config/interfaces";
import React from "react";
import { createContext, useState } from "react";

type CityContextType = {
    cities: City[];
    setCities: (cities: City[]) => void;
};

export const CityContext = createContext<CityContextType | null>(null);

export const CityContextProvider = ({ children }) => {
    const [cities, setCities] = useState<City[]>([]);

    return (
        <CityContext.Provider value={{ cities, setCities }}>
            {children}
        </CityContext.Provider>
    );
};

export const useCityContext = (): CityContextType => {
    const context = React.useContext(CityContext);

    if (!context) {
        throw new Error("useCityContext must be used within a CityContextProvider");
    }

    return context;
};