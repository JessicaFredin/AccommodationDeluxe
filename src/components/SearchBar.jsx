// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import GuestSelector from "./GuestSelector";
import CustomCalendar from "./FlexibleSearch/CustomCalendarFlexible";
import dayjs from "dayjs";
import LocationInput from "./LocationInput";
import { useNavigate } from "react-router-dom";
import { useHotelData } from "../contexts/HotelDataContext";
import { useSearchParamsContext } from "../contexts/SearchParamsContext";
function SearchBar({
	onSearch,
	initialLocation,
	initialStartDate,
	initialEndDate,
	initialAdults,
	initialChildren,
	initialRooms,
	initialIsNextToEachOther,
}) {
	//Initierar state med initiala props
	const [location, setLocation] = useState(initialLocation);
	const [startDate, setStartDate] = useState(initialStartDate);
	const [endDate, setEndDate] = useState(initialEndDate);
	const [adults, setAdults] = useState(initialAdults);
	const [children, setChildren] = useState(initialChildren);
	const [rooms, setRooms] = useState(initialRooms);
	const [isNextToEachOther, setIsNextToEachOther] = useState(
		initialIsNextToEachOther
	);
	const { hotels } = useHotelData(); //Hämta hotellinformationen från kontexten
	const { setSearchParams } = useSearchParamsContext(); // Set global search params

	// State för att ändra synlighet
	const [isCalendarOpen, setIsCalendarOpen] = useState(false);
	const [isGuestSelectorOpen, setIsGuestSelectorOpen] = useState(false);

	const [locationSuggestions, setLocationSuggestions] = useState([]);

	// Funktion för att visa/dölja
	const toggleGuestSelector = () => {
		setIsGuestSelectorOpen(!isGuestSelectorOpen);
	};
	const toggleCalendar = () => {
		setIsCalendarOpen(!isCalendarOpen);
	};

	// Funtion för att hantera klick på knappen i CustomCalendar
	const handleApply = (selectedStartDate, selectedEndDate) => {
		setStartDate(selectedStartDate);
		setEndDate(selectedEndDate);
		setIsCalendarOpen(false); // Stänger kalendern efter att ha tillämpat datumet
	};

	//Hanterar ändring i platsinmatningen och visa förslag
	const handleLocationChange = (e) => {
		const inputValue = e.target.value;
		setLocation(inputValue);

		if (inputValue.length > 0) {
			const suggestions = hotels
				.map((hotel) => hotel.location)
				.filter(
					(loc) =>
						loc.country
							.toLowerCase()
							.startsWith(inputValue.toLowerCase()) ||
						loc.city
							.toLowerCase()
							.startsWith(inputValue.toLowerCase())
				);

			setLocationSuggestions([
				...new Set(
					suggestions.map((loc) => `${loc.city}, ${loc.country}`)
				),
			]);
		} else {
			setLocationSuggestions([]);
		}
	};

	// Hantera platsval från dropdown
	const handleLocationSelect = (suggestion) => {
		setLocation(suggestion);
		setLocationSuggestions([]); //Rensar förslag efter val
	};

	const navigate = useNavigate();

	// Funktion för att hantera klick på sökknappen
	const handleSearch = () => {
		//Kontrollerar om något av fälten är tomma eller om vuxna/rum är 0
		if (
			!location ||
			!startDate ||
			!endDate ||
			adults === 0 ||
			rooms === 0
		) {
			{
				/*Om något fält saknas eller har felaktigt värde, visa en varning till användaren*/
			}
			alert("Please fill in all fields before searching.");
			return; // Stoppa vidare exekvering av funktionen om inte alla fälten är korrekt ifyllda
		}

		// Set the global search parameters in context
		setSearchParams({
			location,
			startDate,
			endDate,
			adults,
			children,
			rooms,
			isNextToEachOther,
		});

		// Construct the search query with all relevant parameters
		const params = new URLSearchParams({
			location,
			checkin: dayjs(startDate).format("YYYY-MM-DD"),
			checkout: dayjs(endDate).format("YYYY-MM-DD"),
			adults: adults.toString(),
			children: children.toString(),
			rooms: rooms.toString(),
			isNextToEachOther: isNextToEachOther.toString(),
		});

		const [selectedCity, selectedCountry] = location
			.split(", ")
			.map((s) => s.trim());

		const results = hotels.filter(
			(hotel) =>
				hotel.location.city.toLowerCase() ===
					selectedCity.toLowerCase() &&
				hotel.location.country.toLowerCase() ===
					selectedCountry.toLowerCase()
		);

		//// Skicka sökresultaten till föräldrakomponenten tillsammans med all filterdata
		if (typeof onSearch === "function") {
			onSearch({
				results,
				startDate,
				endDate,
				adults,
				children,
				rooms,
				isNextToEachOther,
			});
		}

		// Navigera till samma /hotels-sida med query-parametrar
		navigate(`/hotels?${params.toString()}`);
	};

	return (
		<div className="bg-secondaryLightBlue p-4 rounded-lg shadow-lg flex justify-between mx-auto max-w-[1400px] px-20 space-x-9 border border-accentPink">
			{/* Location Input */}
			<div className="flex items-center rounded-lg shadow-md relative">
				<LocationInput
					placeholder="Where do you want to go?"
					onChange={handleLocationChange}
					value={location}
					size="mainSearch"
				/>
				{locationSuggestions.length > 0 && (
					<div className="absolute top-full bg-white shadow-md rounded-lg w-full mt-1 z-10">
						{" "}
						{locationSuggestions.map((suggestion, index) => (
							<div
								key={index}
								onClick={() => handleLocationSelect(suggestion)}
								className="p-2 hover:bg-grey cursor-pointer"
							>
								{suggestion}
							</div>
						))}
					</div>
				)}
			</div>
			{/* Check-in / Check-out */}
			<div className="relative">
				<div
					onClick={toggleCalendar}
					className="flex items-center bg-white p-3 rounded-lg shadow-md space-x-3 cursor-pointer"
				>
					<FontAwesomeIcon
						icon={faCalendarAlt}
						className="text-black size-5"
					/>
					<span>
						{startDate && endDate
							? `${dayjs(startDate).format(
									"YYYY-MM-DD"
							  )} - ${dayjs(endDate).format("YYYY-MM-DD")}`
							: "Check-in / check-out"}
					</span>
				</div>

				{/* Conditionally render the Calendar */}
				{isCalendarOpen && (
					<div className="absolute top-12 left-0 z-50">
						<CustomCalendar
							startDate={startDate}
							setStartDate={setStartDate}
							endDate={endDate}
							setEndDate={setEndDate}
							onApply={handleApply} // Pass the apply handler
							closeCalendar={toggleCalendar} // Call to close the calendar
						/>
					</div>
				)}
			</div>
			{/* Guests Input */}
			<div className="relative">
				<div
					onClick={toggleGuestSelector}
					className="flex items-center bg-white p-3 rounded-lg shadow-md space-x-3 cursor-pointer"
				>
					<FontAwesomeIcon
						icon={faUserGroup}
						className="text-black size-5"
					/>
					<span>
						{`${adults} ${
							adults === 1 ? "adult" : "adults"
						}, ${children} ${
							children === 1 ? "child" : "children"
						}, ${rooms} ${rooms === 1 ? "room" : "rooms"}`}
					</span>
				</div>

				{/* Conditionally render the GuestSelector */}
				{isGuestSelectorOpen && (
					<div className="absolute top-12 left-0 z-50">
						<GuestSelector
							adults={adults}
							setAdults={setAdults}
							numChildren={children}
							setChildren={setChildren}
							rooms={rooms}
							setRooms={setRooms}
							isNextToEachOther={isNextToEachOther}
							setIsNextToEachOther={setIsNextToEachOther}
						/>
					</div>
				)}
			</div>

			{/* Search Button */}
			<Button size="large" buttonText={"Search"} onClick={handleSearch} />
		</div>
	);
}

export default SearchBar;

// Add these prop types
SearchBar.propTypes = {
	onSearch: PropTypes.func.isRequired,
	initialLocation: PropTypes.string,
	initialStartDate: PropTypes.string,
	initialEndDate: PropTypes.string,
	initialAdults: PropTypes.number,
	initialChildren: PropTypes.number,
	initialRooms: PropTypes.number,
	initialIsNextToEachOther: PropTypes.number,
};

// Set default props with dynamic dates
SearchBar.defaultProps = {
	initialLocation: "",
	initialStartDate: dayjs().format("YYYY-MM-DD"), // Today's date
	initialEndDate: dayjs().add(1, "day").format("YYYY-MM-DD"), // Tomorrow's date
	initialAdults: 2,
	initialChildren: 0,
	initialRooms: 1,
	initialIsNextToEachOther: 0,
};
