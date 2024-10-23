// /* eslint-disable no-unused-vars */
// import React, { useState } from "react";
// import LocationInput from "../LocationInput";
// import DateSelection from "./DateSelection";
// import TimeSelection from "./TimeSelection";
// import PassengerSelection from "./PassengerSelection";

// import Button from "../Button";

// function AirportTransferSearchBar() {
// 	const [isReturn, setIsReturn] = useState(false);

// 	const handleTripTypeChange = (event) => {
// 		setIsReturn(event.target.value === "return");
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
// 					<LocationInput
// 						placeholder="Enter the name of the airport?"
// 						// onChange={(e) => setLocation(e.target.value)}
// 						// value={location}
// 						size="airportTransferSearch"
// 					/>
// 					<LocationInput
// 						placeholder="Enter hotel destination"
// 						// onChange={(e) => setLocation(e.target.value)}
// 						// value={location}
// 						size="airportTransferSearch"
// 					/>
// 					<DateSelection />
// 					<TimeSelection />
// 					<PassengerSelection />
// 					{/* If is return is selected, show an empty div with the same 
//           dimensions of the button, otherwise show the button */}
// 					{isReturn ? (
// 						<div className="w-[125px] h-[40px]"></div>
// 					) : (
// 						<Button size={"large"} buttonText={"Search"} />
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
// 						<Button size={"large"} buttonText={"Search"} />
// 					</div>
// 				)}
// 			</div>

// 			{/* Search button (positioned only at the bottom if Return is selected) */}
// 		</div>
// 	);
// }

// export default AirportTransferSearchBar;

// import React, { useState } from "react";
// import LocationInput from "../LocationInput";
// import DateSelection from "./DateSelection";
// import TimeSelection from "./TimeSelection";
// import PassengerSelection from "./PassengerSelection";
// import Button from "../Button";

// function AirportTransferSearchBar({ onSearch }) {
//   const [isReturn, setIsReturn] = useState(false);
//   const [searchData, setSearchData] = useState({
//     fromLocation: "",
//     toLocation: "",
//     date: "",
//     time: "",
//     passengers: 1,
//     luggage: 0,
//   });

//   const handleTripTypeChange = (event) => {
//     setIsReturn(event.target.value === "return");
//   };

//   const handleSearch = () => {
//     onSearch(searchData); // Skicka sökdata till föräldern
//   };

//   return (
//     <div className="p-6 bg-secondaryLightBlue border border-accentPink shadow-lg rounded-lg w-[1200px] mx-auto">
//       {/* Radio buttons for trip type */}
//       <div className="mb-4 flex space-x-4">
//         <label className="flex items-center">
//           <input
//             type="radio"
//             name="tripType"
//             value="oneway"
//             checked={!isReturn}
//             onChange={handleTripTypeChange}
//             className="mr-2 custom-radio"
//           />
//           One way
//         </label>

//         <label className="flex items-center">
//           <input
//             type="radio"
//             name="tripType"
//             value="return"
//             checked={isReturn}
//             onChange={handleTripTypeChange}
//             className="mr-2 custom-radio"
//           />
//           Return
//         </label>
//       </div>

//       {/* Input fields for one way or return trip */}
//       <div className="space-y-4">
//         {/* First trip (always shown) */}
//         <div className="flex justify-between items-center space-x-2">
//           <LocationInput
//             placeholder="Enter the name of the airport?"
//             onChange={(e) =>
//               setSearchData({ ...searchData, fromLocation: e.target.value })
//             }
//             value={searchData.fromLocation}
//             size="airportTransferSearch"
//           />
//           <LocationInput
//             placeholder="Enter hotel destination"
//             onChange={(e) =>
//               setSearchData({ ...searchData, toLocation: e.target.value })
//             }
//             value={searchData.toLocation}
//             size="airportTransferSearch"
//           />
//           <DateSelection
//             onChange={(e) =>
//               setSearchData({ ...searchData, date: e.target.value })
//             }
//           />
//           <TimeSelection
//             onChange={(e) =>
//               setSearchData({ ...searchData, time: e.target.value })
//             }
//           />
//           <PassengerSelection
//             onChange={(e) =>
//               setSearchData({ ...searchData, passengers: e.target.value })
//             }
//           />
//           {/* Search button */}
//           <Button size={"large"} buttonText={"Search"} onClick={handleSearch} />
//         </div>

//         {/* Second trip (only shown if "Return" is selected) */}
//         {isReturn && (
//           <div className="flex justify-between items-center space-x-2">
//             <LocationInput
//               placeholder="Enter the name of the airport"
//               size="airportTransferSearch"
//             />
//             <LocationInput
//               placeholder="Enter hotel destination"
//               size="airportTransferSearch"
//             />
//             <DateSelection />
//             <TimeSelection />
//             <PassengerSelection />
//             <Button size={"large"} buttonText={"Search"} onClick={handleSearch} />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default AirportTransferSearchBar;

import React, { useState } from "react";
import LocationInput from "../LocationInput"; // Antag att denna komponent är ett textfält där användaren kan ange adresser
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
    luggage: 0,
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
      {/* Radio buttons för enkel eller returresa */}
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

      {/* Inputfält för avrese- och destinationsadresser */}
      <div className="space-y-4">
        {/* Avreseadress och destinationsadress */}
        <div className="flex justify-between items-center space-x-2">
          <LocationInput
            placeholder="Enter the pickup address"
            onChange={(e) =>
              setSearchData({ ...searchData, fromLocation: e.target.value })
            }
            value={searchData.fromLocation}
            size="airportTransferSearch"
          />
          <LocationInput
            placeholder="Enter the drop-off address"
            onChange={(e) =>
              setSearchData({ ...searchData, toLocation: e.target.value })
            }
            value={searchData.toLocation}
            size="airportTransferSearch"
          />
          {/* Datum- och tidval */}
          <DateSelection
            onChange={(e) =>
              setSearchData({ ...searchData, date: e.target.value })
            }
          />
          <TimeSelection
            onChange={(e) =>
              setSearchData({ ...searchData, time: e.target.value })
            }
          />
          <PassengerSelection
            onChange={(e) =>
              setSearchData({ ...searchData, passengers: e.target.value })
            }
          />
          {/* Sökknapp */}
          <Button size={"large"} buttonText={"Search"} onClick={handleSearch} />
        </div>

        {/* Extra fält för returresa */}
        {isReturn && (
          <div className="flex justify-between items-center space-x-2">
            <LocationInput
              placeholder="Enter the return pickup address"
              size="airportTransferSearch"
            />
            <LocationInput
              placeholder="Enter the return drop-off address"
              size="airportTransferSearch"
            />
            <DateSelection />
            <TimeSelection />
            <PassengerSelection />
            <Button size={"large"} buttonText={"Search"} onClick={handleSearch} />
          </div>
        )}
      </div>
    </div>
  );
}

export default AirportTransferSearchBar;
