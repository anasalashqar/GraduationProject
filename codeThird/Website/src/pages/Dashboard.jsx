import { useLoadScript } from "@react-google-maps/api";
import React from "react";
import Map from "./Map";


const Dashboard = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCg3uB0X0qyewPQjVhSPMoFMeZ_vEohXb0",
  });

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return <div>
    <Map />
  </div>;
};

export default Dashboard;
