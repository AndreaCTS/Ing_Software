import * as React from 'react';
import Map, {NavigationControl, Marker} from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import '../styles/map.css';

function Mapa2() {
  return (
    <div className="mapa">
      
      <Map mapLib={maplibregl} 
        initialViewState={{
          
          longitude: -74.05971,
          latitude: 4.66102,
          zoom: 16
        }}
        style={{width: "100%", height: " calc(110vh - 77px)"}}
        mapStyle="https://api.maptiler.com/maps/streets/style.json?key=MClgpKVRg6152OfJqQN6"
      >
      
      <Marker  longitude = {-74.05971} latitude = {4.66102} color = '#42FE24'/>

      <Marker  longitude = {-74.05805} latitude = {4.66080} color = '#FF0000'/>
      <Marker  longitude = {-74.05958} latitude = {4.66314} color = '#FF0000'/>
      <Marker  longitude = {-74.06128} latitude = {4.65909} color = '#FF0000'/>
      <Marker  longitude = {-74.06056} latitude = {4.66553} color = '#FF0000'/>
      <Marker  longitude = {-74.05619} latitude = {4.66378} color = '#FF0000'/>
      <Marker  longitude = {-74.06338} latitude = {4.66187} color = '#FF0000'/>

      </Map>
    </div>
    
  );
}

export default Mapa2  ;