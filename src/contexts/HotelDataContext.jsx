/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
// HotelDataContext.js
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const HotelDataContext = createContext();

export function HotelDataProvider({ children }) {
	const [hotelData, setHotelData] = useState([]);
	const [offers, setOffers] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		// Fetch hotel data
		axios
			.get("/data/hotels.json")
			.then((response) => {
				console.log("Fetched hotel data in context:", response.data);
				setHotelData(response.data.hotels);
				setOffers(response.data.offers);  // Fetch offers from the same JSON file
			})
			.catch((error) => {
				console.error("Error fetching the data in context", error);
				setError(error);
			});
	}, []);

	return (
		<HotelDataContext.Provider value={{ hotels: hotelData, offers, error }}>
			{children}
		</HotelDataContext.Provider>
	);
}

export function useHotelData() {
	return React.useContext(HotelDataContext);
}
