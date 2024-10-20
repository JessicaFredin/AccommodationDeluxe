/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import LocationInput from "../LocationInput";
import DateSelection from "./DateSelection";
import TimeSelection from "./TimeSelection";
import PassengerSelection from "./PassengerSelection";

import Button from "../Button";

function AirportTransferSearchBar() {
	const [isReturn, setIsReturn] = useState(false);

	const handleTripTypeChange = (event) => {
		setIsReturn(event.target.value === "return");
	};

	return (
		<div className="p-6 bg-secondaryLightBlue border border-accentPink shadow-lg rounded-lg w-[1200px] mx-auto">
			{/* Radio buttons for trip type */}
			<div className="mb-4 flex space-x-4">
				<label className="flex items-center">
					<input
						type="radio"
						name="tripType"
						value="oneway"
						checked={!isReturn}
						onChange={handleTripTypeChange}
						className="mr-2 custom-radio"
					/>
					One way
				</label>

				<label className="flex items-center">
					<input
						type="radio"
						name="tripType"
						value="return"
						checked={isReturn}
						onChange={handleTripTypeChange}
						className="mr-2 custom-radio"
					/>
					Return
				</label>
			</div>

			{/* Input fields for one way or return trip */}
			<div className="space-y-4">
				{/* First trip (always shown) */}
				<div className="flex justify-between items-center space-x-2">
					<LocationInput
						placeholder="Enter the name of the airport?"
						// onChange={(e) => setLocation(e.target.value)}
						// value={location}
						size="airportTransferSearch"
					/>
					<LocationInput
						placeholder="Enter hotel destination"
						// onChange={(e) => setLocation(e.target.value)}
						// value={location}
						size="airportTransferSearch"
					/>
					<DateSelection />
					<TimeSelection />
					<PassengerSelection />
					{/* If is return is selected, show an empty div with the same 
          dimensions of the button, otherwise show the button */}
					{isReturn ? (
						<div className="w-[125px] h-[40px]"></div>
					) : (
						<Button size={"large"} buttonText={"Search"} />
					)}
				</div>

				{/* Second trip (only shown if "Return" is selected) */}
				{isReturn && (
					<div className="flex justify-between items-center space-x-2">
						<LocationInput
							placeholder="Enter the name of the airport"
							size="airportTransferSearch"
						/>
						<LocationInput
							placeholder="Enter hotel destination"
							size="airportTransferSearch"
						/>
						<DateSelection />
						<TimeSelection />
						<PassengerSelection />
						<Button size={"large"} buttonText={"Search"} />
					</div>
				)}
			</div>

			{/* Search button (positioned only at the bottom if Return is selected) */}
		</div>
	);
}

export default AirportTransferSearchBar;
