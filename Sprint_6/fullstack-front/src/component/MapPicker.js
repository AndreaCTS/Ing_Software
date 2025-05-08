import React, { useRef, useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";


import "leaflet/dist/images/marker-icon.png";
import "leaflet/dist/images/marker-shadow.png";

export default function MapPicker({ updateLocation }) {
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  useEffect(() => {
    // Crear un nuevo mapa
    console.log("updateLocation function:", updateLocation);
    const mapOptions = {
      center: [4.660813355287014, -74.05970787473106],
      zoom: 20
    };

    const map = L.map(mapRef.current, mapOptions);

    // Agregar una capa de mapa
    const layer = new L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");
    map.addLayer(layer);

    const customIcon = new L.Icon({
      iconUrl: "/handcuffs.svg",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
    });

    // Manejar clics en el mapa
    map.on("click", (event) => {
      // Eliminar el marcador existente si hay uno
      if (markerRef.current !== null) {
        map.removeLayer(markerRef.current);
      }

      // Crear un nuevo marcador en la ubicación del clic
      const marker = L.marker([event.latlng.lat, event.latlng.lng], { icon: customIcon }).addTo(map);
      updateLocation(event.latlng.lat, event.latlng.lng);

      // Actualizar los valores de latitud y longitud en los campos (simulado)
      // Esto debería ser manejado por el componente padre a través de una función prop
      console.log("Latitude:", event.latlng.lat);
      console.log("Longitude:", event.latlng.lng);

      // Guardar la referencia al marcador para futuras interacciones
      markerRef.current = marker;
    });

    // Limpiar el mapa y el marcador al desmontar el componente
    return () => {
      if (map) {
        map.remove();
      }
    };
  }, []); // Solo se ejecuta una vez al montar el componente

  return <div ref={mapRef} style={{ height: "400px", width: "100%",  marginTop: "-100px"}}></div>;
}
