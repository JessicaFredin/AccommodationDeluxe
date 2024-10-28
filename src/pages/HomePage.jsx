/* eslint-disable no-unused-vars */
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
		//  Uppdatera URL med sökparametrarna
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
			{/* Header and Sökbar */}
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
					{/* Skickar handleSearch fuktionen till SearchBar */}
					<SearchBar onSearch={handleSearch} />
				</div>
			</div>

			<div className="mt-16">
				<OfferSlider />
			</div>
			<div className="w-11/12 max-w-7xl mx-auto">
				<div>
					<Recommendations />
				</div>
				<div>
					<TrendingDestinations />
				</div>
			</div>
		</div>
	);
}

export default HomePage;