import 'leaflet/dist/leaflet.css';
import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { useLocation } from 'react-router-dom'; // Import useLocation here

const Maps = () => {
  const { state } = useLocation(); // Access state from useLocation
  const { sourceLocation, destinationLocation } = state || {};

  if (!sourceLocation || !destinationLocation) {
    return <p>Source or destination location is missing or invalid.</p>;
  }

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the Earth in km
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance.toFixed(2);
  };

  const distance = calculateDistance(
    sourceLocation.lat,
    sourceLocation.long,
    destinationLocation.lat,
    destinationLocation.long
  );

  return (
    <div>
      <MapContainer
        center={[sourceLocation.lat, sourceLocation.long]}
        zoom={13}
        style={{ height: '500px', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[sourceLocation.lat, sourceLocation.long]}>
          <Popup>Source Location</Popup>
        </Marker>
        <Marker position={[destinationLocation.lat, destinationLocation.long]}>
          <Popup>Destination Location</Popup>
        </Marker>
      </MapContainer>
      <p>Distance between locations: {distance} km</p>
    </div>
  );
};

export default Maps;
