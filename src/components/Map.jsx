import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
  useMap,
} from "react-leaflet";
import { useEffect } from "react";
import L from "leaflet";

const markerIcon = L.icon({
  iconUrl: "/assets/images/icon-location.svg",
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const ChangeView = ({ lat, lng }) => {
  const map = useMap();

  useEffect(() => {
    map.setView([lat, lng], 13);
  }, [lat, lng, map]);

  return null;
};

const Map = ({ lat, lng }) => {
  return (
    <div className="w-full h-full">
      <MapContainer
        center={[lat, lng]}
        zoom={13}
        zoomControl={false}
        scrollWheelZoom={true}
        className="w-full h-full"
      >
        <TileLayer
          attribution="© OpenStreetMap contributors"
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <ChangeView lat={lat} lng={lng} />

        <Marker position={[lat, lng]} icon={markerIcon}>
          <Popup>Your Location</Popup>
        </Marker>

        <ZoomControl position="bottomright" />
      </MapContainer>
    </div>
  );
};

export default Map;
