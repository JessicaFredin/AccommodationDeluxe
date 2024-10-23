/* eslint-disable react-hooks/exhaustive-deps */
// // Hotels.jsx
// // eslint-disable-next-line no-unused-vars
// import React, { useState, useEffect } from "react";
// import { useHotelData } from "../contexts/HotelDataContext";
// import { useLocation, useNavigate } from "react-router-dom";
// import { useSearchParamsContext } from "../contexts/SearchParamsContext"; // Importerar context hook
// import SearchBar from "../components/SearchBar";
// import HorizontalHotelCard from "../components/HorizontalHotelCard";
// import Header from "../components/Header";
// import FilterContainer from "../components/Filters/FilterContainer";
// import dayjs from "dayjs";

// // Sätter dagens datum och morgondagens datum som standardvärden
// const today = dayjs().format("YYYY-MM-DD");
// const tomorrow = dayjs().add(1, "day").format("YYYY-MM-DD");

// function HotelsPage() {
//   const { search } = useLocation(); // Hämtar sökparametrar från URL
//   const { hotels, error } = useHotelData();
//   const navigate = useNavigate();
//   const { searchParams, setSearchParams } = useSearchParamsContext(); // Använder context för sökparametrar
//   const [filteredHotels, setFilteredHotels] = useState([]); // Sätter state för filtrerade hotell

//   // Parse URL-sökparametrar och uppdaterar sökparametrar i context
//   useEffect(() => {
//     const params = new URLSearchParams(search);
//     const location = params.get("location") || "";
//     const checkin = params.get("checkin") || today;
//     const checkout = params.get("checkout") || tomorrow;
//     const adults = parseInt(params.get("adults")) || 2;
//     const children = parseInt(params.get("children")) || 0;
//     const rooms = parseInt(params.get("rooms")) || 1;

//    // Uppdaterar sökparametrar i context med värden från URL
//     setSearchParams({
//       location,
//       startDate: checkin,
//       endDate: checkout,
//       adults,
//       children,
//       rooms,
//     });

//     // Filtrera hotellen baserat på sökparametrarna
//     if (hotels && hotels.length > 0) {
//       if (location) {
//         const results = hotels.filter((hotel) => {
//           const hotelLocation = `${hotel.location.city}, ${hotel.location.country}`.toLowerCase();
//           return hotelLocation.includes(location.toLowerCase());
//         });
//         setFilteredHotels(results);
//       } else {
//         setFilteredHotels(hotels);
//       }
//     }
//   }, [search, hotels, setSearchParams]);

//   // Hantera sökningen från sökfältet och uppdatera URL och context
//   const handleSearch = ({ location, startDate, endDate, adults, children, rooms }) => {
//     const params = new URLSearchParams({
//       location,
//       checkin: startDate,
//       checkout: endDate,
//       adults: adults.toString(),
//       children: children.toString(),
//       rooms: rooms.toString(),
//     });

//     // Uppdaterar URLen
//     navigate(`/hotels?${params.toString()}`);
//   };

//   if (error) {
//     return <p className="text-center text-accentPink">Error loading hotels: {error.message}</p>;
//   }

//   return (
//     <div>
//       {/* Header och Search Bar */}
//       <div className="relative">
//         <Header headingText="Hotels" size="medium" />
//         <div className="absolute bottom-[-50px] w-full flex justify-center">
//           <SearchBar
//             onSearch={handleSearch}
//             initialLocation={searchParams.location}
//             initialStartDate={searchParams.startDate}
//             initialEndDate={searchParams.endDate}
//             initialAdults={searchParams.adults}
//             initialChildren={searchParams.children}
//             initialRooms={searchParams.rooms}
//           />
//         </div>
//       </div>

//       {/* Huvudinnehållet Layout */}
//       <div className="flex justify-center pt-[100px]">
//         {/* Filter Container till vänster */}
//         <div className="mr-8">
//           <FilterContainer />
//         </div>

//         {/* Höger sida hotelkort sektion */}
//         <div className="flex flex-col gap-y-8">
//           {filteredHotels && filteredHotels.length > 0 ? (
//             filteredHotels.map((hotel) => (
//               <HorizontalHotelCard
//                 key={hotel.id}
//                 hotel={hotel} // Skickar hoteldata till hotelkorten
//               />
//             ))
//           ) : (
//             <p className="text-center">No hotels found matching the criteria.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HotelsPage;







// HotelsPage.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useHotelData } from "../contexts/HotelDataContext";
import { useLocation, useNavigate } from "react-router-dom";
import { useSearchParamsContext } from "../contexts/SearchParamsContext";
import SearchBar from "../components/SearchBar";
import HorizontalHotelCard from "../components/HorizontalHotelCard";
import Header from "../components/Header";
import FilterContainer from "../components/Filters/FilterContainer";
import dayjs from "dayjs";

const today = dayjs().format("YYYY-MM-DD");
const tomorrow = dayjs().add(1, "day").format("YYYY-MM-DD");

function HotelsPage() {
	const { search } = useLocation();
	const { hotels, error } = useHotelData();
	const navigate = useNavigate();
	const { searchParams, setSearchParams } = useSearchParamsContext();
	const [filteredHotels, setFilteredHotels] = useState([]);
	const [filters, setFilters] = useState({
		rating: [],
		price: [0, 500],
		typeOfHotel: [],
		activities: [],
		foodAndDrinks: [],
	});

	// Default values for initial search parameters (same as HomePage)
	const defaultSearchParams = {
		location: "",
		startDate: today,
		endDate: tomorrow,
		adults: 2,
		children: 0,
		rooms: 1,
	};

	useEffect(() => {
		const params = new URLSearchParams(search);
		const location = params.get("location") || defaultSearchParams.location;
		const checkin = params.get("checkin") || defaultSearchParams.startDate;
		const checkout = params.get("checkout") || defaultSearchParams.endDate;
		const adults =
			parseInt(params.get("adults")) || defaultSearchParams.adults;
		const children =
			parseInt(params.get("children")) || defaultSearchParams.children;
		const rooms =
			parseInt(params.get("rooms")) || defaultSearchParams.rooms;

		setSearchParams({
			location,
			startDate: checkin,
			endDate: checkout,
			adults,
			children,
			rooms,
		});

		// Apply filtering logic based on filters state
		if (hotels && hotels.length > 0) {
			let results = hotels;

			// Filter by price
			results = results.filter(
				(hotel) =>
					hotel.pricePerNight >= filters.price[0] &&
					hotel.pricePerNight <= filters.price[1]
			);

			// Filter by rating
			if (filters.rating.length) {
				results = results.filter((hotel) =>
					filters.rating.includes(Math.round(hotel.rating))
				);
			}

			// Filter by hotel type
			if (filters.typeOfHotel.length) {
				results = results.filter((hotel) =>
					filters.typeOfHotel.includes(hotel.typeOfHotel)
				);
			}

			// Filter by activities

			// Filter by activities with proper array check and ensure `category.name` exists
			if (filters.activities.length) {
				results = results.filter(
					(hotel) =>
						Array.isArray(hotel.activities?.categories) &&
						filters.activities.every((activity) =>
							hotel.activities.categories.some(
								(category) =>
									category.name &&
									category.name.toLowerCase().trim() ===
										activity.toLowerCase().trim() // Ensure category.name exists
							)
						)
				);
			}

			// Filter by food and drinks
			if (filters.foodAndDrinks.length) {
				results = results.filter((hotel) =>
					filters.foodAndDrinks.every((food) =>
						hotel.foodAndDrinks.includes(food)
					)
				);
			}

			setFilteredHotels(results);
		}
	}, [search, setSearchParams, hotels, filters]);

	const handleSearch = ({
		location,
		startDate,
		endDate,
		adults,
		children,
		rooms,
	}) => {
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

	if (error) {
		return (
			<p className="text-center text-accentPink">
				Error loading hotels: {error.message}
			</p>
		);
	}

	return (
		<div>
			<div className="relative">
				<Header headingText="Hotels" size="medium" />
				<div className="absolute bottom-[-50px] w-full flex justify-center">
					<SearchBar
						onSearch={handleSearch}
						initialLocation={
							searchParams.location ||
							defaultSearchParams.location
						}
						initialStartDate={
							searchParams.startDate ||
							defaultSearchParams.startDate
						}
						initialEndDate={
							searchParams.endDate || defaultSearchParams.endDate
						}
						initialAdults={
							searchParams.adults || defaultSearchParams.adults
						}
						initialChildren={
							searchParams.children ||
							defaultSearchParams.children
						}
						initialRooms={
							searchParams.rooms || defaultSearchParams.rooms
						}
					/>
				</div>
			</div>

			<div className="flex justify-center pt-[100px]">
				<div className="mr-8">
					<FilterContainer setFilters={setFilters} />
				</div>
				<div className="flex flex-col gap-y-8">
					{filteredHotels && filteredHotels.length > 0 ? (
						filteredHotels.map((hotel) => (
							<HorizontalHotelCard key={hotel.id} hotel={hotel} />
						))
					) : (
						<p>No hotels match your filters.</p>
					)}
				</div>
			</div>
		</div>
	);
}

export default HotelsPage;
