/* eslint-disable react/no-children-prop */
// /* eslint-disable react/no-children-prop */
// /* eslint-disable no-unused-vars */

// import React from "react";
// import RoomType from "./RoomType";
// import { useHotelData } from "../contexts/HotelDataContext";
// import { useParams, useLocation } from "react-router-dom";
// import { useSearchParamsContext } from "../contexts/SearchParamsContext"; // Import the context hook
// import dayjs from "dayjs";

// function RoomCardsSection() {
// 	const { hotelId } = useParams(); // Get hotelId from the URL
// 	const { hotels, error } = useHotelData(); // Get the hotel data from context
// 	const { searchParams } = useSearchParamsContext(); // Access the search params from context

// 	const { startDate, endDate, adults, children } = searchParams;

// 	const totalNights =
// 		startDate && endDate ? dayjs(endDate).diff(dayjs(startDate), "day") : 0;

// 	// console.log("Start Date:", startDate);
// 	// console.log("End Date:", endDate);
// 	// console.log("Adults:", adults);
// 	// console.log("Children:", children);
// 	// console.log("Total Nights:", totalNights);

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
// 			{/* Linje och rubrik */}
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
// 						hotelId={hotelId} // Pass the hotelId to RoomType
// 						index={index} // Pass the index to RoomType for room identification
// 					/>
// 				))}
// 			</div>
// 		</div>
// 	);
// }

// export default RoomCardsSection;




import { useHotelData } from "../contexts/HotelDataContext";
import { useParams, useLocation } from "react-router-dom";
import RoomType from "./RoomType";
import dayjs from "dayjs";

function RoomCardsSection() {
	const { hotelId } = useParams(); // Get hotelId from the URL
	const { hotels, offers } = useHotelData(); // Get hotels and offers from context

	const location = useLocation(); // React hook to access the URL
	const query = new URLSearchParams(location.search);
	const offerId = query.get("offerId");
	const startDate = query.get("startDate");
	const endDate = query.get("endDate");
	const adults = Number(query.get("adults")) || 0;
	const children = Number(query.get("children")) || 0;

	const totalNights =
		startDate && endDate ? dayjs(endDate).diff(dayjs(startDate), "day") : 0;

	// Find the specific hotel by hotelId
	const hotel = hotels.find((hotel) => hotel.id === Number(hotelId));

	// Retrieve the applicable offer if offerId is present
	let applicableOffer = null;
	if (offerId && offers) {
		const offer = offers.find((o) => o.id === Number(offerId));
		if (offer && offer.hotelId === Number(hotelId)) {
			// Calculate discount percentage
			if (offer.originalPrice && offer.discountedPrice) {
				offer.discountPercentage =
					(offer.originalPrice - offer.discountedPrice) /
					offer.originalPrice;
			}
			applicableOffer = offer;
		}
	}

	return (
		<div className="w-[85%] mx-auto mt-8">
			{/* Line and heading */}
			<hr className="border-t-2 border-grey mb-6" />
			<h2 className="text-3xl font-bold mb-6">Book now</h2>

			{/* Card section */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3">
				{hotel.rooms.map((room, index) => (
					<RoomType
						key={index}
						room={room}
						totalNights={totalNights}
						adults={adults}
						children={children}
						hotelId={hotelId} // Pass the hotelId to RoomType
						index={index} // Pass the index to RoomType for room identification
						offer={applicableOffer} // Pass the applicable offer
					/>
				))}
			</div>
		</div>
	);
}

export default RoomCardsSection;

