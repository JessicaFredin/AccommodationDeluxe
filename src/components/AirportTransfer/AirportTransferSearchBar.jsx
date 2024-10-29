/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import LocationInput from "../LocationInput";
import DateSelection from "./DateSelection";
import TimeSelection from "./TimeSelection";
import PassengerSelection from "./PassengerSelection";
import Button from "../Button";
import dayjs from "dayjs";

// Komponent för att söka flygplatstransfer med enkel eller returresa
function AirportTransferSearchBar({ onSearch }) {
	const [isReturn, setIsReturn] = useState(false); // Return eller enkel resa
	const [searchData, setSearchData] = useState({
		fromLocation: "", // Start address
		toLocation: "", // Destination address
		date: dayjs().format("YYYY-MM-DD"),
		time: "00:00",
		passengers: 1,
	});

	const [returnData, setReturnData] = useState({
		fromLocation: "",
		toLocation: "",
		date: dayjs().format("YYYY-MM-DD"),
		time: "00:00",
		passengers: 1,
	});

	// Hanterar val av resans typ (enkel eller retur)
	const handleTripTypeChange = (event) => {
		setIsReturn(event.target.value === "return");
	};

	// Skickar sökdata till parent-komponent
	const handleSearch = () => {
		onSearch(searchData, isReturn ? returnData : null);
	};

	return (
		<div className="p-6 bg-secondaryLightBlue border border-accentPink shadow-lg rounded-lg w-[1200px] mx-auto">
			{/* Radioknappar för att välja enkel eller returresa */}
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

			{/* Inmatningsfält för enkel eller returresa */}
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
					{/* Val för datum/tid */}
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
					{/* Val av antal passagerare */}
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
						//sökknapp för enkelresa
						<Button
							size={"large"}
							buttonText={"Search"}
							onClick={handleSearch}
						/>
					)}
				</div>
				{/* Fält för returresa, om valt */}
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
