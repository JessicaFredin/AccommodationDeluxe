/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
// // import React, { useState } from "react";
// // import LocationInput from "../LocationInput";
// // import DateSelection from "./DateSelection";
// // import TimeSelection from "./TimeSelection";
// // import PassengerSelection from "./PassengerSelection";

// // import Button from "../Button";

// // function AirportTransferSearchBar({ onSearch }) {
// // 	const [isReturn, setIsReturn] = useState(false); // Return eller enkelresa
// // 	const [searchData, setSearchData] = useState({
// // 		fromLocation: "", // Startadress
// // 		toLocation: "", // Destinationsadress
// // 		date: "",
// // 		time: "",
// // 		passengers: 1,
// // 	});

// // 	// Hanterar typ av resa (enkel eller retur)
// // 	const handleTripTypeChange = (event) => {
// // 		setIsReturn(event.target.value === "return");
// // 	};

// // 	// Hanterar sökningen och skickar data till föräldrakomponenten
// // 	const handleSearch = () => {
// // 		onSearch(searchData); // Skickar sökdata till föräldern
// // 	};

// // 	return (
// // 		<div className="p-6 bg-secondaryLightBlue border border-accentPink shadow-lg rounded-lg w-[1200px] mx-auto">
// // 			{/* Radio buttons for trip type */}
// // 			<div className="mb-4 flex space-x-4">
// // 				<label className="flex items-center">
// // 					<input
// // 						type="radio"
// // 						name="tripType"
// // 						value="oneway"
// // 						checked={!isReturn}
// // 						onChange={handleTripTypeChange}
// // 						className="mr-2 custom-radio"
// // 					/>
// // 					One way
// // 				</label>

// // 				<label className="flex items-center">
// // 					<input
// // 						type="radio"
// // 						name="tripType"
// // 						value="return"
// // 						checked={isReturn}
// // 						onChange={handleTripTypeChange}
// // 						className="mr-2 custom-radio"
// // 					/>
// // 					Return
// // 				</label>
// // 			</div>

// // 			{/* Input fields for one way or return trip */}
// // 			<div className="space-y-4">
// // 				{/* First trip (always shown) */}
// // 				<div className="flex justify-between items-center space-x-2">
// // 					{/* <LocationInput
// // 						placeholder="Enter the name of the airport?"
// // 						// onChange={(e) => setLocation(e.target.value)}
// // 						// value={location}
// // 						size="airportTransferSearch"
// // 					/> */}

// // 					<LocationInput
// // 						placeholder="Enter the pickup address"
// // 						onChange={(e) =>
// // 							setSearchData({
// // 								...searchData,
// // 								fromLocation: e.target.value,
// // 							})
// // 						}
// // 						value={searchData.fromLocation}
// // 						size="airportTransferSearch"
// // 					/>
// // 					{/* <LocationInput
// // 						placeholder="Enter hotel destination"
// // 						// onChange={(e) => setLocation(e.target.value)}
// // 						// value={location}
// // 						size="airportTransferSearch"
// // 					/> */}
// // 					<LocationInput
// // 						placeholder="Enter the drop-off address"
// // 						onChange={(e) =>
// // 							setSearchData({
// // 								...searchData,
// // 								toLocation: e.target.value,
// // 							})
// // 						}
// // 						value={searchData.toLocation}
// // 						size="airportTransferSearch"
// // 					/>
// // 					<DateSelection
// // 						onChange={
// // 							(date) => setSearchData({ ...searchData, date }) // Uppdatera direkt med valt datum
// // 						}
// // 						value={searchData.date}
// // 						size="airportTransferSearch"
// // 					/>

// // 					<TimeSelection
// // 						onTimeSelect={
// // 							(time) => setSearchData({ ...searchData, time }) // Uppdatera direkt med valt time-värde
// // 						}
// // 						value={searchData.time}
// // 						size="airportTransferSearch"
// // 					/>
// // 					<PassengerSelection
// // 						onSelectPassenger={
// // 							(passengers) =>
// // 								setSearchData({ ...searchData, passengers }) // Uppdatera passagerarantalet direkt
// // 						}
// // 						value={searchData.passengers}
// // 						size="airportTransferSearch"
// // 					/>

// // 					{/* If is return is selected, show an empty div with the same
// //           dimensions of the button, otherwise show the button */}
// // 					{isReturn ? (
// // 						<div className="w-[125px] h-[40px]"></div>
// // 					) : (
// // 						<Button
// // 							size={"large"}
// // 							buttonText={"Search"}
// // 							onClick={handleSearch}
// // 						/>
// // 					)}
// // 				</div>

// // 				{/* Second trip (only shown if "Return" is selected) */}
// // 				{isReturn && (
// // 					<div className="flex justify-between items-center space-x-2">
// // 						<LocationInput
// // 							placeholder="Enter the name of the airport"
// // 							size="airportTransferSearch"
// // 						/>
// // 						<LocationInput
// // 							placeholder="Enter hotel destination"
// // 							size="airportTransferSearch"
// // 						/>
// // 						<DateSelection />
// // 						<TimeSelection />
// // 						<PassengerSelection />
// // 						<Button
// // 							size={"large"}
// // 							buttonText={"Search"}
// // 							onClick={handleSearch}
// // 						/>
// // 					</div>
// // 				)}
// // 			</div>

// // 			{/* Search button (positioned only at the bottom if Return is selected) */}
// // 		</div>
// // 	);
// // }

// // export default AirportTransferSearchBar;














// /* eslint-disable no-unused-vars */
// import React, { useState } from "react";
// import LocationInput from "../LocationInput";
// import DateSelection from "./DateSelection";
// import TimeSelection from "./TimeSelection";
// import PassengerSelection from "./PassengerSelection";
// import Button from "../Button";

// function AirportTransferSearchBar({ onSearch }) {
// 	const [tripType, setTripType] = useState("one-way"); // Default to one-way
// 	const [fromLocation, setFromLocation] = useState("");
// 	const [toLocation, setToLocation] = useState("");
// 	const [date, setDate] = useState("");
// 	const [time, setTime] = useState("");
// 	const [passenger, setPassenger] = useState(1);
// 	const handleSearchClick = () => {
// 		const transferData = {
// 			fromLocation,
// 			toLocation,
// 			date,
// 			time,
// 			passengers: passenger,
// 			returnTrip:
// 				tripType === "return"
// 					? {
// 							fromLocation: toLocation, // For simplicity, assuming return trip goes back to fromLocation
// 							toLocation: fromLocation,
// 							date: "return date here", // Add logic to handle a return date
// 							time: "return time here", // Add logic to handle a return time
// 							passengers: 1, // Can be adjusted
// 					  }
// 					: null,
// 		};

// 		// Call onSearch with both transferData and tripType
// 		onSearch(transferData, tripType);
// 	};

// 	// const [isReturn, setIsReturn] = useState(false); // Return eller enkelresa

// 	// const [searchData, setSearchData] = useState({
// 	//   fromLocation: "", // Startadress
// 	//   toLocation: "",   // Destinationsadress
// 	//   date: "",
// 	//   time: "",
// 	//   passengers: 1,
// 	//   returnTrip: { // Data för returresa
// 	//     fromLocation: "",
// 	//     toLocation: "",
// 	//     date: "",
// 	//     time: "",
// 	//     passengers: 1,
// 	//   },
// 	// });

// 	// // Hanterar typ av resa (enkel eller retur)
// 	// const handleTripTypeChange = (event) => {
// 	//   setIsReturn(event.target.value === "return");
// 	// };

// 	// // Hanterar sökningen och skickar data till föräldrakomponenten
// 	// const handleSearch = () => {
// 	//   onSearch(searchData); // Skickar sökdata till föräldern
// 	// };

// 	return (
// 		<div className="p-6 bg-secondaryLightBlue border border-accentPink shadow-lg rounded-lg w-[1200px]! mx-auto">
// 			{/* Radio buttons for trip type */}
// 			<div className="mb-4 flex space-x-4">
// 				<label className="flex items-center">
// 					<input
// 						type="radio"
// 						name="tripType"
// 						value="one-way"
// 						checked={tripType === "one-way"}
// 						// onChange={handleTripTypeChange}
// 						onChange={() => setTripType("one-way")}
// 						className="mr-2 custom-radio"
// 					/>
// 					One-way
// 				</label>

// 				<label className="flex items-center">
// 					<input
// 						type="radio"
// 						name="tripType"
// 						value="return"
// 						checked={tripType === "return"}
// 						// onChange={handleTripTypeChange}
// 						onChange={() => setTripType("return")}
// 						className="mr-2 custom-radio"
// 					/>
// 					Return
// 				</label>
// 			</div>

// 			{/* Input fields for one way or return trip */}
// 			<div className="space-y-4">
// 				{/* First trip (always shown) */}
// 				<div className="flex justify-between items-center space-x-2">
// 					<LocationInput
// 						placeholder="Enter the pickup address"
// 						// onChange={(e) =>
// 						// 	setSearchData({
// 						// 		...searchData,
// 						// 		fromLocation: e.target.value,
// 						// 	})
// 						// }
// 						// value={searchData.fromLocation}
// 						value={fromLocation}
// 						onChange={(e) => setFromLocation(e.target.value)}
// 						size="airportTransferSearch"
// 					/>
// 					<LocationInput
// 						placeholder="Enter the drop-off address"
// 						// onChange={(e) =>
// 						// 	setSearchData({
// 						// 		...searchData,
// 						// 		toLocation: e.target.value,
// 						// 	})
// 						// }
// 						// value={searchData.toLocation}
// 						value={toLocation}
// 						onChange={(e) => setToLocation(e.target.value)}
// 						size="airportTransferSearch"
// 					/>
// 					<DateSelection
// 						// onChange={
// 						// 	(date) => setSearchData({ ...searchData, date }) // Uppdatera direkt med valt datum
// 						// }
// 						// value={searchData.date}
// 						value={date}
// 						onChange={(e) => setDate(e.target.value)}
// 						size="airportTransferSearch"
// 					/>
// 					<TimeSelection
// 						// onTimeSelect={(time) =>
// 						// 	setSearchData({ ...searchData, time })
// 						// }
// 						// value={searchData.time}
// 						value={time}
// 						onChange={(e) => setTime(e.target.value)}
// 						size="airportTransferSearch"
// 					/>
// 					{/* <PassengerSelection
// 						// onSelectPassenger={(passengers) =>
// 						// 	setSearchData({ ...searchData, passengers })
// 						// }
// 						// value={searchData.passengers}
// 						value={passenger}
// 						onChange={(e) => setPassenger(e.target.value)}
// 						size="airportTransferSearch"
// 					/> */}
// 					<PassengerSelection
// 						value={passenger}
// 						onChange={(e) => setPassenger(e.target.value)}
// 						size="airportTransferSearch"
// 					/>
// 					{tripType === "return" ? (
// 						<div className="w-[125px] h-[40px]"></div>
// 					) : (
// 						<Button
// 							size={"large"}
// 							buttonText={"Search"}
// 							onClick={handleSearchClick}
// 						/>
// 					)}
// 				</div>
// 				{/* {isReturn ? (
// 						<div className="w-[125px] h-[40px]"></div>
// 					) : (
// 						<Button
// 							size={"large"}
// 							buttonText={"Search"}
// 							onClick={handleSearch}
// 						/>
// 					)}
// 				</div> */}

// 				{/* Second trip (only shown if "Return" is selected) */}
// 				{tripType === "return" && (
// 					<div className="flex justify-between items-center space-x-2 mt-4">
// 						<LocationInput
// 							placeholder="Enter the return pickup address"
// 							value={toLocation} // Reusing destination as the starting point of return
// 							onChange={(e) => setToLocation(e.target.value)}
// 							size="airportTransferSearch"
// 						/>
// 						<LocationInput
// 							placeholder="Enter the return drop-off address"
// 							value={fromLocation} // Reusing pickup as the drop-off of return
// 							onChange={(e) => setFromLocation(e.target.value)}
// 							size="airportTransferSearch"
// 						/>
// 						<DateSelection
// 							value={date} // Assuming same date logic applies, modify as needed
// 							onChange={(e) => setDate(e.target.value)}
// 							size="airportTransferSearch"
// 						/>
// 						<TimeSelection
// 							value={time} // Assuming same time logic applies, modify as needed
// 							onChange={(e) => setTime(e.target.value)}
// 							size="airportTransferSearch"
// 						/>
// 						<PassengerSelection
// 							value={passenger} // Assuming same passenger count for return
// 							onChange={(e) => setPassenger(e.target.value)}
// 							size="airportTransferSearch"
// 						/>
// 						<Button
// 							size={"large"}
// 							buttonText={"Search"}
// 							onClick={handleSearchClick}
// 						/>
// 					</div>
// 				)}
// 			</div>
// 		</div>
// 	);
// }


// 				// Second trip (only shown if "Return" is selected)
// // 				{isReturn && (
// // 					<div className="flex justify-between items-center space-x-2 mt-4">
// // 						<LocationInput
// // 							placeholder="Enter the return pickup address"
// // 							onChange={(e) =>
// // 								setSearchData({
// // 									...searchData,
// // 									returnTrip: {
// // 										...searchData.returnTrip,
// // 										fromLocation: e.target.value,
// // 									},
// // 								})
// // 							}
// // 							value={searchData.returnTrip.fromLocation}
// // 							size="airportTransferSearch"
// // 						/>
// // 						<LocationInput
// // 							placeholder="Enter the return drop-off address"
// // 							onChange={(e) =>
// // 								setSearchData({
// // 									...searchData,
// // 									returnTrip: {
// // 										...searchData.returnTrip,
// // 										toLocation: e.target.value,
// // 									},
// // 								})
// // 							}
// // 							value={searchData.returnTrip.toLocation}
// // 							size="airportTransferSearch"
// // 						/>
// // 						<DateSelection
// // 							onChange={(date) =>
// // 								setSearchData({
// // 									...searchData,
// // 									returnTrip: {
// // 										...searchData.returnTrip,
// // 										date,
// // 									},
// // 								})
// // 							}
// // 							value={searchData.returnTrip.date}
// // 							size="airportTransferSearch"
// // 						/>
// // 						<TimeSelection
// // 							onTimeSelect={(time) =>
// // 								setSearchData({
// // 									...searchData,
// // 									returnTrip: {
// // 										...searchData.returnTrip,
// // 										time,
// // 									},
// // 								})
// // 							}
// // 							value={searchData.returnTrip.time}
// // 							size="airportTransferSearch"
// // 						/>
// // 						<PassengerSelection
// // 							onSelectPassenger={(passengers) =>
// // 								setSearchData({
// // 									...searchData,
// // 									returnTrip: {
// // 										...searchData.returnTrip,
// // 										passengers,
// // 									},
// // 								})
// // 							}
// // 							value={searchData.returnTrip.passengers}
// // 							size="airportTransferSearch"
// // 						/>
// // 						<Button
// // 							size={"large"}
// // 							buttonText={"Search"}
// // 							onClick={handleSearch}
// // 						/>
// // 					</div>
// // 				)}
// // 			</div>
// // 		</div>
// //   );
// // }

// export default AirportTransferSearchBar;







/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import LocationInput from "../LocationInput";
import DateSelection from "./DateSelection";
import TimeSelection from "./TimeSelection";
import PassengerSelection from "./PassengerSelection";
import Button from "../Button";

function AirportTransferSearchBar({ onSearch }) {
  const [tripType, setTripType] = useState("one-way"); // Default to one-way
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [passenger, setPassenger] = useState(1); // Passenger state added

  // Separate state for the return trip inputs
  const [returnFromLocation, setReturnFromLocation] = useState("");
  const [returnToLocation, setReturnToLocation] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [returnTime, setReturnTime] = useState("");

  const handleSearchClick = () => {
    const transferData = {
      fromLocation,
      toLocation,
      date,
      time,
      passengers: passenger, // Passengers added to transfer data
      returnTrip:
        tripType === "return"
          ? {
              fromLocation: returnFromLocation, // Return trip details are now separate
              toLocation: returnToLocation,
              date: returnDate,
              time: returnTime,
              passengers: passenger, // Return trip passengers
            }
          : null,
    };

    // Call onSearch with both transferData and tripType
    onSearch(transferData, tripType);
  };

  return (
    <div className="p-6 bg-secondaryLightBlue border border-accentPink shadow-lg rounded-lg w-[1200px]! mx-auto">
      {/* Radio buttons for trip type */}
      <div className="mb-4 flex space-x-4">
        <label className="flex items-center">
          <input
            type="radio"
            name="tripType"
            value="one-way"
            checked={tripType === "one-way"}
            onChange={() => setTripType("one-way")}
            className="mr-2 custom-radio"
          />
          One-way
        </label>

        <label className="flex items-center">
          <input
            type="radio"
            name="tripType"
            value="return"
            checked={tripType === "return"}
            onChange={() => setTripType("return")}
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
            placeholder="Enter the pickup address"
            value={fromLocation}
            onChange={(e) => setFromLocation(e.target.value)}
            size="airportTransferSearch"
          />
          <LocationInput
            placeholder="Enter the drop-off address"
            value={toLocation}
            onChange={(e) => setToLocation(e.target.value)}
            size="airportTransferSearch"
          />
          <DateSelection
            value={date}
            onChange={(e) => setDate(e.target.value)}
            size="airportTransferSearch"
          />
          <TimeSelection
            value={time}
            onChange={(e) => setTime(e.target.value)}
            size="airportTransferSearch"
          />
          <PassengerSelection
            value={passenger}
            onChange={(e) => setPassenger(e.target.value)}
            size="airportTransferSearch"
          />
          {tripType === "return" ? (
            <div className="w-[125px] h-[40px]"></div>
          ) : (
            <Button
              size={"large"}
              buttonText={"Search"}
              onClick={handleSearchClick}
            />
          )}
        </div>

        {/* Second trip (only shown if "Return" is selected) */}
        {tripType === "return" && (
          <div className="flex justify-between items-center space-x-2 mt-4">
            <LocationInput
              placeholder="Enter the return pickup address"
              value={returnFromLocation} // Separate state for return trip
              onChange={(e) => setReturnFromLocation(e.target.value)}
              size="airportTransferSearch"
            />
            <LocationInput
              placeholder="Enter the return drop-off address"
              value={returnToLocation} // Separate state for return trip
              onChange={(e) => setReturnToLocation(e.target.value)}
              size="airportTransferSearch"
            />
            <DateSelection
              value={returnDate} // Separate state for return date
              onChange={(e) => setReturnDate(e.target.value)}
              size="airportTransferSearch"
            />
            <TimeSelection
              value={returnTime} // Separate state for return time
              onChange={(e) => setReturnTime(e.target.value)}
              size="airportTransferSearch"
            />
            <PassengerSelection
              value={passenger} // Assuming same passenger count for return
              onChange={(e) => setPassenger(e.target.value)}
              size="airportTransferSearch"
            />
            <Button
              size={"large"}
              buttonText={"Search"}
              onClick={handleSearchClick}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default AirportTransferSearchBar;
