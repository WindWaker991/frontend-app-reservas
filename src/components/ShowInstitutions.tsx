'use client'
import { Institution } from '@/config/interfaces';
import { useInstitutionContext } from '@/context/InstitutionContext';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

const ShowInstitutions: React.FC = () => {
    const { filterInstitutions, institutions, setFilterInstitutions, setSelectedInstitution } = useInstitutionContext();
    const router = useRouter();

    useEffect(() => {
        setFilterInstitutions(institutions);
    }, [institutions]);

    function handleInstitutionClick(institution: Institution) {
        setSelectedInstitution(institution);
        router.push("/home/sector/" + institution.id)
    }
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                <h2 className="text-2xl font-bold text-gray-900">Instituciones</h2>

                <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                    {
                        filterInstitutions.map((institution) => (
                            <div className="group relative">
                                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Santiago_Bernabeu_Stadium_-_panoramio.jpg/1200px-Santiago_Bernabeu_Stadium_-_panoramio.jpg"
                                        alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                                        className="h-full w-full object-cover object-center"
                                    ></img>
                                </div>
                                <h3 className="mt-6 text-sm text-gray-500">
                                    <button
                                        onClick={() => handleInstitutionClick(institution)}
                                    >
                                        <span className="absolute inset-0"></span>
                                    </button>
                                </h3>
                                <p className="text-base font-semibold text-gray-900">
                                    {institution.name}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ShowInstitutions