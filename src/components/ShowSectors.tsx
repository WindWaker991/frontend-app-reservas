'use client'
import { useInstitutionContext } from '@/context/InstitutionContext';
import React from 'react'

const ShowSectors = () => {
    const { selectedInstitution } = useInstitutionContext();

    return (
        <div>{selectedInstitution?.name}</div>
    )
}

export default ShowSectors;
