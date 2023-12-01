import { MapComponent } from './MapComponent.1';
useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('mapbox://styles/mapbox/streets-v12');
        const data = await response.json();
        setRouteCoordinates(data);
      } catch (error) {
        console.error('Error fetching route coordinates:', error);
      }
    };
  
    fetchData();
  }, []); 