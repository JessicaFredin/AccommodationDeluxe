// // /* eslint-disable react/prop-types */
// // // eslint-disable-next-line no-unused-vars
// import Map from "../components/Map";
// import RoomCardsSection from "../components/RoomCardsSection";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";


// function MapPage() {
//     return (
// 		<div>
// 			<div className="w-[85%] mx-auto mt-8">
// 				<div className="flex justify-between w-[85%] mx-auto mt-8">
// 					<div className="w-[60%] pr-8">
// 						<h2 className="text-3xl font-bold mb-4">Map</h2>
// 					</div>
// 				</div>

// 				<div className="flex justify-center ">
// 					<Map />
// 				</div>

// 				<div className="text-center mt-4">
// 					<p className="text-md">
// 						<FontAwesomeIcon
// 							icon={faMapMarkerAlt}
// 							className="text-accentPink mr-2"
// 						/>
// 						Sunset Boulevard 25, Playa de la Mar, 29600 Marbella,
// 						Spain.
// 					</p>
// 				</div>
// 			</div>
// 			<RoomCardsSection />
// 		</div>
// 	);
// }

// export default MapPage;





// {/* <div>
// 	<HotelHeroNavSection />
// 	<div className="w-[85%] mx-auto mt-8">
// 		<div className="flex justify-between w-[85%] mx-auto mt-8">
// 			<div className="w-[60%] pr-8">
// 				<h2 className="text-3xl font-bold mb-4">Map</h2>
// 				<MapComponent />
// 			</div>

// 			<div className="text-center mt-4">
// 				<p className="text-md">
// 					<FontAwesomeIcon
// 						icon={faMapMarkerAlt}
// 						className="text-accentPink mr-2"
// 					/>
// 					Sunset Boulevard 25, Playa de la Mar, 29600 Marbella, Spain.
// 				</p>
// 			</div>
// 		</div>
// 	</div>
// 	<RoomCardsSection />
// </div>; */}

// eslint-disable-next-line no-unused-vars
import React from 'react';
import useHotelDetails from '../hooks/useHotelDetails';
import Map from "../components/Map";
import RoomCardsSection from "../components/RoomCardsSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

function MapPage() {
  const { hotel, error, loading } = useHotelDetails(); //använder data från de specifika hotellet

  // Felhantering 
  if (loading) {
    return <p>Loading hotel data...</p>;
  }
  if (error) {
    return <p>Error loading hotel data: {error.message}</p>;
  }
  if (!hotel) {
    return <p>Hotel not found.</p>;
  }

  // Hämtar mapdata från de specifika hotellet
  const mapData = hotel.map;
  const { title, location, zoomLevel, marker } = mapData;

  return (
    <div>
      <div className="w-[85%] mx-auto mt-8">
        <div className="flex justify-between w-[85%] mx-auto mt-8">
          <div className="w-[60%] pr-8">
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
          </div>
        </div>
        {/* Visar kartan */}
        <div className="flex justify-center ">
          <Map
            latitude={location.latitude}
            longitude={location.longitude}
            zoomLevel={zoomLevel}
            marker={marker}
          />
        </div>
        {/* Visa hotellets adress */}
        <div className="text-center mt-4">
          <p className="text-md">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="text-accentPink mr-2"
            />
            {location.address}
          </p>
        </div>
      </div>
      {/* Sektion för att visa RoomCardSection */}
      <RoomCardsSection />
    </div>
  );
}

export default MapPage;
