'use client'
import { useInstitutionContext } from '@/context/InstitutionContext';
import React from 'react'

const ShowSectors = () => {
    const { selectedInstitution } = useInstitutionContext();
    //console.log(selectedInstitution);

    return (
        <div>{selectedInstitution}</div>
    )
}

export default ShowSectors;
