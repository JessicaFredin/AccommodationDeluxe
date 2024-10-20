/* eslint-disable no-unused-vars */
// Home.jsx
import React from "react";
import Header from "../components/Header";
import OfferSlider from "../components/OfferSlider";
import Recommendations from "../components/Recommendations";
import TrendingDestinations from "../components/TrendingDestinations";
import SearchBar from "../components/SearchBar";
import { useNavigate } from "react-router-dom";

function HomePage() {
	const navigate = useNavigate();

	const handleSearch = ({
		location,
		startDate,
		endDate,
		adults,
		children,
		rooms,
	}) => {
		// Update the URL with the search parameters
		const params = new URLSearchParams({
			location,
			checkin: startDate,
			checkout: endDate,
			adults: adults.toString(),
			children: children.toString(),
			rooms: rooms.toString(),
		});
		navigate(`/hotels?${params.toString()}`);
	};
	return (
		<div>
			{/* Header and Search Bar */}
			<div className="relative">
				<Header
					size="large"
					headingText={
						<>
							{"Your key to the world's best hotels"} <br />
							{"- book fast, travel smart"}
						</>
					}
				/>
				<div className="absolute bottom-[-50px] w-full flex justify-center">
					{/* Pass the handleSearch function to the SearchBar */}
					<SearchBar onSearch={handleSearch} />
				</div>
			</div>
			<OfferSlider />
			<Recommendations />
			<TrendingDestinations />
		</div>
	);
}

export default HomePage;
