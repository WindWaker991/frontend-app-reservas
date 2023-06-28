'use client'
import { Institution, Sector } from '@/config/interfaces'
import useShowPopup from '@/hooks/useShowPopup';
import React from 'react'
import ShowObjects from './ShowObjects';

interface Props {
    institution: Institution;
}

const ShowSectors: React.FC<Props> = ({ institution }) => {
    const [selectedSector, setSelectedSector] = React.useState<Sector>();
    const { showPopup, handleHidePopup, handleShowPopup } = useShowPopup();

    const handleSelectedSector = (sector: Sector) => {
        setSelectedSector(sector);
        handleShowPopup();
    }

    return (
        <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                    <h1 className="text-2xl font-bold text-gray-900">{institution.name}</h1>
                    <h2 className="text-2xl font-bold text-gray-900">Sectores</h2>

                    <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                        {
                            institution.sectors.map((sector) => (
                                <div className="group relative" onClick={
                                    () => handleSelectedSector(sector)
                                }>
                                    <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Santiago_Bernabeu_Stadium_-_panoramio.jpg/1200px-Santiago_Bernabeu_Stadium_-_panoramio.jpg"
                                            alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                                            className="h-full w-full object-cover object-center"
                                        ></img>
                                    </div>
                                    <h3 className="mt-6 text-sm text-gray-500">

                                    </h3>
                                    <p className="text-base font-semibold text-gray-900">
                                        {sector.name}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>
            {
                selectedSector && showPopup && (
                    <ShowObjects selectedSector={selectedSector}
                        handleHidePopup={handleHidePopup} />

                )
            }
        </>
    )
}

export default ShowSectors;
