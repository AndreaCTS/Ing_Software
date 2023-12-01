import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoibGF1bW9yZW5vMjMiLCJhIjoiY2xwbTFtM3llMDUxNDJtcXR4dWNwaHF1ZSJ9.dhVY_TMql4gErBWLFzpB_Q';


const bogotaPoints = [
  [-74.070332, 4.60971], 
  [-74.072092, 4.59808], 
  [-74.062946, 4.672791], 
  [-74.063941, 4.640803] 
];

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v12',
  center: [-74.076043, 4.60971], 
  zoom: 12
});

map.on('load', () => {
  map.addSource('route', {
    'type': 'geojson',
    'data': {
      'type': 'Feature',
      'properties': {},
      'geometry': {
        'type': 'LineString',
        'coordinates': bogotaPoints
      }
    }
  });

  map.addLayer({
    'id': 'route',
    'type': 'line',
    'source': 'route',
    'layout': {
      'line-join': 'round',
      'line-cap': 'round'
    },
    'paint': {
      'line-color': '#888',
      'line-width': 8
    }
  });
});
