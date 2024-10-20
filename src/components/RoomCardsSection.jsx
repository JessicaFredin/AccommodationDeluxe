// /* eslint-disable react/no-children-prop */
// /* eslint-disable no-unused-vars */

// import React from "react";
// import RoomType from "./RoomType";
// import { useHotelData } from "../contexts/HotelDataContext";
// import { useParams } from "react-router-dom";
// import { useSearchParams, useLocation } from "react-router-dom";
// import dayjs from "dayjs";
// //definierar rooms i en lista som håller objekt 5 värden vardera
// // const rooms = [
// // 	{
// // 		title: "Double Room",
// // 		price: "€148/night",
// // 		totalNights: 2,
// // 		guests: "2 Adults",
// // 		description: [
// // 			"Square Meters",
// // 			"Sea/garden view",
// // 			"Breakfast included",
// // 			"Free WiFi",
// // 			"Shared pool with others",
// // 			"1 double bed",
// // 		],
// // 		special: "Only 1 room left",
// // 		hasFan: true,
// // 		hasTv: true,
// // 		hasAC: true,
// // 		hasHairdryer: false,
// // 	},
// // 	{
// // 		title: "Swim-Up Double Room",
// // 		price: "€168/night",
// // 		totalNights: 5,
// // 		guests: "2 Adults",
// // 		description: [
// // 			"Square Meters",
// // 			"Sea/garden view",
// // 			"Breakfast included",
// // 			"Free WiFi",
// // 			"Shared pool with others",
// // 			"1 double bed",
// // 			"Balcony or Terrace",
// // 		],
// // 		special: "Only 1 room left",
// // 		hasFan: false,
// // 		hasTv: false,
// // 		hasAC: true,
// // 		hasHairdryer: true,
// // 	},
// // 	{
// // 		title: "Ocean View Double Room",
// // 		price: "€188/night",
// // 		totalNights: 7,
// // 		guests: "2 Adults",
// // 		description: [
// // 			"Square Meters",
// // 			"Sea view",
// // 			"Breakfast included",
// // 			"Free WiFi",
// // 			"Shared pool with others",
// // 			"1 king-size bed",
// // 			"Balcony or Terrace",
// // 		],
// // 		special: "Only 1 room left",
// // 		hasFan: true,
// // 		hasTv: true,
// // 		hasAC: true,
// // 		hasHairdryer: true,
// // 	},
// // 	{
// // 		title: "Terrace Double Room",
// // 		price: "€189/night",
// // 		totalNights: 4,
// // 		guests: "2 Adults",
// // 		description: [
// // 			"Square Meters",
// // 			"Sea/garden view",
// // 			"Breakfast included",
// // 			"Free WiFi",
// // 			"Shared pool with others",
// // 			"1 king-size bed",
// // 			"Balcony or Terrace",
// // 		],
// // 		special: "Only 1 room left",
// // 		hasFan: false,
// // 		hasTv: true,
// // 		hasAC: true,
// // 		hasHairdryer: true,
// // 	},
// // ];

// function RoomCardsSection() {
// 	const { hotelId } = useParams(); // Get hotelId from the URL
// 	const { hotels, error } = useHotelData(); // Get the hotel data from context
// 	// const [searchParams] = useSearchParams(); // Get search params
// 	const location = useLocation(); // React hook to access the URL
// 	const query = new URLSearchParams(location.search);
// 	const startDate = query.get("startDate");
// 	const endDate = query.get("endDate");
// 	const adults = Number(query.get("adults")) || 0;
// 	const children = Number(query.get("children")) || 0;
	

// 	const totalNights =
// 		startDate && endDate ? dayjs(endDate).diff(dayjs(startDate), "day") : 0;
	
// 	  console.log("Start Date:", startDate);
// 		console.log("End Date:", endDate);
// 		console.log("Adults:", adults);
// 		console.log("Children:", children);
// 		console.log("Total Nights:", totalNights);


// 	// // Retrieve `totalNights`, `adults`, and `children` from query params
// 	// const totalNights = parseInt(searchParams.get("nights"), 10);
// 	// const adults = parseInt(searchParams.get("adults"), 10);
// 	// const children = parseInt(searchParams.get("children"), 10);

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

// 	return (
// 		<div className="w-[85%] mx-auto mt-8">
// 			{/* Linje och rubrik*/}
// 			<hr className="border-t-2 border-grey mb-6" />
// 			<h2 className="text-3xl font-bold mb-6">Book now</h2>

// 			{/* Kort sektion */}
// 			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3">
// 				{hotel.rooms.map((room, index) => (
// 					<RoomType
// 						key={index}
// 						room={room}
// 						totalNights={totalNights}
// 						adults={adults}
// 						children={children}
// 					/>
// 				))}
// 			</div>
// 		</div>
// 	);
// }

// export default RoomCardsSection;






/* eslint-disable react/no-children-prop */
/* eslint-disable no-unused-vars */

import React from "react";
import RoomType from "./RoomType";
import { useHotelData } from "../contexts/HotelDataContext";
import { useParams } from "react-router-dom";
import { useSearchParamsContext } from "../contexts/SearchParamsContext"; // Import the context hook
import dayjs from "dayjs";

function RoomCardsSection() {
  const { hotelId } = useParams(); // Get hotelId from the URL
  const { hotels, error } = useHotelData(); // Get the hotel data from context
  const { searchParams } = useSearchParamsContext(); // Access the search params from context

  const { startDate, endDate, adults, children } = searchParams;

  const totalNights =
    startDate && endDate ? dayjs(endDate).diff(dayjs(startDate), "day") : 0;

  console.log("Start Date:", startDate);
  console.log("End Date:", endDate);
  console.log("Adults:", adults);
  console.log("Children:", children);
  console.log("Total Nights:", totalNights);

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

  return (
    <div className="w-[85%] mx-auto mt-8">
      {/* Linje och rubrik */}
      <hr className="border-t-2 border-grey mb-6" />
      <h2 className="text-3xl font-bold mb-6">Book now</h2>

      {/* Kort sektion */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3">
        {hotel.rooms.map((room, index) => (
          <RoomType
            key={index}
            room={room}
            totalNights={totalNights}
            adults={adults}
            children={children}
          />
        ))}
      </div>
    </div>
  );
}

export default RoomCardsSection;
