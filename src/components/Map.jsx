/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
	width: "85%",
	height: "500px",
};

function Map(props) {
	const center = {
		lat: props.latitude,
		lng: props.longitude,
	};

	return (
		<LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
			<GoogleMap
				mapContainerStyle={containerStyle}
				center={center}
				zoom={props.zoomLevel}
			>
				<Marker
					position={center}
					title={props.marker.title}
					icon={props.marker.iconUrl}
				/>
			</GoogleMap>
		</LoadScript>
	);
}

export default Map;
