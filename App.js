mapboxgl.accessToken = 'pk.eyJ1IjoibGF1bW9yZW5vMjMiLCJhIjoiY2xwbTFtM3llMDUxNDJtcXR4dWNwaHF1ZSJ9.dhVY_TMql4gErBWLFzpB_Q';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12', 
    center: [-74.5, 40], 
    zoom: 9 
});

map.addControl(new mapboxgl.NavigationControl());
