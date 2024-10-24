/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { useHotelData } from "../../contexts/HotelDataContext";
import { useSearchParamsContext } from "../../contexts/SearchParamsContext";



function Summary() {
  const { searchParams } = useSearchParamsContext(); // Access global search parameters
  const { hotelId, roomIndex, totalNights } = searchParams
  const { hotels, error } = useHotelData();
  
  // Handle error and loading states
	if (error) {
		return <p>Error loading hotel data: {error.message}</p>;
  }
  
	if (!hotels) {
		return <p>Loading hotel data...</p>;
	}

	// Find the specific hotel by hotelId
	const hotel = hotels.find((hotel) => hotel.id === Number(hotelId));

	// Handle case where the hotel is not found
	if (!hotel) {
		return <p>Hotel not found.</p>;
	}

	// Find the specific room by roomIndex
  const room = hotel.rooms[roomIndex];
  
  console.log("SearchParams: ", searchParams);
  console.log("Hotels: ", hotels);


    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg w-[789px] min-h-[138px] border border-LightGrey">
        <div className="p-6 border-b border-LightGrey">
          <h2 className="text-[24px] font-bold">Summary</h2>
        </div>
        <div className="p-6">
          <p className="text-[20px]">Hotel: €{room.pricePerNight * totalNights} </p>
        </div>
      </div>
    </div>

    );
}
export default Summary;








// import React from "react";
// import { useHotelData } from "../../contexts/HotelDataContext";
// import { useLocation } from "react-router-dom";

// function Summary() {
// 	const { hotels, error } = useHotelData();
// 	const location = useLocation();

// 	// Use URLSearchParams to extract params directly from the URL
// 	const params = new URLSearchParams(location.search);
// 	const hotelId = params.get("hotelId");
// 	const roomIndex = params.get("roomIndex");
// 	const totalNights = params.get("nights");

// 	// Handle error and loading states
// 	if (error) {
// 		return <p>Error loading hotel data: {error.message}</p>;
// 	}

// 	if (!hotels) {
// 		return <p>Loading hotel data...</p>;
// 	}

// 	// Find the specific hotel by hotelId
// 	const hotel = hotels.find((hotel) => hotel.id === Number(hotelId));

// 	// Handle case where the hotel is not found
// 	if (!hotel) {
// 		return <p>Hotel not found.</p>;
// 	}

// 	// Check if hotel has rooms and roomIndex is valid
// 	if (!hotel.rooms || !hotel.rooms[roomIndex]) {
// 		return <p>Room not found or invalid room index.</p>;
// 	}

// 	// Find the specific room by roomIndex
// 	const room = hotel.rooms[roomIndex];

// 	return (

//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//       <div className="bg-white rounded-lg w-[789px] min-h-[138px] border border-LightGrey">
//         <div className="p-6 border-b border-LightGrey">
//           <h2 className="text-[24px] font-bold">Summary</h2>
//         </div>
//         <div className="p-6">
//           <p className="text-[20px]">Hotel: €{room.pricePerNight * totalNights} </p>
//         </div>
//       </div>
//     </div>
// 	);
// }

// export default Summary;
