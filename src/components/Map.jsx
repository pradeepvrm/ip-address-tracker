
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

// 1. IMPORTANT: You must import the Leaflet CSS file
import 'leaflet/dist/leaflet.css';

export default function Map() {
  // Coordinates for the center of the map [Latitude, Longitude]
  const position = [51.505, -0.09];

  return (
    <div className="h-[500px] w-full">
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={true}
        className="h-full w-full"
      >
        {/* OpenStreetMap Tile Layer providing the actual map graphics */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}