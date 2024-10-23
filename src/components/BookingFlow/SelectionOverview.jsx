/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faMapMarkerAlt,
	faChevronLeft,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../Button";
import { useHotelData } from "../../contexts/HotelDataContext";
import { useSearchParamsContext } from "../../contexts/SearchParamsContext";
import dayjs from "dayjs";

function SelectionOverview({ hotelId, roomIndex }) {
	const { searchParams } = useSearchParamsContext(); // Access global search parameters
	const { startDate, endDate, adults, children } = searchParams;
	const { hotels, error } = useHotelData(); // Fetch hotel data from context

	const [currentImageIndex, setCurrentImageIndex] = useState(0); // Image index state

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

	const roomImages =
		room.roomImages && room.roomImages.length > 0
			? room.roomImages
			: [room.imgUrl]; // Use roomImages if available, else fallback to imgUrl

	const checkinDate = dayjs(startDate).format("DD MMMM YYYY");
	const checkoutDate = dayjs(endDate).format("DD MMMM YYYY");
	const totalNights = dayjs(endDate).diff(dayjs(startDate), "day");

	// Function to handle image navigation
	const handleNextImage = () => {
		setCurrentImageIndex((prevIndex) =>
			prevIndex === roomImages.length - 1 ? 0 : prevIndex + 1
		);
	};

	const handlePrevImage = () => {
		setCurrentImageIndex((prevIndex) =>
			prevIndex === 0 ? roomImages.length - 1 : prevIndex - 1
		);
	};

	return (
		<div className="w-full h-auto border border-lightGrey mx-auto rounded-[10px] shadow-lg overflow-hidden bg-white">
			<div className="p-6 space-y-4">
				<h2 className="text-2xl font-bold">Check your selection</h2>
				<div className="relative w-full flex items-center justify-between">
					{/* Left Arrow */}
					<button
						onClick={handlePrevImage}
						className="absolute left-0 z-10 flex items-center justify-center bg-black/50 rounded-full p-2 ml-2"
					>
						<FontAwesomeIcon
							icon={faChevronLeft}
							className="w-6 h-6 text-white"
						/>
					</button>

					{/* Image Container */}
					<div className="flex-grow relative flex justify-center">
						<img
							className="w-full h-auto object-cover"
							src={roomImages[currentImageIndex]} // Display current image
							alt={room.roomType}
						/>
					</div>

			

					{/* Right Arrow */}
					<button
						onClick={handleNextImage}
						className="absolute right-0 z-10 flex items-center justify-center bg-black/50 rounded-full p-2 mr-2"
					>
						<FontAwesomeIcon
							icon={faChevronRight}
							className="w-6 h-6 text-white"
						/>
					</button>
				</div>

				<div>
					<h3 className="text-xl font-semibold">
						{hotel.name} - {room.roomType}
					</h3>
				</div>
				<div className="flex items-center text-darkGrey">
					<FontAwesomeIcon
						icon={faMapMarkerAlt}
						className="w-4 h-4 mr-1"
					/>
					<p>
						{hotel.location.city}, {hotel.location.country}
					</p>
				</div>
				<div className="bg-opacityLightBlue p-4 rounded-lg space-y-2">
					<div className="flex justify-between">
						<div className="flex flex-col space-y-1">
							<div className="flex space-x-3">
								<p className="w-20">Check in: </p>
								<span className="ml-3">
									{hotel.checkInTime}, {checkinDate}
								</span>
							</div>
							<div className="flex space-x-3">
								<p className="w-20">Check out:</p>
								<span className="ml-3">
									{hotel.checkOutTime}, {checkoutDate}
								</span>
							</div>
						</div>

						{/* Grå linje mellan enheterna */}
						<div className="flex items-center space-x-2">
							<div className="border-l border-darkGrey h-[60px] mr-2"></div>
							<div>
								<span className="text-[26px] font-bold">
									€{room.pricePerNight * totalNights}
								</span>
								<p className="text-[18px] text-gray-500">
									{adults} {adults === 1 ? "Adult" : "Adults"} /{" "}
									{totalNights} {totalNights === 1 ? "Night" : "Nights"}
								</p>
								<p className="text-[14px] text-gray-500">
									{children} {children === 1 ? "Child" : "Children"}
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="flex justify-between items-end mt-4">
					<div className="ml-auto flex flex-col items-end">
						{/* Bokningsknapp */}
						<Button size="large" buttonText={"Proceed"} />

						<p className="text-sm mt-2 text-Black">Other options</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SelectionOverview;
