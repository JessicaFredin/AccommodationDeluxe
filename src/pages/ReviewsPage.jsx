// // /* eslint-disable react/prop-types */
// // // eslint-disable-next-line no-unused-vars
// import RoomCardsSection from "../components/RoomCardsSection";

// const rating = [
// 	{ label: "Overall Room Experience", rating: 4.3 },
// 	{ label: "Hotel Location", rating: 4.6 },
// 	{ label: "Atmosphere & Comfort", rating: 4.2 },
// 	{ label: "Staff Friendliness", rating: 4.8 },
// 	{ label: "Wi-Fi", rating: 4.9 },
// ];

// function ReviewsPage() {

// return (
// 	<div>

// 		<div className="reviews-container p-4 flex flex-col md:flex-row items-center w-[85%] mx-auto mt-8">
// 			{/* Left side: Overall rating */}
// 			<div className="overall-rating text-center">
// 				<div className="rating-circle bg-grey rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4 x">
// 					<span className="text-[32px] font-bold">4.7 / 5</span>
// 				</div>
// 				<p className="mb-2 text-[16px]">
// 					The rate is based on our 6497 guests that have answered the
// 					survey they got after their stay.
// 				</p>
// 				<p className="text-[32px] font-bold">
// 					91% recommends this hotel
// 				</p>
// 			</div>

// 			{/* Right side: Detailed ratings */}
// 			<div className="detailed-ratings w-[600px] mt-6 md:mt-0 md:pl-8">
// 				{rating.map((item, index) => (
// 					<div key={index} className="rating-item mb-4">
// 						<div className="flex justify-between mb-1">
// 							<span>{item.label}</span>
// 							<span>{item.rating}</span>
// 						</div>
// 						<div className="w-full bg-grey rounded-full h-2.5">
// 							<div
// 								className="bg-primaryDarkBlue h-2.5 rounded-full"
// 								style={{ width: `${(item.rating / 5) * 100}%` }}
// 							></div>
// 						</div>
// 					</div>
// 				))}
// 			</div>
// 		</div>
// 		<RoomCardsSection />
// 		</div>
// 	);
// }

// export default ReviewsPage;
import React from "react";
import useHotelDetails from "../hooks/useHotelDetails";
import RoomCardsSection from "../components/RoomCardsSection";

function ReviewsPage() {
  const { hotel, error, loading } = useHotelDetails();

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

  // Extrahera betyg och recensioner från de specifika hotellets hotell-data
  const ratings = hotel.ratings; // Array av betygsobjekt
  const reviews = hotel.reviews; // objekt med övergripande recensioner

  // Extraherar de övergripande betyget
  const overallRating = reviews.overallRating; // ex 4.8
  const totalSurveyResponses = reviews.totalSurveyResponses; // ex, 6525
  const recommendationPercentage = reviews.recommendationPercentage; // ex, 95%

  return (
    <div>
      <div className="reviews-container p-4 flex flex-col md:flex-row items-center w-[85%] mx-auto mt-8">
        {/* Vänstra sidan: Övergripande betyg */}
        <div className="overall-rating text-center">
          <div className="rating-circle bg-grey rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4 x">
            <span className="text-[32px] font-bold">{overallRating} / 5</span>
          </div>
          <p className="mb-2 text-[16px]">
            The rate is based on our {totalSurveyResponses} guests that have answered the
            survey they got after their stay.
          </p>
          <p className="text-[32px] font-bold">
            {recommendationPercentage}% recommends this hotel
          </p>
        </div>

        {/* Högra sidan: Detaljerade betyg */}
        <div className="detailed-ratings w-[600px] mt-6 md:mt-0 md:pl-8">
          {ratings.map((item, index) => (
            <div key={index} className="rating-item mb-4">
              <div className="flex justify-between mb-1">
                <span>{item.label}</span>
                <span>{item.rating}</span>
              </div>
              <div className="w-full bg-grey rounded-full h-2.5">
                <div
                  className="bg-primaryDarkBlue h-2.5 rounded-full"
                  style={{ width: `${(item.rating / 5) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* RoomCardsektion */}
      <RoomCardsSection />
    </div>
  );
}

export default ReviewsPage;

