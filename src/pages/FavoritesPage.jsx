
// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "../components/Header";
import VerticalHotelCard from "../components/VerticalHotelCard";
import { useFavorites } from "../contexts/FavoritesContext";
import { useHotelData } from "../contexts/HotelDataContext";

function Favorites() {
	const { favorites } = useFavorites();
	const { hotels, error } = useHotelData(); // Hämtar den fullständiga listan av hotell från kontext

	if (!hotels || hotels.length === 0) {
		return <p>Loading hotels...</p>;
	}

	if (error) {
		return <p>Error loading hotels: {error.message}</p>;
	}

	// Matchar favoriter med fullständig hotellsdata
	const favoriteHotels = favorites
		.map((favorite) => hotels.find((hotel) => hotel.id === favorite.id))
		.filter((hotel) => hotel); // Filtrerar bort odefinierade matchningar

	return (
		<div>
			{/* Rubriker för vyn */}
			<Header headingText="Favorites" size="medium" />

			{/* Titelsektionen */}
			<div className="text-center my-8">
				<h2 className="text-3xl font-bold">
					Your Liked Trips, All in One Place
				</h2>
				<p className="text-lg mt-2">
					Here you can find all your saved favorites in one place.
					Easily revisit and manage your top picks whenever you like.
				</p>
			</div>

			{/* Sektionen för alla kort */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-[80%] mx-auto">
				{favoriteHotels.length > 0 ? (
					favoriteHotels.map((hotel) => (
						<VerticalHotelCard
							key={hotel.id}
							hotelId={hotel.id}
							hotelName={hotel.name}
							imgUrl={hotel.imgUrl}
							city={hotel.location.city}
							country={hotel.location.country}
							description={hotel.description}
							rating={hotel.rating}
							startingFromPrice={hotel.starting_from_price}
						/>
					))
				) : (
					<p>No favorites added yet.</p>
				)}
			</div>
		</div>
	);
}

export default Favorites;
