/* eslint-disable no-unused-vars */
// import React, { useState } from "react";
// import Header from "../components/Header";
// import AirportTransferSearchBar from "../components/AirportTransfer/AirportTransferSearchBar";
// import CarCard from "../components/AirportTransfer/CarCard";
// import AirportTransferTimeline from "../assets/images/AirportTransferTimeline.png";

// function AirportTransferPage() {
// 	const [transferData, setTransferData] = useState(null);

// 	// Handle search to store one-way or return trip data in transferData
// 	const handleSearch = (oneWayData, returnTripData) => {
// 		setTransferData({ ...oneWayData, returnTrip: returnTripData });
// 	};

// 	return (
// 		<div>
// 			<Header headingText="Airport Transfer" size="medium" />
// 			<div className="bg-opacityLightBlue py-12 flex justify-center h-[400px]">
// 				<div className="w-[1200px]">
// 					<div className="mb-8">
// 						<h1 className="text-3xl font-bold text-black mb-2">
// 							Book your Airport transfer
// 						</h1>
// 						<p className="text-lg text-black mb-6">
// 							Convenient transportation to and from your
// 							accommodation.
// 						</p>
// 					</div>
// 					<div className="flex justify-center">
// 						<AirportTransferSearchBar onSearch={handleSearch} />
// 					</div>
// 				</div>
// 			</div>

// 			{/* Render CarCard only once with conditional data for return trip */}
// 			{transferData && (
// 				<div className="mb-8 w-[1200px] mx-auto">
// 					<CarCard
// 						transferData={transferData}
// 						tripType={
// 							transferData.returnTrip ? "Return" : "One Way"
// 						}
// 					/>
// 				</div>
// 			)}

// 			<div className="py-12">
// 				<div className="mb-8 w-[1200px] mx-auto">
// 					<h2 className="text-3xl font-bold text-black mb-8">
// 						How does it work?
// 					</h2>
// 				</div>
// 				<div className="flex justify-center">
// 					<img
// 						src={AirportTransferTimeline}
// 						alt="Airport Transfer Timeline"
// 						className="w-[80%]"
// 					/>
// 				</div>
// 			</div>

// 			<div className="mb-8 w-[1200px] mx-auto">
// 				<h3 className="text-xl font-bold my-4">About the transfer</h3>
// 				<p className="text-lg text-black max-w-[700px]">
// 					Enjoy hassle-free airport transfers to and from your
// 					accommodation. Whether you need a one-way or round-trip
// 					service, pre-book your transport to ensure a smooth and
// 					comfortable journey. Reliable drivers and flexible options
// 					make it easy to reach your destination on time.
// 				</p>
// 				<h4 className="text-lg font-bold my-4">Delayed flight?</h4>
// 				<p className="text-lg text-black mt-4 max-w-[700px]">
// 					Our drivers track your flight, so even if it’s delayed,
// 					we’ll adjust your pickup time to ensure a smooth ride
// 					without the wait.
// 				</p>
// 			</div>
// 		</div>
// 	);
// }

// export default AirportTransferPage;

// AirportTransferPage.jsx
import React, { useState } from "react";
import Header from "../components/Header";
import AirportTransferSearchBar from "../components/AirportTransfer/AirportTransferSearchBar";
import CarCard from "../components/AirportTransfer/CarCard";
import AirportTransferTimeline from "../assets/images/AirportTransferTimeline.png";
import AirportTransferConfirmation from "../components/AirportTransfer/AirportTransferConfirmation";

function AirportTransferPage() {
  const [transferData, setTransferData] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  // Handle search to store one-way or return trip data in transferData
  const handleSearch = (oneWayData, returnTripData) => {
    setTransferData({ ...oneWayData, returnTrip: returnTripData });
  };

  // Function to handle confirmation (opens the popup)
  const handleConfirm = () => {
    setShowPopup(true);
  };

  // Function to close the popup and reset the page
  const handleClosePopup = () => {
    setShowPopup(false);
    setTransferData(null); // Reset transferData to hide CarCard
  };

  return (
    <div>
      <Header headingText="Airport Transfer" size="medium" />
      <div className="bg-opacityLightBlue py-12 flex justify-center h-[400px]">
        <div className="w-[1200px]">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-black mb-2">
              Book your Airport transfer
            </h1>
            <p className="text-lg text-black mb-6">
              Convenient transportation to and from your accommodation.
            </p>
          </div>
          <div className="flex justify-center">
            <AirportTransferSearchBar onSearch={handleSearch} />
          </div>
        </div>
      </div>

      {/* Render CarCard only once with conditional data for return trip */}
      {transferData && (
        <div className="mb-8 w-[1200px] mx-auto">
          <CarCard
            transferData={transferData}
            tripType={transferData.returnTrip ? "Return" : "One Way"}
            onConfirm={handleConfirm} // Pass the confirm handler
          />
        </div>
      )}

      {/* Render Confirmation Modal */}
      {showPopup && (
        <AirportTransferConfirmation onClose={handleClosePopup} />
      )}

      <div className="py-12">
        <div className="mb-8 w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold text-black mb-8">
            How does it work?
          </h2>
        </div>
        <div className="flex justify-center">
          <img
            src={AirportTransferTimeline}
            alt="Airport Transfer Timeline"
            className="w-[80%]"
          />
        </div>
      </div>

      <div className="mb-8 w-[1200px] mx-auto">
        <h3 className="text-xl font-bold my-4">About the transfer</h3>
        <p className="text-lg text-black max-w-[700px]">
          Enjoy hassle-free airport transfers to and from your accommodation.
          Whether you need a one-way or round-trip service, pre-book your
          transport to ensure a smooth and comfortable journey. Reliable drivers
          and flexible options make it easy to reach your destination on time.
        </p>
        <h4 className="text-lg font-bold my-4">Delayed flight?</h4>
        <p className="text-lg text-black mt-4 max-w-[700px]">
          Our drivers track your flight, so even if it’s delayed, we’ll adjust
          your pickup time to ensure a smooth ride without the wait.
        </p>
      </div>
    </div>
  );
}

export default AirportTransferPage;