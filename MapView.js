import React from "react";
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import L from "leaflet";
import 'leaflet/dist/leaflet.css';

function GetIcon(_iconSize, forecast) {
    return L.icon({
        iconUrl: require("../Recursos/" + forecast + ".png"),
      iconSize: [_iconSize],
    });
  }


function MapView() {
  const position = [4.66102,-74.05971]
  console.log(position[0])
  const locations = [
    { name: "west", position: [4.662114976546432,-74.0595723553569], size: 40, forecast: "cloudy" },
    { name: "east", position: [4.6601412577470755,-74.057873641972], size: 30, forecast: "cloudy" },
    { name: "north", position: [4.66102,-74.05971], size: 50, forecast: "heavy-rain" },
  ];
  
    return (
    <MapContainer center={position} zoom={20}>
         <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {locations.map((location) => (
       <Marker position={location.position} icon ={GetIcon(location.size, location.forecast)}>
          <Popup>
          {location.name} - {location.forecast}
          </Popup>
        </Marker>
        ))}
    </MapContainer>
    );
};
export default MapView;