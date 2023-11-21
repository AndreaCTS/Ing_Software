// MapView.js
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { MapContainer, TileLayer } from 'react-leaflet';
import ShowCrimes from './ShowCrimes';
import Sidebar from './Sidebarn';
import './Map.css';

function MapView() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showPanel, setShowPanel] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const togglePanel = () => {
    setShowPanel(!showPanel);
  };

  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch(
      'https://raw.githubusercontent.com/OscarMirandaPuentes/Data/main/archivo_modificado_4.json'
    ).then((res) => res.json())
  );

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <div className={`map-container ${sidebarOpen ? 'open' : 'closed'}`}>
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} togglePanel={togglePanel} />
      <MapContainer
        center={[4.660813355287014, -74.05970787473106]}
        zoom={20}
        zoomControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <ShowCrimes data={data} />
      </MapContainer>
    </div>
  );
}

export default MapView;
