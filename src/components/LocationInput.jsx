/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

function LocationInput(props) {
	const sizeClasses = {
		mainSearch: "w-[230px] h-[50px]",
		airportTransferSearch: "w-[250px] h-[45px]",
	};

	return (
		<div
			className={`${
				sizeClasses[props.size]
			} flex items-center justify-between p-4 bg-white rounded-lg border cursor-pointer`}
		>
			<FontAwesomeIcon
				icon={faMapMarkerAlt}
				className="mr-2 text-black"
			/>
			<input
				type="text"
				className="w-full focus:outline-none bg-transparent"
				placeholder={props.placeholder}
				onChange={props.onChange}
				value={props.value}
			/>
		</div>
	);
}



export default LocationInput;

// Props validation
LocationInput.propTypes = {
	placeholder: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
};




