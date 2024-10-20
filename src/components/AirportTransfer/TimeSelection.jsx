/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PropTypes from "prop-types"; // Importing PropTypes
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faClock,
	faChevronDown,
	faChevronUp,
} from "@fortawesome/free-solid-svg-icons";

function TimeSelector(props) {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedTime, setSelectedTime] = useState("00:00");

	// Toggle dropdown
	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	// Handle selecting a time
	const handleTimeSelect = (time) => {
		setSelectedTime(time);
		setIsOpen(false);
		props.onTimeSelect(time); // Using props without destructuring
	};

	// Generate time slots with 30-minute intervals
	const generateTimeSlots = () => {
		const times = [];
		for (let hour = 0; hour < 24; hour++) {
			const formattedHour = hour.toString().padStart(2, "0");
			times.push(`${formattedHour}:00`);
			times.push(`${formattedHour}:30`);
		}
		return times;
	};

	return (
		<div className="relative">
			{/* Time Display Button */}
			<button
				// className="flex items-center justify-between p-4 bg-white rounded-lg border cursor-pointer hover:bg-gray-100 w-full"
				className="flex items-center justify-between p-4 bg-white rounded-lg border cursor-pointer hover:bg-grey w-[150px] h-[45px]"
				onClick={toggleDropdown}
			>
				<FontAwesomeIcon icon={faClock} className="mr-2" />
				<span>{selectedTime}</span>
				<FontAwesomeIcon
					icon={isOpen ? faChevronUp : faChevronDown}
					className="ml-2"
				/>
			</button>

			{/* Dropdown Content */}
			{isOpen && (
				<div className="absolute top-full mt-2 bg-white border rounded-lg shadow-lg z-10 w-[150px] h-[500px] overflow-y-auto">
					<ul className="text-center">
						{generateTimeSlots().map((time, index) => (
							<li
								key={index}
								className="p-2 cursor-pointer hover:bg-accentPink hover:text-white"
								onClick={() => handleTimeSelect(time)}
							>
								{time}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
}

// PropTypes for validation
TimeSelector.propTypes = {
	onTimeSelect: PropTypes.func.isRequired, // Ensure that onTimeSelect is a required function
};

export default TimeSelector;
