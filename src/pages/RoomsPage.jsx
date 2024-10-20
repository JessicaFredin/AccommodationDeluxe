// RoomsPage.jsx
/* eslint-disable no-unused-vars */
import React from 'react';
import HorizontalRoomType from '../components/HorizontalRoomType';
import InfoBoxSpecificHotel from '../components/InfoBoxSpecificHotel';
import HotelNavBar from "../components/HotelNavBar";
import RoomCardsSection from '../components/RoomCardsSection';
import { useParams } from 'react-router-dom';
import { useHotelData } from '../contexts/HotelDataContext';
import PropTypes from "prop-types";
import HotelHeroSection from '../components/HotelHeroSection';

function RoomsPage() {
	const { hotelId } = useParams(); // Get hotelId from the URL
	const { hotels } = useHotelData(); // Get hotel data from context

	// Handle loading state
	if (!hotels) {
		return <p>Loading hotel data...</p>;
	}

	// Find the specific hotel based on hotelId
	const hotel = hotels.find((hotel) => hotel.id === Number(hotelId));

	// Handle cases where the hotel data is not found
	if (!hotel) {
		return <p>Hotel information not found.</p>;
	}

	// Now you can get the rooms data from the hotel
	const { rooms } = hotel;


	return (
		<div>

			{/* Main Layout */}
			<div className="w-[85%] mx-auto mt-8">
				{/* Description Section */}
				<div className="flex justify-between w-[85%] mx-auto mt-8">
					<div className="w-[60%] pr-8">
						<h2 className="text-3xl font-bold mb-4">Rooms</h2>
						<p className="text-lg text-black py-3 mb-9">
							{hotel.roomDescription}
						</p>
						{/* Rooms */}
						<div className="w-[60%] space-y-6">
							{rooms.map((room, roomIndex) => (
								<HorizontalRoomType
									key={roomIndex}
									room={room}
									roomType={room.roomType}
									imgUrl={room.imgUrl}
									sqm={room.sqm}
									description={room.description}
								/>
							))}
						</div>
					</div>

					<InfoBoxSpecificHotel
						hotelId={hotelId}
						title={"In all rooms/suites:"}
						amenities={hotel.amenities}
					/>
				</div>
			</div>
			<RoomCardsSection />
		</div>
	);
}

// PropTypes for the RoomsPage
RoomsPage.propTypes = {
  hotel: PropTypes.shape({
    name: PropTypes.string,
    rooms: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        roomType: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        imgUrl: PropTypes.string.isRequired,
        sqm: PropTypes.string, // Assuming sqm (square meters) is a string
      })
    ),
    amenities: PropTypes.arrayOf(PropTypes.string), // Assuming amenities is an array of strings
  }),
};

export default RoomsPage;

