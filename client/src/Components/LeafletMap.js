import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS (required)

const LeafletMap = () => {
  return (
    <MapContainer
      center={[51.505, -0.09]} // Initial map center (latitude, longitude)
      zoom={13} // Initial zoom level
      style={{ height: '400px', width: '100%' }} // Set map height and width
    >
      {/* Add tile layer */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // Use OpenStreetMap tiles
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' // Attribution
      />

      {/* Add marker */}
      <Marker position={[51.505, -0.09]}> {/* Marker position (latitude, longitude) */}
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default LeafletMap;
