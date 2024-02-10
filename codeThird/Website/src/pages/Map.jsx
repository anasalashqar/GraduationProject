import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";
import React, { useState } from "react";
import "./Map.css";
import { DUMMY_TEXT } from "../store/Dummy";
import Window from "./Window";

function Map() {
  const [ActiveInfoWindow, setActiveInfoWindow] = useState(false);

  return (
    <div>
      <GoogleMap
        zoom={14}
        center={{ lat: 21.32599, lng: 39.950 }}
        mapContainerClassName="map-container"
      >
        {DUMMY_TEXT.map((st) => (
          <Marker
            position={{ lat: st.lat, lng: st.lng }}
            onClick={() => setActiveInfoWindow(true)}
          >
            {ActiveInfoWindow ? (
              <InfoWindow

                position={{ lat: st.lat, lng: st.lng }}
                onCloseClick={() => setActiveInfoWindow(false)}
              >
                <div>
                  <Window name={st.name} id={st.id} temp={st.temp} heart={st.heartbeats}/>
                </div>
              </InfoWindow>
            ) : null}
          </Marker>
        ))}
      </GoogleMap>
    </div>
  );
}

export default Map;
