/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PropTypes from "prop-types"; // Importing PropTypes
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUserGroup,
	faChevronDown,
	faChevronUp,
} from "@fortawesome/free-solid-svg-icons";

function PassengerSelection(props) {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedPassengerCount, setSelectedPassengerCount] = useState(1);

	// Toggle the dropdown
	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	// Handle passenger count selection
	const handleSelectPassenger = (count) => {
		setSelectedPassengerCount(count);
		setIsOpen(false); // Close the dropdown after selection
		props.onSelectPassenger(count); // Use props without destructuring
	};

	return (
		<div className="relative">
			{" "}
			{/* Set container width */}
			{/* Display the selected passenger count */}
			<button
				onClick={toggleDropdown}
				className="flex items-center justify-between p-4 bg-white rounded-lg border cursor-pointer hover:bg-grey w-[180px] h-[45px]" // Adjusted width, padding, and height
			>
				<FontAwesomeIcon icon={faUserGroup} className="mr-2" />
				<span className="truncate">
					Passengers: {selectedPassengerCount}
				</span>
				<FontAwesomeIcon
					icon={isOpen ? faChevronUp : faChevronDown}
					className="ml-2"
				/>
			</button>
			{/* Dropdown content */}
			{isOpen && (
				<div className="absolute top-full mt-2 bg-white border rounded-lg shadow-lg z-10 w-[200px]">
					{" "}
					{/* Fixed width for dropdown */}
					<ul className="text-center">
						{[1, 2, 3, 4, 5].map((count) => (
							<li
								key={count}
								className="p-2 cursor-pointer hover:bg-accentPink hover:text-white"
								onClick={() => handleSelectPassenger(count)}
							>
								{count}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
}

// PropTypes for validation
PassengerSelection.propTypes = {
	onSelectPassenger: PropTypes.func.isRequired, // Ensure that onSelectPassenger is a required function
};

export default PassengerSelection;
