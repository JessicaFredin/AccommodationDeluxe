// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useHotelData } from "../contexts/HotelDataContext";
import OfferCard from "./OfferCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronLeft,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

// Utility function to chunk an array into groups of two
const chunkArray = (array, chunkSize) => {
	const chunks = [];
	for (let i = 0; i < array.length; i += chunkSize) {
		chunks.push(array.slice(i, i + chunkSize));
	}
	return chunks;
};

function Slider() {
	const { offers } = useHotelData(); // Fetch offers from context

	// Chunk the offers array into groups of two
	const offerChunks = chunkArray(offers, 2);

	const [currentSlide, setCurrentSlide] = useState(0);

	// Go to the next slide
	const nextSlide = () => {
		if (currentSlide < offerChunks.length - 1) {
			setCurrentSlide(currentSlide + 1);
		}
	};

	// Go to the previous slide
	const prevSlide = () => {
		if (currentSlide > 0) {
			setCurrentSlide(currentSlide - 1);
		}
	};

	// Handle dot click for pagination
	const goToSlide = (index) => {
		setCurrentSlide(index);
	};

	return (
		<div className="my-20 w-[80%] m-auto relative">
			<h2 className="text-2xl font-semibold">Offers</h2>
			<p className="text-shadyBlack">
				Promotions, deals, and special offers for you
			</p>

			{/* Outer container for arrows and slider */}
			<div className="relative">
				{/* Slider Container with overflow hidden */}
				<div className="relative flex overflow-hidden w-full">
					{/* Slider Content */}
					<div
						className="flex w-full transition-transform duration-500"
						style={{
							transform: `translateX(-${currentSlide * 100}%)`,
						}}
					>
						{offerChunks.map((offerChunk, index) => (
							<div
								key={index}
								className="min-w-full flex justify-center space-x-7 mt-5"
							>
								{offerChunk.map((offer) => (
									<OfferCard
										key={offer.id}
										title={offer.title}
										description={offer.description}
										validUntil={offer.validUntil}
										backgroundImage={offer.backgroundImage}
										overlay={offer.overlay}
										imageType={offer.imageType}
										ctaText={offer.ctaText}
									/>
								))}
							</div>
						))}
					</div>
				</div>

				{/* Left Arrow */}
				{currentSlide > 0 && (
					<button
						onClick={prevSlide}
						className="absolute -left-12 top-1/2 transform -translate-y-1/2 p-2 rounded-full z-20"
					>
						<FontAwesomeIcon icon={faChevronLeft} />
					</button>
				)}

				{/* Right Arrow */}
				{currentSlide < Math.ceil(offers.length / 2) - 1 && (
					<button
						onClick={nextSlide}
						className="absolute -right-12 top-1/2 transform -translate-y-1/2 p-2 rounded-full z-20"
					>
						<FontAwesomeIcon icon={faChevronRight} />
					</button>
				)}
			</div>

			{/* Pagination Dots */}
			<div className="flex justify-center mt-4">
				{Array.from({ length: Math.ceil(offers.length / 2) }).map(
					(_, index) => (
						<span
							key={index}
							onClick={() => goToSlide(index)}
							className={`cursor-pointer mx-1 w-3 h-3 rounded-full ${
								index === currentSlide
									? "bg-primaryDarkBlue"
									: "bg-opacityLightBlue"
							}`}
						></span>
					)
				)}
			</div>
		</div>
	);
}

export default Slider;
