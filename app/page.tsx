'use client';
import { useState } from "react";
import "./globals.css";
import { Button } from "../components/ui/button";
import GeoLocationComponent from "@/components/ui/userLocation";
import Result from '@/components/ui/result';

export default function Home() {
  const [clicked, setClicked] = useState(false);
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null); // State for user location

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
        <Button size={'default'} onClick={() => setClicked(!clicked)}>am i free</Button>
        {clicked && (
          <GeoLocationComponent setUserLocation={setUserLocation} /> // Pass setUserLocation as prop
        )}
        <Result userLocation={userLocation} /> {/* Pass userLocation to Result */}
      </div>
    </>
  );
}