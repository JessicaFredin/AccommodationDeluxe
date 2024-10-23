
import { useParams } from "react-router-dom";
import { useHotelData } from "../contexts/HotelDataContext";

const useHotelDetails = () => {
	const { hotelId } = useParams(); // Get hotelId from the URL
	const { hotels, error } = useHotelData();

	// Handle error and loading states
	if (error) {
		return { error, loading: false, hotel: null };
	}
	if (!hotels) {
		return {
			error: null,
			loading: true,
			hotel: null,
		};
	}

	// Find the specific hotel by hotelId
	const hotel = hotels.find((hotel) => hotel.id === Number(hotelId));

	// Handle case where the hotel is not found
	if (!hotel) {
		return { hotel: null, loading: false, error: "Hotel not found" };
	}

	return { hotel, loading: false, error: null };
};

export default useHotelDetails;
