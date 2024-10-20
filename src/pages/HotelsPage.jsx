/* eslint-disable no-unused-vars */
// /* eslint-disable react/no-children-prop */
// /* eslint-disable no-unused-vars */
// // Hotels.jsx
// import React, { useState, useEffect } from "react";
// import { useHotelData } from "../contexts/HotelDataContext";
// import { useLocation, useNavigate } from "react-router-dom";
// import SearchBar from "../components/SearchBar";
// import HorizontalHotelCard from "../components/HorizontalHotelCard";
// import Header from "../components/Header";
// import FilterContainer from "../components/Filters/FilterContainer";
// import dayjs from "dayjs";

// const today = dayjs().format("YYYY-MM-DD");
// const tomorrow = dayjs().add(1, "day").format("YYYY-MM-DD");

// function HotelsPage() {
// 	const { search } = useLocation();
// 	const { hotels, error } = useHotelData();
// 	const navigate = useNavigate();
// 	const [filteredHotels, setFilteredHotels] = useState([]);
// 	const [searchParams, setSearchParams] = useState({
// 		startDate: today,
// 		endDate: tomorrow,
// 		adults: 2,
// 		children: 0,
// 		rooms: 1,
// 	});

// 	// Parse URL search params
// 	useEffect(() => {
// 		const params = new URLSearchParams(search);
// 		const location = params.get("location") || "";
// 		const checkin = params.get("checkin") || "";
// 		const checkout = params.get("checkout") || "";
// 		const adults = parseInt(params.get("adults")) || 2;
// 		const children = parseInt(params.get("children")) || 0;
// 		const rooms = parseInt(params.get("rooms")) || 1;

// 		// Update searchParams state with parsed URL values
// 		setSearchParams({
// 			location,
// 			startDate: checkin,
// 			endDate: checkout,
// 			adults,
// 			children,
// 			rooms,
// 		});

// 		// if (location || checkin || checkout || adults || children || rooms) {
// 		// 	// Apply filters to the hotelData based on the search params
// 		// 	const results = hotels.filter((hotel) => {
// 		// 		// Filter logic based on location, dates, guests, etc.
// 		// 		return (
// 		// 			hotel.location.city.toLowerCase() ===
// 		// 				location.toLowerCase() || true
// 		// 		);
// 		// 	});
// 		// 	setFilteredHotels(results);
// 		// } else {
// 		// 	setFilteredHotels(hotels); // No filters, show all hotels
// 		// }

// 		if (hotels && hotels.length > 0) {
// 			if (searchParams.location) {
// 				const results = hotels.filter((hotel) => {
// 					// Implement your filtering logic based on searchParams
// 					const hotelLocation =
// 						`${hotel.location.city}, ${hotel.location.country}`.toLowerCase();
// 					return hotelLocation.includes(
// 						searchParams.location.toLowerCase()
// 					);
// 				});
// 				setFilteredHotels(results);
// 			} else {
// 				// No filters, show all hotels
// 				setFilteredHotels(hotels);
// 			}
// 		}
// 	}, [search, searchParams, hotels]);

// 	// // Initialize filteredHotels with all hotels when hotels data is loaded
// 	// useEffect(() => {
// 	// 	if (hotels && hotels.length > 0) {
// 	// 		setFilteredHotels(hotels);
// 	// 	}
// 	// }, [hotels]);

// 	// Function to handle search results
// 	const handleSearch = ({
// 		location,
// 		startDate,
// 		endDate,
// 		adults,
// 		children,
// 		rooms,
// 	}) => {
// 		// Update the URL with the search parameters
// 		const params = new URLSearchParams({
// 			location,
// 			checkin: startDate,
// 			checkout: endDate,
// 			adults: adults.toString(),
// 			children: children.toString(),
// 			rooms: rooms.toString(),
// 		});
// 		navigate(`/hotels?${params.toString()}`);
// 	};
// 	// // Function to handle search results
// 	// const handleSearch = ({
// 	// 	results,
// 	// 	startDate,
// 	// 	endDate,
// 	// 	adults,
// 	// 	children,
// 	// 	rooms,
// 	// }) => {
// 	// 	setFilteredHotels(results);
// 	// 	setSearchParams({ startDate, endDate, adults, children, rooms });
// 	// };

// 	if (error) {
// 		return (
// 			<p className="text-center text-accentPink">
// 				Error loading hotels: {error.message}
// 			</p>
// 		);
// 	}

// 	return (
// 		<div>
// 			{/* Header and Search Bar */}
// 			<div className="relative">
// 				<Header headingText="Hotels" size="medium" />
// 				<div className="absolute bottom-[-50px] w-full flex justify-center">
// 					{/* Pass the handleSearch function to the SearchBar */}
// 					<SearchBar
// 						onSearch={handleSearch}
// 						initialLocation={searchParams.location}
// 						initialStartDate={searchParams.startDate}
// 						initialEndDate={searchParams.endDate}
// 						initialAdults={searchParams.adults}
// 						initialChildren={searchParams.children}
// 						initialRooms={searchParams.rooms}
// 					/>
// 				</div>
// 			</div>

// 			{/* Main Content Layout */}
// 			<div className="flex justify-center pt-[100px]">
// 				{/* Left-side Filter Container */}
// 				<div className="mr-8">
// 					<FilterContainer />
// 				</div>

// 				{/* Right-side Hotel Cards List */}
// 				<div className="flex flex-col gap-y-8">
// 					{filteredHotels && filteredHotels.length > 0 ? (
// 						filteredHotels.map((hotel) => (
// 							<HorizontalHotelCard
// 								key={hotel.id}
// 								hotel={hotel} // Pass the hotel data to the card component
// 								startDate={searchParams.startDate}
// 								endDate={searchParams.endDate}
// 								adults={searchParams.adults}
// 								children={searchParams.children}
// 								rooms={searchParams.rooms}
// 							/>
// 						))
// 					) : (
// 						<p className="text-center">
// 							No hotels found matching the criteria.
// 						</p>
// 					)}
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

// export default HotelsPage;










// Hotels.jsx
import React, { useState, useEffect } from "react";
import { useHotelData } from "../contexts/HotelDataContext";
import { useLocation, useNavigate } from "react-router-dom";
import { useSearchParamsContext } from "../contexts/SearchParamsContext"; // Import the context hook
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
  const { searchParams, setSearchParams } = useSearchParamsContext(); // Use context for search parameters
  const [filteredHotels, setFilteredHotels] = useState([]);

  // Parse URL search params and update the context state
  useEffect(() => {
    const params = new URLSearchParams(search);
    const location = params.get("location") || "";
    const checkin = params.get("checkin") || today;
    const checkout = params.get("checkout") || tomorrow;
    const adults = parseInt(params.get("adults")) || 2;
    const children = parseInt(params.get("children")) || 0;
    const rooms = parseInt(params.get("rooms")) || 1;

    // Update searchParams state with parsed URL values
    setSearchParams({
      location,
      startDate: checkin,
      endDate: checkout,
      adults,
      children,
      rooms,
    });

    // Filter hotels based on search parameters
    if (hotels && hotels.length > 0) {
      if (location) {
        const results = hotels.filter((hotel) => {
          const hotelLocation = `${hotel.location.city}, ${hotel.location.country}`.toLowerCase();
          return hotelLocation.includes(location.toLowerCase());
        });
        setFilteredHotels(results);
      } else {
        setFilteredHotels(hotels);
      }
    }
  }, [search, hotels, setSearchParams]);

  // Handle search from the search bar and update the URL and context
  const handleSearch = ({ location, startDate, endDate, adults, children, rooms }) => {
    const params = new URLSearchParams({
      location,
      checkin: startDate,
      checkout: endDate,
      adults: adults.toString(),
      children: children.toString(),
      rooms: rooms.toString(),
    });

    // Update the URL
    navigate(`/hotels?${params.toString()}`);
  };

  if (error) {
    return <p className="text-center text-accentPink">Error loading hotels: {error.message}</p>;
  }

  return (
    <div>
      {/* Header and Search Bar */}
      <div className="relative">
        <Header headingText="Hotels" size="medium" />
        <div className="absolute bottom-[-50px] w-full flex justify-center">
          <SearchBar
            onSearch={handleSearch}
            initialLocation={searchParams.location}
            initialStartDate={searchParams.startDate}
            initialEndDate={searchParams.endDate}
            initialAdults={searchParams.adults}
            initialChildren={searchParams.children}
            initialRooms={searchParams.rooms}
          />
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="flex justify-center pt-[100px]">
        {/* Left-side Filter Container */}
        <div className="mr-8">
          <FilterContainer />
        </div>

        {/* Right-side Hotel Cards List */}
        <div className="flex flex-col gap-y-8">
          {filteredHotels && filteredHotels.length > 0 ? (
            filteredHotels.map((hotel) => (
              <HorizontalHotelCard
                key={hotel.id}
                hotel={hotel} // Pass the hotel data to the card component
              />
            ))
          ) : (
            <p className="text-center">No hotels found matching the criteria.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default HotelsPage;
