/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";


function PhoneNumberSelection({ countryData, onSelectCountry }) {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedCountry, setSelectedCountry] = useState(countryData[0]); 

	// Toggle the dropdown
	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	// Hantera val av land
	const handleSelectCountry = (country) => {
		setSelectedCountry(country);
		onSelectCountry(country); // Anropa funktionen som skickades via props
		setIsOpen(false); // Stäng dropdown efter val
	};

	return (
		<div className="relative">
			<button
				onClick={toggleDropdown}
				className="flex items-center justify-between p-4 bg-[#FFF] rounded-lg border cursor-pointer hover:bg-[#FFF] w-[120px] h-12" 
			>
				<span className="text-lg font-medium">
					{selectedCountry.flag} {selectedCountry.code} 
                    <FontAwesomeIcon
					icon={isOpen ? faChevronUp : faChevronDown}
					className="ml-3 w-3 h-3"
				/>
				</span>
			</button>

			{/* Dropdown content */}
			{isOpen && (
				<div className="absolute top-full mt-2 bg-[#FFF] border rounded-lg shadow-lg z-10 w-[100px]">
					<ul className="text-center">
						{countryData.map((country) => (
							<li
								key={country.code}
								className="p-2 cursor-pointer hover:bg-hoverColorLightPink hover:text-black"
								onClick={() => handleSelectCountry(country)}
							>
								{country.flag} {country.code}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
}

// PropTypes för validering
PhoneNumberSelection.propTypes = {
	countryData: PropTypes.array.isRequired, // Array med landsdata
	onSelectCountry: PropTypes.func.isRequired, // Funktion för val av land
};

export default PhoneNumberSelection;