// // /* eslint-disable no-undef */
// // // /* eslint-disable no-unused-vars */
// // // import React, { useState } from "react";
// // // import PropTypes from "prop-types";
// // // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // // import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
// // // import { useHotelData } from "../../contexts/HotelDataContext";

// // // function PhoneNumberSelection({ countryData, onSelectCountry }) {
// // // 	const [isOpen, setIsOpen] = useState(false);
// // // 	const [selectedCountry, setSelectedCountry] = useState(countryData[0]);


// // // 	const { hotels, error } = useHotelData(); // Hämtar den fullständiga listan av hotell från kontext

// // // 	if (!hotels || hotels.length === 0) {
// // // 		return <p>Loading hotels...</p>;
// // // 	}

// // // 	if (error) {
// // // 		return <p>Error loading hotels: {error.message}</p>;
// // // 	}




// // // 	// Toggle the dropdown
// // // 	const toggleDropdown = () => {
// // // 		setIsOpen(!isOpen);
// // // 	};

// // // 	// Hantera val av land
// // // 	const handleSelectCountry = (country) => {
// // // 		setSelectedCountry(country);
// // // 		onSelectCountry(country); // Anropa funktionen som skickades via props
// // // 		setIsOpen(false); // Stäng dropdown efter val
// // // 	};

// // // 	return (
// // // 		<div className="relative">
// // // 			<button
// // // 				onClick={toggleDropdown}
// // // 				className="flex items-center justify-between p-4 bg-[#FFF] rounded-lg border cursor-pointer hover:bg-[#FFF] w-[120px] h-12"
// // // 			>
// // // 				<span className="text-lg font-medium">
// // // 					{selectedCountry.flag} {selectedCountry.code}
// // //                     <FontAwesomeIcon
// // // 					icon={isOpen ? faChevronUp : faChevronDown}
// // // 					className="ml-3 w-3 h-3"
// // // 				/>
// // // 				</span>
// // // 			</button>

// // // 			{/* Dropdown content */}
// // // 			{isOpen && (
// // // 				<div className="absolute top-full mt-2 bg-[#FFF] border rounded-lg shadow-lg z-50 w-[100px]">
// // // 					<ul className="text-center">
// // // 						{countryData.map((country) => (
// // // 							<li
// // // 								key={country.code}
// // // 								className="p-2 cursor-pointer hover:bg-hoverColorLightPink hover:text-black"
// // // 								onClick={() => handleSelectCountry(country)}
// // // 							>
// // // 								{country.flag} {country.code}
// // // 							</li>
// // // 						))}
// // // 					</ul>
// // // 				</div>
// // // 			)}
// // // 		</div>
// // // 	);
// // // }

// // // // PropTypes för validering
// // // PhoneNumberSelection.propTypes = {
// // // 	countryData: PropTypes.array.isRequired, // Array med landsdata
// // // 	onSelectCountry: PropTypes.func.isRequired, // Funktion för val av land
// // // };

// // // export default PhoneNumberSelection;





// // /* eslint-disable no-unused-vars */
// // import React, { useState } from "react";
// // import PropTypes from "prop-types";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
// // import { useHotelData } from "../../contexts/HotelDataContext";

// // function PhoneNumberSelection({ onSelectCountry }) {
// // 	const { countries } = useHotelData(); // Access countries from context
// // 	const [isOpen, setIsOpen] = useState(false);
// // 	const [selectedCountry, setSelectedCountry] = useState();


// // 	// Toggle the dropdown
// // 	const toggleDropdown = (e) => {
// // 		e.preventDefault(); // Prevent the default behavior
// // 		e.stopPropagation(); // Stop the event from propagating (bubbling up)
// // 		setIsOpen(!isOpen);
// // 	};

// // 	// Handle country selection
// // 	const handleSelectCountry = (country) => {
// // 		setSelectedCountry(country);
// // 		onSelectCountry(country);
// // 		setIsOpen(false);
// // 	};

// // 	return (
// // 		<div className="relative">
// // 			<button
// // 				onClick={toggleDropdown}
// // 				className="flex items-center justify-between p-4 bg-white rounded-lg border cursor-pointer w-[120px] h-12"
// // 				type="button" // Ensure it's a button, not submitting the form
// // 			>
// // 				<span className="text-lg font-medium">
// // 					{selectedCountry.flag} {selectedCountry.code}
// // 				</span>
// // 				<FontAwesomeIcon
// // 					icon={isOpen ? faChevronUp : faChevronDown}
// // 					className="ml-3 w-3 h-3"
// // 				/>
// // 			</button>
// // 			{isOpen && (
// // 				<div className="absolute top-full mt-2 bg-white border rounded-lg shadow-lg z-50 w-[120px]">
					
// // 					<select
// // 						onChange={(e) =>
// // 							onSelectCountry(countries[e.target.selectedIndex])
// // 						}
// // 					>
// // 						{countries.map((country, index) => (
// // 							<option key={index} value={country.code}>
// // 								{country.flag} {country.code}
// // 							</option>
// // 						))}
// // 					</select>

// // 					{/* <ul className="text-center">
// // 						{countryData.map((country) => (
// // 							<li
// // 								key={country.code}
// // 								className="p-2 cursor-pointer hover:bg-gray-100"
// // 								onClick={() => handleSelectCountry(country)}
// // 							>
// // 								{country.flag} {country.code}
// // 							</li>
// // 						))}
// // 					</ul> */}
// // 				</div>
// // 			)}
// // 		</div>
// // 	);
// // }

// // PhoneNumberSelection.propTypes = {
// // 	countryData: PropTypes.array.isRequired,
// // 	onSelectCountry: PropTypes.func.isRequired,
// // };

// // export default PhoneNumberSelection;















// /* eslint-disable no-unused-vars */
// import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
// import { useHotelData } from "../../contexts/HotelDataContext";

// function PhoneNumberSelection({ onSelectCountry }) {
// 	const { countries } = useHotelData(); // Access countries from context
// 	const [isOpen, setIsOpen] = useState(false);
// 	const [selectedCountry, setSelectedCountry] = useState(null);

// 	// Initialize the first country as the default selection when countries are loaded
// 	useEffect(() => {
// 		if (countries.length > 0) {
// 			setSelectedCountry(countries[0]);
// 			onSelectCountry(countries[0]); // Set the initial selected country in parent component
// 		}
// 	}, [countries, onSelectCountry]);

// 	// Toggle the dropdown
// 	const toggleDropdown = (e) => {
// 		e.preventDefault(); // Prevent default behavior
// 		e.stopPropagation(); // Stop event from bubbling up
// 		setIsOpen(!isOpen);
// 	};

// 	// Handle country selection
// 	const handleSelectCountry = (country) => {
// 		setSelectedCountry(country);
// 		onSelectCountry(country);
// 		setIsOpen(false); // Close dropdown after selection
// 	};

// 	return (
// 		<div className="relative">
// 			<button
// 				onClick={toggleDropdown}
// 				className="flex items-center justify-between p-4 bg-white rounded-lg border cursor-pointer w-[120px] h-12"
// 				type="button" // Ensure it's a button, not submitting the form
// 			>
// 				<span className="text-lg font-medium">
// 					{/* If selectedCountry exists, show the flag and code */}
// 					{selectedCountry ? `${selectedCountry.flag} ${selectedCountry.code}` : "Select"}
// 				</span>
// 				<FontAwesomeIcon
// 					icon={isOpen ? faChevronUp : faChevronDown}
// 					className="ml-3 w-3 h-3"
// 				/>
// 			</button>

// 			{/* Dropdown content */}
// 			{isOpen && (
// 				<div className="absolute top-full mt-2 bg-white border rounded-lg shadow-lg z-50 w-[120px]">
// 					<ul className="text-center">
// 						{countries.map((country, index) => (
// 							<li
// 								key={index}
// 								className="p-2 cursor-pointer hover:bg-gray-100"
// 								onClick={() => handleSelectCountry(country)}
// 							>
// 								{country.flag} {country.code}
// 							</li>
// 						))}
// 					</ul>
// 				</div>
// 			)}
// 		</div>
// 	);
// }

// PhoneNumberSelection.propTypes = {
// 	onSelectCountry: PropTypes.func.isRequired, // Remove unnecessary countryData prop
// };

// export default PhoneNumberSelection;
















/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useHotelData } from "../../contexts/HotelDataContext";

function PhoneNumberSelection({ onSelectCountry }) {
	const { countries } = useHotelData(); // Access countries from context
	const [isOpen, setIsOpen] = useState(false);
	const [selectedCountry, setSelectedCountry] = useState(null);

	// useEffect(() => {
	// 	console.log("Countries:", countries); // Add this to check the data
	// 	if (countries && countries.length > 0) {
	// 		setSelectedCountry(countries[0]);
	// 		onSelectCountry(countries[0]);
	// 	}
	// }, [countries, onSelectCountry]);



	useEffect(() => {
		console.log("Countries:", countries);
		if (countries && countries.length > 0 && !selectedCountry) {
			setSelectedCountry(countries[0]);
			onSelectCountry(countries[0]);
		}
	}, [countries, selectedCountry, onSelectCountry]);



	// Toggle the dropdown
	const toggleDropdown = () => {
		setIsOpen((prev) => !prev);
	};


	const handleSelectCountry = (country, e) => {
		console.log("Country selected:", country); // Debugging log
		setSelectedCountry(country);
		onSelectCountry(country);
		setIsOpen(false); // Close the dropdown
	};



	return (
		<div className="relative">
			<button
				onClick={toggleDropdown}
				className="flex items-center justify-between p-4 bg-white rounded-lg border cursor-pointer w-[120px] h-12"
				type="button"
			>
				<span className="text-lg font-medium">
					{/* Display selected country's flag and code */}
					{selectedCountry ? `${selectedCountry.flag} ${selectedCountry.code}` : "Select"}
				</span>
				<FontAwesomeIcon
					icon={isOpen ? faChevronUp : faChevronDown}
					className="ml-3 w-3 h-3"
				/>
			</button>

			{/* Dropdown content */}
			{isOpen && (
				<div className="absolute top-full mt-2 bg-white border rounded-lg shadow-lg z-50 w-[120px]" >
					<ul className="text-center">
						{countries.map((country, index) => (
							<li
								key={index}
								className="p-2 cursor-pointer hover:bg-gray-100"
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

PhoneNumberSelection.propTypes = {
	onSelectCountry: PropTypes.func.isRequired, // Remove unnecessary countryData prop
};

export default PhoneNumberSelection;
