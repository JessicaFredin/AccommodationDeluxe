// eslint-disable-next-line no-unused-vars
import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
const containerStyle = {
	width: "85%",
	height: "500px",
};

	
const center = {
	lat: 36.50728, // Latitude för Marbella
	lng: -4.88272, // Longitude för Marbella
};

function Map() {
	return (
		<LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
			<GoogleMap
				mapContainerStyle={containerStyle}
				center={center}
				zoom={14}
			>
				<Marker position={center} />
			</GoogleMap>
		</LoadScript>
	);
}

export default Map;
