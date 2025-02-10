import React, { useEffect, useState } from 'react';

interface Location {
    latitude: number;
    longitude: number;
}

const GeoLocationComponent: React.FC = () => {
    const [location, setLocation] = useState<Location | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position: GeolocationPosition) => {
                    const { latitude, longitude } = position.coords;
                    setLocation({ latitude, longitude });
                },
                (err: GeolocationPositionError) => {
                    setError(err.message);
                }
            );
        } else {
            setError("Geolocation is not supported by this browser.");
        }
    }, []);

    return (
        <div>
            {error && <p>Error: {error}</p>}
            {location && (
                <p>
                    Latitude: {location.latitude}, Longitude: {location.longitude}
                </p>
            )}
            {!error && !location && <p>Loading location...</p>}
        </div>
    );
};

export default GeoLocationComponent;