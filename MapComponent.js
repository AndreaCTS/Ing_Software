import React, { useEffect, useRef, useState } from 'react';

const MapComponent = () => {
  const mapRef = useRef(null);
  const [routeCoordinates, setRouteCoordinates] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/map/coordinates'); // URL según la configuración de tu backend
        const data = await response.json();
        setRouteCoordinates(data);
      } catch (error) {
        console.error('Error fetching route coordinates:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {

    if (routeCoordinates.length === 0) return;


    const map = L.map(mapRef.current).setView([routeCoordinates[0].latitude, routeCoordinates[0].longitude], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    const polyline = L.polyline(routeCoordinates.map(coordinate => [coordinate.latitude, coordinate.longitude]), { color: 'red' }).addTo(map);

    map.fitBounds(polyline.getBounds());
  }, [routeCoordinates]);

  return (
    <div ref={mapRef} style={{ height: '400px' }} />
  );
};

export default MapComponent;
