/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import LocationInput from "../LocationInput";
import DateSelection from "./DateSelection";
import TimeSelection from "./TimeSelection";
import PassengerSelection from "./PassengerSelection";
import Button from "../Button";

function AirportTransferSearchBar({ onSearch }) {
	const [isReturn, setIsReturn] = useState(false); // Return or one-way trip
	const [searchData, setSearchData] = useState({
		fromLocation: "", // Start address
		toLocation: "", // Destination address
		date: "",
		time: "",
		passengers: 1,
	});

	const [returnData, setReturnData] = useState({
		fromLocation: "",
		toLocation: "",
		date: "",
		time: "",
		passengers: 1,
	});

	// Handles the trip type selection
	const handleTripTypeChange = (event) => {
		setIsReturn(event.target.value === "return");
	};

	// Handles the search by sending the data to the parent
	const handleSearch = () => {
		onSearch(searchData, isReturn ? returnData : null);
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
				<div className="flex justify-between items-center space-x-2">
					<LocationInput
						placeholder="Enter the pickup address"
						onChange={(e) =>
							setSearchData({
								...searchData,
								fromLocation: e.target.value,
							})
						}
						value={searchData.fromLocation}
						size="airportTransferSearch"
					/>
					<LocationInput
						placeholder="Enter the drop-off address"
						onChange={(e) =>
							setSearchData({
								...searchData,
								toLocation: e.target.value,
							})
						}
						value={searchData.toLocation}
						size="airportTransferSearch"
					/>
					<DateSelection
						onChange={(date) =>
							setSearchData({ ...searchData, date })
						}
						value={searchData.date}
						size="airportTransferSearch"
					/>
					<TimeSelection
						onTimeSelect={(time) =>
							setSearchData({ ...searchData, time })
						}
						value={searchData.time}
						size="airportTransferSearch"
					/>
					<PassengerSelection
						onSelectPassenger={(passengers) =>
							setSearchData({ ...searchData, passengers })
						}
						value={searchData.passengers}
						size="airportTransferSearch"
					/>
					{isReturn ? (
						<div className="w-[125px] h-[40px]"></div>
					) : (
						<Button
							size={"large"}
							buttonText={"Search"}
							onClick={handleSearch}
						/>
					)}
				</div>

				{isReturn && (
					<div className="flex justify-between items-center space-x-2">
						<LocationInput
							placeholder="Return from"
							onChange={(e) =>
								setReturnData({
									...returnData,
									fromLocation: e.target.value,
								})
							}
							value={returnData.fromLocation}
							size="airportTransferSearch"
						/>
						<LocationInput
							placeholder="Return to"
							onChange={(e) =>
								setReturnData({
									...returnData,
									toLocation: e.target.value,
								})
							}
							value={returnData.toLocation}
							size="airportTransferSearch"
						/>
						<DateSelection
							onChange={(date) =>
								setReturnData({ ...returnData, date })
							}
							value={returnData.date}
							size="airportTransferSearch"
						/>
						<TimeSelection
							onTimeSelect={(time) =>
								setReturnData({ ...returnData, time })
							}
							value={returnData.time}
							size="airportTransferSearch"
						/>
						<PassengerSelection
							onSelectPassenger={(passengers) =>
								setReturnData({ ...returnData, passengers })
							}
							value={returnData.passengers}
							size="airportTransferSearch"
						/>
						<Button
							size={"large"}
							buttonText={"Search"}
							onClick={handleSearch}
						/>
					</div>
				)}
			</div>
		</div>
	);
}

export default AirportTransferSearchBar;
