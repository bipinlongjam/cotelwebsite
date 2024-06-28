
import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import './Map.css'

const containerStyle = {
    width: '800px',
    height: '500px',
    margin: 'auto',  
    marginTop:'5px',
    marginBottom:"30px",
    borderRadius:"10px"
  };

const center = {
  lat: -34.397,
  lng: 150.644,
};

const Map = () => {
    const [map, setMap] = useState(null);
    const [infoWindowOpen, setInfoWindowOpen] = useState(false);
    const [markerPosition, setMarkerPosition] = useState(null);
  
    const onLoad = mapInstance => {
      setMap(mapInstance);
      navigator.geolocation.getCurrentPosition(
        position => {
          const currentPosition = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setMarkerPosition(currentPosition);
          mapInstance.panTo(currentPosition);
        },
        err => console.error('Error getting current location:', err),
        { enableHighAccuracy: true }
      );
    };
  
    return (
        <div className='map-container'>
            <h2>Find Your Cotel</h2>
      <LoadScript
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY} // Replace with your Google Maps API key
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={8}
          onLoad={onLoad}
        >
          {markerPosition && (
            <Marker
              position={markerPosition}
              onClick={() => setInfoWindowOpen(!infoWindowOpen)}
            >
              {infoWindowOpen && (
                <InfoWindow onCloseClick={() => setInfoWindowOpen(false)}>
                  <div>
                    <h3>Your Current Location</h3>
                    <p>Lat: {markerPosition.lat}</p>
                    <p>Lng: {markerPosition.lng}</p>
                  </div>
                </InfoWindow>
              )}
            </Marker>
          )}
        </GoogleMap>
      </LoadScript>
      </div>
  );
};

export default Map;
