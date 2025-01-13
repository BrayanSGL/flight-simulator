import { MapContainer, TileLayer } from "react-leaflet";

const Maps = () => {
  return (
    <MapContainer 
      center={[4.570868, -74.297333]} // Coordenadas aproximadas del centro de Colombia
      zoom={6} 
      style={{ height: "400px", width: "623px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
};

export default Maps;
