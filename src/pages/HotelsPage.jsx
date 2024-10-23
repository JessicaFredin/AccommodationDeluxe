// Hotels.jsx
import React, { useState, useEffect } from "react";
import { useHotelData } from "../contexts/HotelDataContext";
import { useLocation, useNavigate } from "react-router-dom";
import { useSearchParamsContext } from "../contexts/SearchParamsContext"; // Importerar context hook
import SearchBar from "../components/SearchBar";
import HorizontalHotelCard from "../components/HorizontalHotelCard";
import Header from "../components/Header";
import FilterContainer from "../components/Filters/FilterContainer";
import dayjs from "dayjs";

// Sätter dagens datum och morgondagens datum som standardvärden
const today = dayjs().format("YYYY-MM-DD");
const tomorrow = dayjs().add(1, "day").format("YYYY-MM-DD");

function HotelsPage() {
  const { search } = useLocation(); // Hämtar sökparametrar från URL
  const { hotels, error } = useHotelData();
  const navigate = useNavigate();
  const { searchParams, setSearchParams } = useSearchParamsContext(); // Använder context för sökparametrar
  const [filteredHotels, setFilteredHotels] = useState([]); // Sätter state för filtrerade hotell

  // Parse URL-sökparametrar och uppdaterar sökparametrar i context
  useEffect(() => {
    const params = new URLSearchParams(search);
    const location = params.get("location") || "";
    const checkin = params.get("checkin") || today;
    const checkout = params.get("checkout") || tomorrow;
    const adults = parseInt(params.get("adults")) || 2;
    const children = parseInt(params.get("children")) || 0;
    const rooms = parseInt(params.get("rooms")) || 1;

   // Uppdaterar sökparametrar i context med värden från URL
    setSearchParams({
      location,
      startDate: checkin,
      endDate: checkout,
      adults,
      children,
      rooms,
    });

    // Filtrera hotellen baserat på sökparametrarna
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

  // Hantera sökningen från sökfältet och uppdatera URL och context
  const handleSearch = ({ location, startDate, endDate, adults, children, rooms }) => {
    const params = new URLSearchParams({
      location,
      checkin: startDate,
      checkout: endDate,
      adults: adults.toString(),
      children: children.toString(),
      rooms: rooms.toString(),
    });

    // Uppdaterar URLen
    navigate(`/hotels?${params.toString()}`);
  };

  if (error) {
    return <p className="text-center text-accentPink">Error loading hotels: {error.message}</p>;
  }

  return (
    <div>
      {/* Header och Search Bar */}
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

      {/* Huvudinnehållet Layout */}
      <div className="flex justify-center pt-[100px]">
        {/* Filter Container till vänster */}
        <div className="mr-8">
          <FilterContainer />
        </div>

        {/* Höger sida hotelkort sektion */}
        <div className="flex flex-col gap-y-8">
          {filteredHotels && filteredHotels.length > 0 ? (
            filteredHotels.map((hotel) => (
              <HorizontalHotelCard
                key={hotel.id}
                hotel={hotel} // Skickar hoteldata till hotelkorten
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
