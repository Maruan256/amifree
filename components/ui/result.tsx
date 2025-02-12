'@ts-nocheck';
'use client';
import React, { useEffect, useState } from 'react';
import { checkCoordinates } from '@/utils/geochecking';

const westberlin = ['Moabit', 'Hansaviertel', 'Märkisches Viertel', 'Tiergarten', 'Wedding', 'Gesundbrunnen', 'Kreuzberg', 'Charlottenburg', 'Wilmersdorf', 'Schmargendorf', 'Grunewald',
    'Westend', 'Charlottenburg-Nord', 'Halensee', 'Spandau', 'Haselhorst', 'Siemensstadt', 'Staaken', 'Gatow', 'Kladow', 'Hakenfelde', 'Falkenhagener Feld', 'Wilhelmstadt', 
    'Steglitz', 'Lichterfelde', 'Lankwitz', 'Zehlendorf', 'Dahlem', 'Nikolassee', 'Wannsee', 'Schöneberg', 'Friedenau', 'Tempelhof', 'Mariendorf', 'Marienfelde', 'Lichtenrade', 'Britz', 
    'Buckow', 'Rudow', 'Gropiusstadt', 'Reinickendorf', 'Tegel', 'Wittenau', 'Neukölln', 'Konradshöhe', 'Heiligensee', 'Frohnau', 'Hermsdorf', 'Waidmannslust', 'Lübars'
];

interface ResultProps {
    userLocation: [number, number] | null; // Add userLocation prop
}

const Result: React.FC<ResultProps> = ({ userLocation }) => {
    const [cityPartNames, setCityPartNames] = useState<string[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [resultGlobal, setResultGlobal] = useState<string>(''); // Use state to hold result

    useEffect(() => {
        const loadGeoJSON = async () => {
            try {
                const response = await fetch('/data/berlinmitvierteln.geojson');
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }
                const geojson = await response.json();

                // Extract city part names
                const names = geojson.features.map((feature: { properties: { name: string } }) => feature.properties.name);
                setCityPartNames(names);

                // Check coordinates after loading geojson only if userLocation is available
                if (userLocation) {
                    const result = checkCoordinates(geojson, westberlin, userLocation);
                    setResultGlobal(result); // Store result in state
                }
            } catch (error) {
                console.error('Error loading GeoJSON:', error);
                setError('Failed to load city part names');
            }
        };

        loadGeoJSON();
    }, [userLocation]); // Dependencies include userLocation

    return (
        <div>
            {error && <p>{error}</p>}
            {cityPartNames.length > 0 ? (
                <div>  
                    <p>{resultGlobal}</p>
                </div> // Display the result
            ) : (
                <p>Loading...</p> // Show loading indicator while fetching
            )}
        </div>
    );
};

export default Result;