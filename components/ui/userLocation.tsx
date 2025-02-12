'use client'

import React, { useEffect, useState } from 'react';

interface Location {
    latitude: number;
    longitude: number;
}

interface GeoLocationComponentProps {
    setUserLocation: (location:  [number, number] | null) => void; // Prop to update user location
}

const GeoLocationComponent: React.FC<GeoLocationComponentProps> = ({ setUserLocation }) => {
    const [location, setLocation] = useState<Location | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position: GeolocationPosition) => {
                    const { latitude, longitude } = position.coords;
                    setLocation({ latitude, longitude });
                    setUserLocation([longitude, latitude]); // Set user location
                },
                (err: GeolocationPositionError) => {
                    setError(err.message);
                }
            );
        } else {
            setError("Geolocation is not supported by this browser.");
        }
    }, [setUserLocation]);

    return (
        <div>
            {error && <p>Error: {error}</p>}
            {location && (
                <p>
                   
                </p>
            )}
            {!error && !location && <p>Loading location...</p>}
        </div>
    );
};

export default GeoLocationComponent;