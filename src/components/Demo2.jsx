import React from "react";
import { MapContainer, TileLayer, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Demo2 = () => {
  const koraCenter = [12.9354717, 77.6234377];
  const sixthmain = [12.9386938, 77.6231503];
  const ejipura = [12.9448232, 77.6222596];
  const zoom = 14;
  return (
    <>
      <div>
        <MapContainer center={koraCenter} zoom={zoom}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Circle
            center={koraCenter}
            stroke={false}
            fillOpacity={0.8}
            radius={200}
            color="magenta"
          />
          <Circle
            center={sixthmain}
            stroke={true}
            opacity={1}
            fillOpacity={0.6}
            radius={200}
            color="blue"
            fillColor="cyan"
            dashArray={12}
          />
          <Circle
            className="circle-magic"
            center={ejipura}
            stroke={false}
            fillOpacity={0.8}
            radius={300}
            color="magenta"
          />
        </MapContainer>
      </div>
    </>
  );
};

export default Demo2;
