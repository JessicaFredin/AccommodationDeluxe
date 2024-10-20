// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
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

function SearchBar({
	onSearch,
	initialLocation,
	initialStartDate,
	initialEndDate,
	initialAdults,
	initialChildren,
	initialRooms,
}) {
	// Initialize state with initial props
	const [location, setLocation] = useState(initialLocation);
	const [startDate, setStartDate] = useState(initialStartDate);
	const [endDate, setEndDate] = useState(initialEndDate);
	const [adults, setAdults] = useState(initialAdults);
	const [children, setChildren] = useState(initialChildren);
	const [rooms, setRooms] = useState(initialRooms);

	const { hotels } = useHotelData(); // Get the hotel data from the context

	// State to toggle the visibility
	const [isCalendarOpen, setIsCalendarOpen] = useState(false);
	const [isGuestSelectorOpen, setIsGuestSelectorOpen] = useState(false);

	const [locationSuggestions, setLocationSuggestions] = useState([]);



	// Toggle function for showing/hiding
	const toggleGuestSelector = () => {
		setIsGuestSelectorOpen(!isGuestSelectorOpen);
	};
	const toggleCalendar = () => {
		setIsCalendarOpen(!isCalendarOpen);
	};

	// Handle Apply button click inside the CustomCalendar
	const handleApply = (selectedStartDate, selectedEndDate) => {
		setStartDate(selectedStartDate);
		setEndDate(selectedEndDate);
		setIsCalendarOpen(false); // Close the calendar after applying the date
	};

	// Handle location input change and show suggestions
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

	// Handle location selection from dropdown
	const handleLocationSelect = (suggestion) => {
		setLocation(suggestion);
		setLocationSuggestions([]); // Clear suggestions after selecting
	};

	const navigate = useNavigate();

	// Handle search button click
	const handleSearch = () => {
		if (
			!location ||
			!startDate ||
			!endDate ||
			adults === 0 ||
			rooms === 0
		) {
			alert("Please fill in all fields before searching.");
			return;
		}

		// Construct the search query with all relevant parameters
		const params = new URLSearchParams({
			location,
			checkin: dayjs(startDate).format("YYYY-MM-DD"),
			checkout: dayjs(endDate).format("YYYY-MM-DD"),
			adults: adults.toString(),
			children: children.toString(),
			rooms: rooms.toString(),
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

		// Pass the search results to the parent component with all the filter data
		if (typeof onSearch === "function") {
			onSearch({
				results,
				startDate,
				endDate,
				adults,
				children,
				rooms,
			});
		}

		// Navigate to the same /hotels page with query params
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
						{`${adults} adult${
							adults > 1 ? "s" : ""
						}, ${children} child${
							children > 1 ? "ren" : ""
						}, ${rooms} room${rooms > 1 ? "s" : ""}`}
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
};

// Set default props with dynamic dates
SearchBar.defaultProps = {
	initialLocation: "",
	initialStartDate: dayjs().format("YYYY-MM-DD"), // Today's date
	initialEndDate: dayjs().add(1, "day").format("YYYY-MM-DD"), // Tomorrow's date
	initialAdults: 2,
	initialChildren: 0,
	initialRooms: 1,
};
