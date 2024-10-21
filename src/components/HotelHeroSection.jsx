/* eslint-disable no-unused-vars */

import React from "react";
import PropTypes from "prop-types";

// Hero section for a specific hotel
function HotelHeroSection({ imageUrl, hotelName }) {
	return (
		<div
			className="hero relative bg-cover bg-center"
			style={{
				backgroundImage: `url(${imageUrl})`, // Dynamically use the image URL
				height: "500px",
			}}
		>
			{/* Overlay for opacity and hotel name */}
			<div className="absolute inset-0 bg-black bg-opacity-20 flex justify-center items-center">
				<h1 className="text-white text-6xl font-semibold bg-primaryDarkBlue px-[100px] py-[15px]">
					{hotelName} {/* Dynamically display the hotel name */}
				</h1>
			</div>
		</div>
	);
}

HotelHeroSection.propTypes = {
	imageUrl: PropTypes.string.isRequired,
	hotelName: PropTypes.string.isRequired,
};

export default HotelHeroSection;
