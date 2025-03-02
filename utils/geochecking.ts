import * as turf from '@turf/turf';

interface FeatureCollection {
    type: string;
    features: Feature[];
}

interface Feature {
    type: string;
    properties: {
        name: string;
    };
    geometry: {
        type: string;
        coordinates: number[][][][];
    };
}

export function checkCoordinates(
    geoJson: FeatureCollection,
    westberlin: string[],
    coordinates: [number, number]
): string {
    const point = turf.point(coordinates);

    let isInWestBerlin = false;
    let isInOtherBoundary = false;

    for (const feature of geoJson.features) {
        const polygon = turf.multiPolygon(feature.geometry.coordinates);
        
        if (turf.booleanPointInPolygon(point, polygon)) {
            if (westberlin.includes(feature.properties.name)) {
                isInWestBerlin = true;
                break; // Exit loop if found in westberlin
            } else {
                isInOtherBoundary = true; // Found in other boundary
            }
        }
    }

    if (isInWestBerlin) {
        return 'You are in West-Berlin.';
    }
    
    if (isInOtherBoundary) {
        return 'You are in East-Berlin.';
    }
    
    return 'You are not even in Berlin!!';
}