
import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

function MapUpdater({ coordinates }) {
  const map = useMap();

  useEffect(() => {
    map.setView(coordinates, map.getZoom());
  }, [coordinates, map]);

  return null;
}

export default function Map({ coordinates }) {
  // Coordinates for the center of the map [Latitude, Longitude]
  const currentPosition = coordinates;
  return (
    <div className="h-[600px] w-full">
      <MapContainer
        center={currentPosition}
        zoom={13}
        scrollWheelZoom={true}
        className="h-full w-full"
      >
        <MapUpdater coordinates={currentPosition} />

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={currentPosition}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}