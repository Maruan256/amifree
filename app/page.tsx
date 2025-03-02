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
        <div className="text-center">
          <h1 className="text-3xl pb-8">Is this East-Berlin or West-Berlin?</h1>
        <p className="text-xl pb-20">Have you ever wondered on which side of the Berlin Wall you are? Well, wonder no more! Here is your answer!</p>
        </div>
        <Button size={'default'} onClick={() => setClicked(!clicked)} className="">is this East-Berlin</Button>
        {clicked && (
          <GeoLocationComponent setUserLocation={setUserLocation} /> 
        )}
        <Result userLocation={userLocation} /> {/* Pass userLocation to Result */}

      <div className="absolute bottom-2 p-2">
        <p className="text-gray-400">created by Benny Blitz©, <a href="mailto:blitzbenny8@gmail.com" className="decoration-transparent text-slate-700">contact</a>  me if you see an Issue, I rarely come to east berlin so my testing capabilities are quite limited ...</p>
      </div>
      </div>
    </>
  );
}