import React from "react";
import { useHotelData } from "../../contexts/HotelDataContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSearchParamsContext } from "../../contexts/SearchParamsContext";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import dayjs from "dayjs";

function Summary({ hotelId, roomIndex, transferData }) {
	const { hotels, error } = useHotelData();
	const { searchParams } = useSearchParamsContext(); // Access global search parameters
	const { startDate, endDate } = searchParams;

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
	const room = hotel.rooms ? hotel.rooms[roomIndex] : null;

	if (!room) {
		return <p>Room not found.</p>;
	}

	// Calculate total nights
	const checkinDate = dayjs(startDate).format("DD MMMM YYYY");
	const checkoutDate = dayjs(endDate).format("DD MMMM YYYY");
	const totalNights = dayjs(endDate).diff(dayjs(startDate), "day");

	console.log(startDate);

	// Calculate hotel total price
	const hotelTotalPrice = room.pricePerNight * totalNights;

	// Determine transfer price
	let transferPrice = 0;
	if (transferData) {
		if (transferData.returnTrip) {
			transferPrice = 144; // Return trip
		} else {
			transferPrice = 78; // Single trip
		}
	}

	// Calculate total price
	const totalPrice = hotelTotalPrice + transferPrice;

	return (
		<div className="border p-4 h-auto w-full border-lightGrey mx-auto rounded-[10px] shadow-lg overflow-hidden bg-white">
			<div className="p-6 space-y-4">
				<h2 className="text-2xl font-bold mb-4">Summary</h2>
				<div className="text-lg">
					<p className="flex space-x-3">
						<span className="font-semibold w-50">Hotel:</span>
						<span> €{hotelTotalPrice}</span>
					</p>
					{transferData && (
						<p className="flex space-x-3">
							<span className="font-semibold w-50">Car:</span>
							<span> €{transferPrice}</span>
						</p>
					)}
					<p className="mt-2 text-xl flex space-x-3">
						<span className="font-semibold">Total:</span>
						<span> €{totalPrice}</span>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Summary;
