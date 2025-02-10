'use client';

import "./globals.css";
import { Button } from "../components/ui/button";
import GeoLocationComponent from "@/components/ui/geoLocationComponent";
export default function Home() {
  return (
  <>
  <div className="flex justify-center items-center h-screen">
  <Button size={'xl'}>am i free</Button>
  <GeoLocationComponent />
  </div>
  </>
  );
}
