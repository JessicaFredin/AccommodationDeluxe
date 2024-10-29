import React from "react";
import AirportTransferSearchBar from "../AirportTransfer/AirportTransferSearchBar";
import SimpleCarCard from "../AirportTransfer/SimpleCarCard";
import CarAdded from "../AirportTransfer/CarAdded";

function AddOns({
	airportTransferSelected,
	setAirportTransferSelected,
	transferData,
	setTransferData,
	isTransferAdded,
	setIsTransferAdded,
	addedTransferData,
	setAddedTransferData,
}) {
	// Handles the search from AirportTransferSearchBar
	const handleSearch = (oneWayData, returnTripData) => {
		setTransferData({ ...oneWayData, returnTrip: returnTripData });
	};

	// Handles when the user adds the transfer in SimpleCarCard
	const handleAddTransfer = () => {
		setIsTransferAdded(true);
		setAddedTransferData(transferData); // Save transferData to display in CarAdded
		setTransferData(null); // Reset transferData to hide SimpleCarCard
	};

	// Handles when the user removes the transfer in CarAdded
	const handleRemoveTransfer = () => {
		setIsTransferAdded(false);
		setAddedTransferData(null);
		setAirportTransferSelected(false); // Uncheck the checkbox
	};

	return (
		<div>
			<div className="border p-4 h-auto w-full border-lightGrey mx-auto rounded-[10px] shadow-lg overflow-hidden bg-white">
				<div className="p-6 space-y-4">
					<h2 className="text-[24px] font-bold mb-4">
						Add to your stay
					</h2>
					<hr className="border-t border-lightGrey mb-9" />
					<div className="flex items-center">
						<input
							type="checkbox"
							checked={airportTransferSelected}
							onChange={() => {
								setAirportTransferSelected(
									!airportTransferSelected
								);
								setTransferData(null);
								setIsTransferAdded(false);
								setAddedTransferData(null);
							}}
							className="form-checkbox h-5 w-5 accent-accentPink"
						/>
						<span className="flex items-center ml-2">
							<span className="font-medium text-[16px]">
								Airport transfer
							</span>
						</span>
					</div>
					<p className="text-[12px] text-gray-600 mt-2">
						Add hassle-free airport transfers to and from your
						accommodation.
					</p>
				</div>
			</div>

			{/* Show AirportTransferSearchBar when checkbox is checked and no transfer has been added */}
			{airportTransferSelected && !isTransferAdded && !transferData && (
				<div className="mt-4 flex justify-center mx-auto">
					<AirportTransferSearchBar onSearch={handleSearch} />
				</div>
			)}

			{/* Show SimpleCarCard when transferData is set and transfer hasn't been added yet */}
			{transferData && !isTransferAdded && (
				<SimpleCarCard
					transferData={transferData}
					onAdd={handleAddTransfer}
				/>
			)}

			{/* Show CarAdded when transfer has been added */}
			{isTransferAdded && addedTransferData && (
				<div className="mt-4 flex justify-center mx-auto">
					<CarAdded
						transferData={addedTransferData}
						onRemove={handleRemoveTransfer}
					/>
				</div>
			)}
		</div>
	);
}

export default AddOns;
