/* eslint-disable no-unused-vars */
 
// // // eslint-disable-next-line no-unused-vars
// // import React from "react";
// // import Header from "../components/Header";
// // import AirportTransferSearchBar from "../components/AirportTransfer/AirportTransferSearchBar";
// // import AirportTransferTimeline from "../assets/images/AirportTransferTimeline.png";

// // function AirportTransferPage() {
// // 	return (
// // 		<div>
// // 			<Header headingText="Airport Transfer" size="medium" />
// // 			<div className="bg-opacityLightBlue py-12 flex justify-center h-[400px]">
// // 				<div className="w-[1200px]">
// // 					<div className="mb-8">
// // 						<h1 className="text-3xl font-bold text-black mb-2">
// // 							Book your Airport transfer
// // 						</h1>
// // 						<p className="text-lg text-black mb-6">
// // 							Convenient transportation to and from your
// // 							accommodation.
// // 						</p>
// // 					</div>
// // 					<div className="flex justify-center">
// // 						<AirportTransferSearchBar />
// // 					</div>
// // 				</div>
// // 			</div>
// // 			<div className="py-12">
// // 				<div className="mb-8 w-[1200px] mx-auto">
// // 					<h2 className="text-3xl font-bold text-black mb-8">
// // 						How does it work?
// // 					</h2>
// // 				</div>

// // 				{/* Timeline image */}
// // 				<div className="flex justify-center">
// // 					<img
// // 						src={AirportTransferTimeline}
// // 						alt="Airport Transfer Timeline"
// // 						className="w-[80%]" // 80% width for the image
// // 					/>
// // 				</div>
// // 			</div>

// // 			<div className="mb-8 w-[1200px] mx-auto">
// // 				<h3 className="text-xl font-bold my-4">About the transfer</h3>
// // 				<p className="text-lg text-black max-w-[700px]">
// // 					Enjoy hassle-free airport transfers to and from your
// // 					accommodation. Whether you need a one-way or round-trip
// // 					service, pre-book your transport to ensure a smooth and
// // 					comfortable journey. Reliable drivers and flexible options
// // 					make it easy to reach your destination on time.
// // 				</p>

// // 				<h4 className="text-lg font-bold my-4">Delayed flight?</h4>
// // 				<p className="text-lg text-black mt-4 max-w-[700px]">
// // 					Our drivers track your flight, so even if it’s delayed,
// // 					we’ll adjust your pickup time to ensure a smooth ride
// // 					without the wait.
// // 				</p>
// // 			</div>
// // 		</div>
// // 	);
// // }




// /* eslint-disable no-unused-vars */
// import React, { useState } from "react";
// import Header from "../components/Header";
// import AirportTransferSearchBar from "../components/AirportTransfer/AirportTransferSearchBar";
// import CarCard from "../components/AirportTransfer/CarCard"; // Importera CarOneWay-komponenten
// import AirportTransferTimeline from "../assets/images/AirportTransferTimeline.png";

// function AirportTransferPage() {
// 	const [transferData, setTransferData] = useState(null); // Nytt state för att lagra sökdata

// 	const handleSearch = (data) => {
// 		// Sparar data från sökningen i state
// 		setTransferData(data);
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
// 						{/* Passar handleSearch-funktionen som props till AirportTransferSearchBar */}
// 						<AirportTransferSearchBar onSearch={handleSearch} />
// 					</div>
// 				</div>
// 			</div>

// 			{/* Renderar CarCard om sökdata finns */}
// 			{transferData && (
// 				<div className="mb-8 w-[1200px] mx-auto">
// 					<CarCard transferData={transferData} />
// 				</div>
// 			)}

// 			<div className="py-12">
// 				<div className="mb-8 w-[1200px] mx-auto">
// 					<h2 className="text-3xl font-bold text-black mb-8">
// 						How does it work?
// 					</h2>
// 				</div>

// 				{/* Timeline image */}
// 				<div className="flex justify-center">
// 					<img
// 						src={AirportTransferTimeline}
// 						alt="Airport Transfer Timeline"
// 						className="w-[80%]" // 80% width for the image
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







import React, { useState } from "react";
import Header from "../components/Header";
import AirportTransferSearchBar from "../components/AirportTransfer/AirportTransferSearchBar";
import CarCard from "../components/AirportTransfer/CarCard";
import AirportTransferTimeline from "../assets/images/AirportTransferTimeline.png";

function AirportTransferPage() {
	const [transferData, setTransferData] = useState(null);
	

	const handleSearch = (data) => {
		setTransferData(data);
	};

	return (
		<div>
			<Header headingText="Airport Transfer" size="medium" />

			<div className="bg-opacityLightBlue py-12 flex justify-center">
				<div className="w-[85%] max-w-[1200px]">
					<h1 className="text-3xl font-bold text-black mb-4">
						Book your Airport transfer
					</h1>
					<p className="text-lg text-black mb-6">
						Convenient transportation to and from your
						accommodation.
					</p>
					<AirportTransferSearchBar onSearch={handleSearch} />
				</div>
			</div>

			{transferData && (
				<div className="w-[85%] max-w-[1200px] mx-auto mt-8">
					<CarCard transferData={transferData} />
				</div>
			)}

			<div className="py-12 w-[85%] max-w-[1200px] mx-auto">
				<h2 className="text-3xl font-bold text-black mb-8">
					How does it work?
				</h2>
				<div className="flex justify-center">
					<img
						src={AirportTransferTimeline}
						alt="Airport Transfer Timeline"
						className="w-[80%]"
					/>
				</div>
			</div>

			<div className="w-[85%] max-w-[1200px] mx-auto mb-8">
				<h3 className="text-xl font-bold my-4">About the transfer</h3>
				<p className="text-lg text-black max-w-[700px]">
					Enjoy hassle-free airport transfers to and from your
					accommodation. Whether you need a one-way or round-trip
					service, pre-book your transport to ensure a smooth and
					comfortable journey.
				</p>
				<h4 className="text-lg font-bold my-4">Delayed flight?</h4>
				<p className="text-lg text-black mt-4 max-w-[700px]">
					Our drivers track your flight, so even if it’s delayed,
					we’ll adjust your pickup time to ensure a smooth ride
					without the wait.
				</p>
			</div>
		</div>
	);
}

export default AirportTransferPage;
