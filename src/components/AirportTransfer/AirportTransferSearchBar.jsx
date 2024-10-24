/* eslint-disable react/prop-types */
// import React, { useState } from "react";
// import LocationInput from "../LocationInput";
// import DateSelection from "./DateSelection";
// import TimeSelection from "./TimeSelection";
// import PassengerSelection from "./PassengerSelection";

// import Button from "../Button";

// function AirportTransferSearchBar({ onSearch }) {
// 	const [isReturn, setIsReturn] = useState(false); // Return eller enkelresa
// 	const [searchData, setSearchData] = useState({
// 		fromLocation: "", // Startadress
// 		toLocation: "", // Destinationsadress
// 		date: "",
// 		time: "",
// 		passengers: 1,
// 	});

// 	// Hanterar typ av resa (enkel eller retur)
// 	const handleTripTypeChange = (event) => {
// 		setIsReturn(event.target.value === "return");
// 	};

// 	// Hanterar sökningen och skickar data till föräldrakomponenten
// 	const handleSearch = () => {
// 		onSearch(searchData); // Skickar sökdata till föräldern
// 	};

// 	return (
// 		<div className="p-6 bg-secondaryLightBlue border border-accentPink shadow-lg rounded-lg w-[1200px] mx-auto">
// 			{/* Radio buttons for trip type */}
// 			<div className="mb-4 flex space-x-4">
// 				<label className="flex items-center">
// 					<input
// 						type="radio"
// 						name="tripType"
// 						value="oneway"
// 						checked={!isReturn}
// 						onChange={handleTripTypeChange}
// 						className="mr-2 custom-radio"
// 					/>
// 					One way
// 				</label>

// 				<label className="flex items-center">
// 					<input
// 						type="radio"
// 						name="tripType"
// 						value="return"
// 						checked={isReturn}
// 						onChange={handleTripTypeChange}
// 						className="mr-2 custom-radio"
// 					/>
// 					Return
// 				</label>
// 			</div>

// 			{/* Input fields for one way or return trip */}
// 			<div className="space-y-4">
// 				{/* First trip (always shown) */}
// 				<div className="flex justify-between items-center space-x-2">
// 					{/* <LocationInput
// 						placeholder="Enter the name of the airport?"
// 						// onChange={(e) => setLocation(e.target.value)}
// 						// value={location}
// 						size="airportTransferSearch"
// 					/> */}

// 					<LocationInput
// 						placeholder="Enter the pickup address"
// 						onChange={(e) =>
// 							setSearchData({
// 								...searchData,
// 								fromLocation: e.target.value,
// 							})
// 						}
// 						value={searchData.fromLocation}
// 						size="airportTransferSearch"
// 					/>
// 					{/* <LocationInput
// 						placeholder="Enter hotel destination"
// 						// onChange={(e) => setLocation(e.target.value)}
// 						// value={location}
// 						size="airportTransferSearch"
// 					/> */}
// 					<LocationInput
// 						placeholder="Enter the drop-off address"
// 						onChange={(e) =>
// 							setSearchData({
// 								...searchData,
// 								toLocation: e.target.value,
// 							})
// 						}
// 						value={searchData.toLocation}
// 						size="airportTransferSearch"
// 					/>
// 					<DateSelection
// 						onChange={
// 							(date) => setSearchData({ ...searchData, date }) // Uppdatera direkt med valt datum
// 						}
// 						value={searchData.date}
// 						size="airportTransferSearch"
// 					/>

// 					<TimeSelection
// 						onTimeSelect={
// 							(time) => setSearchData({ ...searchData, time }) // Uppdatera direkt med valt time-värde
// 						}
// 						value={searchData.time}
// 						size="airportTransferSearch"
// 					/>
// 					<PassengerSelection
// 						onSelectPassenger={
// 							(passengers) =>
// 								setSearchData({ ...searchData, passengers }) // Uppdatera passagerarantalet direkt
// 						}
// 						value={searchData.passengers}
// 						size="airportTransferSearch"
// 					/>

// 					{/* If is return is selected, show an empty div with the same
//           dimensions of the button, otherwise show the button */}
// 					{isReturn ? (
// 						<div className="w-[125px] h-[40px]"></div>
// 					) : (
// 						<Button
// 							size={"large"}
// 							buttonText={"Search"}
// 							onClick={handleSearch}
// 						/>
// 					)}
// 				</div>

// 				{/* Second trip (only shown if "Return" is selected) */}
// 				{isReturn && (
// 					<div className="flex justify-between items-center space-x-2">
// 						<LocationInput
// 							placeholder="Enter the name of the airport"
// 							size="airportTransferSearch"
// 						/>
// 						<LocationInput
// 							placeholder="Enter hotel destination"
// 							size="airportTransferSearch"
// 						/>
// 						<DateSelection />
// 						<TimeSelection />
// 						<PassengerSelection />
// 						<Button
// 							size={"large"}
// 							buttonText={"Search"}
// 							onClick={handleSearch}
// 						/>
// 					</div>
// 				)}
// 			</div>

// 			{/* Search button (positioned only at the bottom if Return is selected) */}
// 		</div>
// 	);
// }

// export default AirportTransferSearchBar;














/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import LocationInput from "../LocationInput";
import DateSelection from "./DateSelection";
import TimeSelection from "./TimeSelection";
import PassengerSelection from "./PassengerSelection";
import Button from "../Button";

function AirportTransferSearchBar({ onSearch }) {
  const [isReturn, setIsReturn] = useState(false); // Return eller enkelresa
  
  const [searchData, setSearchData] = useState({
    fromLocation: "", // Startadress
    toLocation: "",   // Destinationsadress
    date: "",
    time: "",
    passengers: 1,
    returnTrip: { // Data för returresa
      fromLocation: "",
      toLocation: "",
      date: "",
      time: "",
      passengers: 1,
    },
  });

  // Hanterar typ av resa (enkel eller retur)
  const handleTripTypeChange = (event) => {
    setIsReturn(event.target.value === "return");
  };

  // Hanterar sökningen och skickar data till föräldrakomponenten
  const handleSearch = () => {
    onSearch(searchData); // Skickar sökdata till föräldern
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
						onChange={
 							(date) => setSearchData({ ...searchData, date 

              }) // Uppdatera direkt med valt datum
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
            <Button size={"large"} buttonText={"Search"} onClick={handleSearch} />
          )}
        </div>

        {/* Second trip (only shown if "Return" is selected) */}
        {isReturn && (
          <div className="flex justify-between items-center space-x-2 mt-4">
            <LocationInput
              placeholder="Enter the return pickup address"
              onChange={(e) =>
                setSearchData({
                  ...searchData,
                  returnTrip: {
                    ...searchData.returnTrip,
                    fromLocation: e.target.value,
                  },
                })
              }
              value={searchData.returnTrip.fromLocation}
              size="airportTransferSearch"
            />
            <LocationInput
              placeholder="Enter the return drop-off address"
              onChange={(e) =>
                setSearchData({
                  ...searchData,
                  returnTrip: {
                    ...searchData.returnTrip,
                    toLocation: e.target.value,
                  },
                })
              }
              value={searchData.returnTrip.toLocation}
              size="airportTransferSearch"
            />
            <DateSelection
              onChange={(date) =>
                setSearchData({
                  ...searchData,
                  returnTrip: { ...searchData.returnTrip, date },
                })
              }
              value={searchData.returnTrip.date}
              size="airportTransferSearch"
            />
            <TimeSelection
              onTimeSelect={(time) =>
                setSearchData({
                  ...searchData,
                  returnTrip: { ...searchData.returnTrip, time },
                })
              }
              value={searchData.returnTrip.time}
              size="airportTransferSearch"
            />
            <PassengerSelection
              onSelectPassenger={(passengers) =>
                setSearchData({
                  ...searchData,
                  returnTrip: {
                    ...searchData.returnTrip,
                    passengers,
                  },
                })
              }
              value={searchData.returnTrip.passengers}
              size="airportTransferSearch"
            />
            <Button size={"large"} buttonText={"Search"} onClick={handleSearch} />
          </div>
        )}
      </div>
    </div>
  );
}

export default AirportTransferSearchBar;