import React, { useEffect, useState } from 'react';
import { point, booleanPointInPolygon, booleanPointOnLine } from '@turf/turf';
import berlinGeoJSON from '../../app/data/berlinboundries.geojson'; // Adjust the path
import wallGeoJSON from '../../app/data/berlinwall.geojson'; // Adjust the path

interface LocationCheckerProps {
  userCoordinates: [number, number]; // [longitude, latitude]
}

const LocationChecker: React.FC<LocationCheckerProps> = ({ userCoordinates }) => {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    const userPoint = point(userCoordinates);
    const berlinPolygon = berlinGeoJSON.features[0].geometry.coordinates[0]; // Adjust based on your GeoJSON structure
    const wallLine = wallGeoJSON.features[0].geometry.coordinates; // Adjust based on your GeoJSON structure

    const isInBerlin = booleanPointInPolygon(userPoint, berlinPolygon);
    const isOnWall = booleanPointOnLine(wallLine, userPoint, { units: 'meters' });

    if (isInBerlin) {
      if (isOnWall) {
        setMessage('You are right at the border.');
      } else {
        // Additional logic to determine if it's East or West Berlin
        // You may need to define East and West Berlin polygons separately.
        setMessage('You are located in former West Berlin.');
      }
    } else {
      setMessage('You are located outside the city of Berlin.');
    }
  }, [userCoordinates]);

  return (
    <div className="p-4 bg-gray-200 rounded">
      <h2 className="text-lg font-bold">Location Status</h2>
      <p>{message}</p>
    </div>
  );
};

export default LocationChecker;