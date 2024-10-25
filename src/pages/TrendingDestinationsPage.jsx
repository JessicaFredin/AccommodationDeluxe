// /* eslint-disable no-unused-vars */
// import React, { useState, useEffect } from "react";
// import { useHotelData } from "../contexts/HotelDataContext";
// import HorizontalHotelCard from "../components/HorizontalHotelCard";
// import Header from "../components/Header";
// import dayjs from "dayjs";
// import SearchBar from "../components/SearchBar";
// import FilterContainer from "../components/Filters/FilterContainer";
// import Sort from "../components/Sort";

// const today = dayjs().format("YYYY-MM-DD");
// const tomorrow = dayjs().add(1, "day").format("YYYY-MM-DD");

// function TrendingDestinationsPage() {
//   const { hotels, error } = useHotelData(); // Hämta alla hotell från Context
//   const [filteredHotels, setFilteredHotels] = useState([]);

//   const [filters, setFilters] = useState({
//     rating: [],
//     price: [0, 500],
//     typeOfHotel: [],
//   });

//   // Filtrera hotellen som är mellan id 16 och 27
//   useEffect(() => {
//     if (hotels && hotels.length > 0) {
//       // Hotell i Stockholm
//       const stockholmHotels = hotels.filter((hotel) => hotel.id >= 16 && hotel.id <= 19);
      
//       // Hotell i London
//       const londonHotels = hotels.filter((hotel) => hotel.id >= 20 && hotel.id <= 23);
      
//       // Hotell i Chora
//       const choraHotels = hotels.filter((hotel) => hotel.id >= 23 && hotel.id <= 27);

//       // Använd dessa filterade hotell för att visa på sidan
//       setFilteredHotels([...stockholmHotels, ...londonHotels, ...choraHotels]);
//     }
//   }, [hotels]);

//   if (error) {
//     return (
//       <p className="text-center text-accentPink">
//         Error loading hotels: {error.message}
//       </p>
//     );
//   }

//   return (
//     <div>
//       <Header headingText="Trending Destinations" size="medium" />
      
//       <div className="absolute bottom-[-50px] w-full flex justify-center">
//         <SearchBar 
//           initialLocation={""}
//           initialStartDate={today}
//           initialEndDate={tomorrow}
//           initialAdults={2}
//           initialChildren={0}
//           initialRooms={1}
//         />
//       </div>

//       <Sort />

//       <div className="flex justify-center pt-[100px]">
//         <div className="mr-8">
//           <FilterContainer setFilters={setFilters} />
//         </div>
        
//         <div className="flex flex-col gap-y-8">
//           {/* Rendera filterade hotell */}
//           {filteredHotels && filteredHotels.length > 0 ? (
//             filteredHotels.map((hotel) => (
//               <HorizontalHotelCard key={hotel.id} hotel={hotel} />
//             ))
//           ) : (
//             <p>No hotels match your filters.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// TrendingDestinationsPage.jsx
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useHotelData } from "../contexts/HotelDataContext";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import TrendingDestinationCard from "../components/TrendingDestinationCard";
import Header from "../components/Header";
import dayjs from "dayjs";
import FilterContainer from "../components/Filters/FilterContainer";
import Sort from "../components/Sort";

const today = dayjs().format("YYYY-MM-DD");
const tomorrow = dayjs().add(1, "day").format("YYYY-MM-DD");

function TrendingDestinationsPage() {
  const { hotels, error } = useHotelData(); // Access all hotels from context
  const navigate = useNavigate();
  const [filteredDestinations, setFilteredDestinations] = useState([]);
  const [filters, setFilters] = useState({
    rating: [],
    price: [0, 500],
    typeOfHotel: [],
    activities: [],
    foodAndDrinks: [],
  });

  useEffect(() => {
    // Filter hotels with IDs in the trending destinations range (16–27)
    if (hotels && hotels.length > 0) {
      const trendingDestinations = hotels.filter(
        (hotel) => hotel.id >= 16 && hotel.id <= 27
      );
      setFilteredDestinations(trendingDestinations);
    }
  }, [hotels]);

  if (error) {
    return (
      <p className="text-center text-accentPink">
        Error loading trending destinations: {error.message}
      </p>
    );
  }

  const handleSearch = ({
    location,
    startDate,
    endDate,
    adults,
    children,
    rooms,
  }) => {
    navigate(
      `/trending-destinations?location=${location}&checkin=${startDate}&checkout=${endDate}&adults=${adults}&children=${children}&rooms=${rooms}`
    );
  };

  return (
    <div>
      <div className="relative">
        <Header headingText="Trending Destinations" size="medium" />
        <div className="absolute bottom-[-50px] w-full flex justify-center">
          <SearchBar
            onSearch={handleSearch}
            initialLocation=""
            initialStartDate={today}
            initialEndDate={tomorrow}
            initialAdults={2}
            initialChildren={0}
            initialRooms={1}
          />
        </div>
      </div>

      <div>
        <Sort />
      </div>

      <div className="flex justify-center pt-[100px]">
        <div className="mr-8">
          <FilterContainer setFilters={setFilters} />
        </div>
        <div className="flex flex-col gap-y-8">
          {/* Map over filtered destinations and render TrendingDestinationCard */}
          {filteredDestinations.length > 0 ? (
            filteredDestinations.map((destination) => (
              <TrendingDestinationCard
                key={destination.id}
                size="medium" // Adjust size as needed
                textSize="large"
                imageSrc={destination.imgUrl}
                location={destination.location.city}
              />
            ))
          ) : (
            <p>No trending destinations match your filters.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default TrendingDestinationsPage;