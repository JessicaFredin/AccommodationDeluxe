/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useHotelData } from '../contexts/HotelDataContext';

//Tar emot props för att returnera specific information för specifik vy och hotel
function InfoBoxSpecificHotel({ hotelId }) {
	const { hotels, error } = useHotelData();

	// Handle loading and error states
	if (error) {
		return <p>Error loading hotel data: {error.message}</p>;
	}

	if (!hotels) {
		return <p>Loading hotel data...</p>;
	}

	// Convert hotelId to Number for comparison
	const hotel = hotels.find((hotel) => hotel.id === Number(hotelId));

	if (!hotel) {
		return <p>Hotel information not found.</p>;
	}

	return (
		<div className="p-4 bg-opacityLightBlue rounded-[10px] shadow-lg w-[400px] h-[500px]">
			<h3 className="text-[20px] font-semibold mb-3">
				{hotel.infoBox.title}
			</h3>
			<ul className="list-disc list-inside text-black space-y-1">
				{hotel.infoBox.infoBoxAdditionalInformation.map(
					(amenity, index) => (
						<li className="text-[16px]" key={index}>
							{amenity}
						</li>
					)
				)}
			</ul>

			{hotel.infoBox.optionsTitle && (
				<h3 className="text-[18px] font-semibold my-4">
					{hotel.infoBox.optionsTitle}
				</h3>
			)}


			{hotel.infoBox.extraInformation.length > 0 && (
				<ul className="list-disc list-inside text-black space-y-1">
					{hotel.infoBox.extraInformation.map((amenity, index) => (
						<li className="text-[16px]" key={index}>
							{amenity}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}

export default InfoBoxSpecificHotel;
