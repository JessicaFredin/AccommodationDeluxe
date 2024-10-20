/* eslint-disable no-unused-vars */
// AboutTheHotel.jsx
import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faXmark,
	faChevronLeft,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import InfoBoxSpecificHotel from "../components/InfoBoxSpecificHotel";
import RoomCardsSection from "../components/RoomCardsSection";
import { useParams } from "react-router-dom";
import { useHotelData } from "../contexts/HotelDataContext";

function AboutTheHotelPage() {
	const { hotelId } = useParams(); // Get hotelId from the URL
	const { hotels, error } = useHotelData(); // Get hotel data from context
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	// Handle loading and error states
	if (error) {
		return <p>Error loading hotel data: {error.message}</p>;
	}

	// Handle the loading state
	if (!hotels) {
		return <p>Loading hotel data...</p>;
	}

	// Find the specific hotel based on hotelId
	const hotel = hotels.find((hotel) => hotel.id === Number(hotelId));

	// Handle cases where the hotel data is not found
	if (!hotel) {
		return <p>Hotel information not found.</p>;
	}

	console.log("Hotel data:", hotel);

	console.log("Hotels data:", hotels);

	// Set default image for the modal
	const images = hotel.images || [];

	const openModal = (index) => {
		setCurrentImageIndex(index);
		setIsModalOpen(true);
	};

	const closeModal = () => setIsModalOpen(false);

	const handleNextImage = () => {
		setCurrentImageIndex((currentImageIndex + 1) % images.length);
	};

	const handlePrevImage = () => {
		setCurrentImageIndex(
			(currentImageIndex - 1 + images.length) % images.length
		);
	};

	return (
		<div>
			{/* Modal for Image Popup */}
			{isModalOpen && images.length > 0 && (
				<div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center">
					<div className="relative">
						<img
							src={images[currentImageIndex]}
							alt="Popup"
							className="w-[600px] h-[400px] object-cover rounded-lg"
						/>
						<button
							onClick={closeModal}
							className="absolute top-5 right-5 text-white text-xl"
						>
							<FontAwesomeIcon icon={faXmark} />
						</button>
						<button
							onClick={handlePrevImage}
							className="absolute top-1/2 left-2 text-white text-xl"
						>
							<FontAwesomeIcon icon={faChevronLeft} />
						</button>
						<button
							onClick={handleNextImage}
							className="absolute top-1/2 right-2 text-white text-xl"
						>
							<FontAwesomeIcon icon={faChevronRight} />
						</button>
					</div>
				</div>
			)}

			{/* Main Layout */}
			<div className="w-[85%] mx-auto mt-8">
				{/* Description Section */}
				<div className="flex justify-between w-[85%] mx-auto mt-8">
					<div className="w-[60%] pr-8">
						<h2 className="text-3xl font-bold mb-4">
							About {hotel.name}
						</h2>
						{hotel.descriptionParagraphs.map(
							(paragraph, index) => (
								<p
									key={index}
									className="text-lg text-black mb-4"
								>
									{paragraph}
								</p>
							)
						)}
					</div>
					<InfoBoxSpecificHotel hotelId={hotelId} />
				</div>

				{/* Image Gallery Section */}
				<div className="w-[85%] mx-auto flex mt-8">
					{/* Main Images */}
					<div className="flex flex-col">
						{images.length > 0 && (
							<img
								src={images[0]}
								alt="Main view"
								className="w-[700px] h-[420px] object-cover rounded-lg cursor-pointer"
								onClick={() => openModal(0)}
							/>
						)}

						{/* Thumbnails below main image, aligned to the left */}
						<div className="flex space-x-4 mt-4">
							{images.map((image, index) => (
								<img
									key={index}
									src={image}
									alt={`Thumbnail ${index}`}
									className="w-[100px] h-[100px] object-cover rounded-lg cursor-pointer"
									onClick={() => openModal(index)}
								/>
							))}
						</div>
					</div>

					{/* Right-side Images */}
					<div className="flex flex-col space-y-4 ml-5">
						{images.length > 1 ? (
							images
								.slice(1, 3)
								.map((image, index) => (
									<img
										key={index + 1}
										src={image}
										alt={`Image ${index + 1}`}
										className="w-[400px] h-[200px] object-cover rounded-lg cursor-pointer"
										onClick={() => openModal(index + 1)}
									/>
								))
						) : (
							<p>No additional images to display.</p>
						)}
					</div>
				</div>
			</div>

			<RoomCardsSection />
		</div>
	);
}

export default AboutTheHotelPage;
