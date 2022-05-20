import React from 'react';
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api';

const Map = ({ data }) => {
  const mapStyles = {
    height: "50vh",
    width: "100%"
  }

  const defaultCenter = {
    lat: data.lat, lng: data.lng
  }
  return (
    <LoadScript googleMapsApiKey='AIzaSyAYoRB2Pcm-Vtl2FFcn8-H2peqN5tmJy2k'>
    <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={17}
        center={defaultCenter}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  )
}

export default Map;