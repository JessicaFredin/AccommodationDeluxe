// // // eslint-disable-next-line no-unused-vars
// // import React from "react";
// // import Header from "../components/Header";
// // import VerticalHotelCard from "../components/VerticalHotelCard";
// // import { useFavorites } from "../contexts/FavoritesContext";
// // import { useHotelData } from "../contexts/HotelDataContext";

// // function FavoritesPage() {
// //      const { hotels } = useHotelData(); // Access the full list of hotels
// //     const { favorites } = useFavorites();
// //     console.log("Favorites:", favorites);

// // 		// Match favorites with the full hotel data
// // 		const favoriteHotels = favorites.map((favoriteId) =>
// // 			hotels.find((hotel) => hotel.id === favoriteId)
// // 		);

// // 	return (
// // 		<div>
// // 			{/* Header for the whole page */}
// // 			<Header headingText="Favorites" size="medium" />

// // 			{/* Title Section (as per your image) */}
// // 			<div className="text-center my-8">
// // 				<h2 className="text-3xl font-bold">
// // 					Your Liked Trips, All in One Place
// // 				</h2>
// // 				<p className="text-lg mt-2">
// // 					Here you can find all your saved favorites in one place.
// // 					Easily revisit and manage your top picks whenever you like.
// // 				</p>
// // 			</div>

// // 			{/* Cards Section */}
// // 			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-[80%] mx-auto">
// // 				{favoriteHotels.length > 0 ? (
// // 					favoriteHotels.map((hotel) =>
// // 						hotel ? (
// //                             <VerticalHotelCard key={hotel.id} hotel={hotel} imgUrl={hotel.imgUrl } />
// // 						) : null
// // 					)
// // 				) : (
// // 					<p>No favorites added yet.</p>
// // 				)}
// // 			</div>
// // 		</div>
// // 	);
// // }

// // export default FavoritesPage;

// // eslint-disable-next-line no-unused-vars
// import React from "react";
// import Header from "../components/Header";
// import VerticalHotelCard from "../components/VerticalHotelCard";
// import { useFavorites } from "../contexts/FavoritesContext";
// import { useHotelData } from "../contexts/HotelDataContext";

// function FavoritesPage() {
// 	const { favorites } = useFavorites();
// 	const { hotels, error } = useHotelData(); // Get the hotel data from your context
// 	console.log("Hotels ID: ", hotels[0].id);
// 	console.log("Full Hotels Object: ", hotels);
// 	console.log("Favorites: ", favorites);
// 	console.log("Hotels Object Type:", Array.isArray(hotels)); // Should be true
// 	console.log("Hotels Object:", hotels); // Log entire object to inspect

// 	hotels.forEach((hotel, index) => {
// 		console.log(`Hotel ${index} ID: `, hotel.id);
// 	});

// 	hotels.forEach((hotel) => {
// 		console.log("Comparing Hotel ID:", hotel.id);
// 	});
// 	console.log("Favorites IDs:", favorites);

// 	// // Filter hotels based on the favorites IDs
// 	// const favoriteHotels = hotels.filter((hotel) =>
// 	// 	favorites.includes(hotel.id)
// 	// );

// 	// const favoriteHotels = hotels.filter(
// 	// 	(hotel) => hotel && favorites.includes(hotel.id)
// 	// );

// 	if (!hotels || hotels.length === 0) {
// 		return <p>Loading hotels...</p>;
// 	}

// 	if (error) {
// 		return <p>Error loading hotels: {error.message}</p>;
// 	}

// 	console.log("2 Full Hotels Object: ", hotels);

// 	// const favoriteHotels = hotels.filter((hotel) =>
// 	// 	favorites.includes(hotel.id)
// 	// );

// 	// Filter hotels based on the favorites IDs (ensure IDs are the same type)
// 	const favoriteHotels = hotels.filter((hotel) =>
// 		favorites.some((fav) => Number(fav.id) === Number(hotel.id))
// 	);
// 	console.log("Filtered Favorite Hotels: ", favoriteHotels);

// 	return (
// 		<div>
// 			{/* Header for the whole page */}
// 			<Header headingText="Favorites" size="medium" />

// 			{/* Title Section (as per your image) */}
// 			<div className="text-center my-8">
// 				<h2 className="text-3xl font-bold">
// 					Your Liked Trips, All in One Place
// 				</h2>
// 				<p className="text-lg mt-2">
// 					Here you can find all your saved favorites in one place.
// 					Easily revisit and manage your top picks whenever you like.
// 				</p>
// 			</div>

// 			{/* Cards Section */}
// 			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-[80%] mx-auto">
// 				{favoriteHotels.length > 0 ? (
// 					favoriteHotels.map(
// 						(hotel) =>
// 							hotel && (
// 								<VerticalHotelCard
// 									key={hotel.id}
// 									hotelId={hotel.id}
// 									hotelName={hotel.name}
// 									imgUrl={hotel.imgUrl}
// 									city={hotel.location.city}
// 									country={hotel.location.country}
// 									description={hotel.description}
// 									rating={hotel.rating}
// 									startingFromPrice={hotel.startingFromPrice}
// 								/>
// 							)
// 					)
// 				) : (
// 					<p>No favorites added yet.</p>
// 				)}
// 			</div>
// 		</div>
// 	);
// }

// export default FavoritesPage;

// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "../components/Header";
import VerticalHotelCard from "../components/VerticalHotelCard";
import { useFavorites } from "../contexts/FavoritesContext";
import { useHotelData } from "../contexts/HotelDataContext";

function Favorites() {
	const { favorites } = useFavorites();
	const { hotels, error } = useHotelData(); // Access the full list of hotels from context

	if (!hotels || hotels.length === 0) {
		return <p>Loading hotels...</p>;
	}

	if (error) {
		return <p>Error loading hotels: {error.message}</p>;
	}

	// Match favorites with the full hotel data
	const favoriteHotels = favorites
		.map((favorite) => hotels.find((hotel) => hotel.id === favorite.id))
		.filter((hotel) => hotel); // Filter out undefined matches

	return (
		<div>
			{/* Header for the whole page */}
			<Header headingText="Favorites" size="medium" />

			{/* Title Section (as per your image) */}
			<div className="text-center my-8">
				<h2 className="text-3xl font-bold">
					Your Liked Trips, All in One Place
				</h2>
				<p className="text-lg mt-2">
					Here you can find all your saved favorites in one place.
					Easily revisit and manage your top picks whenever you like.
				</p>
			</div>

			{/* Cards Section */}
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
