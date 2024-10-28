// // // eslint-disable-next-line no-unused-vars
// // import React from "react";
// // import TrendingDestinationCard from "./TrendingDestinationCard";
// // import TrendingDestinationImage1 from "../assets/images/TrendingDestinationImage1.png";
// // import TrendingDestinationImage2 from "../assets/images/TrendingDestinationImage2.png";
// // import TrendingDestinationImage3 from "../assets/images/TrendingDestinationImage3.png";
// // import { useHotelData } from "../contexts/HotelDataContext";

// // function TrendingDestinations() {
// // 	const { hotels, error } = useHotelData(); // Access hotels from context

// // 	// Handle error and loading states
// // 	if (error) {
// // 		return <p>Error loading hotel data: {error.message}</p>;
// // 	}
	
// // 	if (!hotels) {
// // 		return <p>Loading hotel data...</p>;
// // 	}




	

// // 	return (
// // 		<div className="p-8">
// // 			<h2 className="text-3xl font-semibold mb-2">
// // 				Trending destinations
// // 			</h2>
// // 			<p className="text-lg text-shadyBlack mb-6">
// // 				Discover accommodations in trendy destinations
// // 			</p>

// // 			{/* Kontainern för trendingdestinationcards */}
// // 			<div className="flex gap-10">
// // 				{" "}
// // 				{/* Vänstra sektionen med två bilder och text */}
// // 				<div className="flex flex-col gap-10">
// // 					<TrendingDestinationCard
// // 						imageSrc={TrendingDestinationImage1}
// // 						location="Sweden, Stockholm"
// // 						size="medium"
// // 						textSize="medium"
// // 					/>
// // 					<TrendingDestinationCard
// // 						imageSrc={TrendingDestinationImage2}
// // 						location="Great Britain, London"
// // 						size="medium"
// // 						textSize="medium"
// // 					/>
// // 				</div>
// // 				{/* Högra bilden tar upp ett större utrymme */}
// // 				<TrendingDestinationCard
// // 					imageSrc={TrendingDestinationImage3}
// // 					location="Greece, Chora"
// // 					size="large"
// // 					textSize="large"
// // 				/>
// // 			</div>
// // 		</div>
// // 	);
// // }

// // export default TrendingDestinations;






// // eslint-disable-next-line no-unused-vars
// import React from "react";
// import TrendingDestinationCard from "./TrendingDestinationCard";
// import { useHotelData } from "../contexts/HotelDataContext"; // Adjust the path as necessary

// function TrendingDestinations() {
// 	const { trendingDestinations, error } = useHotelData(); // Access data from context

// 	// Handle error state
// 	if (error) {
// 		return <p>Error loading trending destinations.</p>;
// 	}

// 	// Ensure trendingDestinations has data
// 	if (!trendingDestinations || trendingDestinations.length < 3) {
// 		return <p>Loading trending destinations...</p>;
// 	}

// 	return (
// 		<div className="p-8">
// 			<h2 className="text-3xl font-semibold mb-2">
// 				Trending destinations
// 			</h2>
// 			<p className="text-lg text-shadyBlack mb-6">
// 				Discover accommodations in trendy destinations
// 			</p>

// 			{/* Container for trending destination cards */}
// 			<div className="flex gap-10">
// 				{/* Left section with two medium-sized cards */}
// 				<div className="flex flex-col gap-10">
// 					<TrendingDestinationCard
// 						imageSrc={trendingDestinations[0].image}
// 						location={trendingDestinations[0].name}
// 						size="medium"
// 						textSize="medium"
// 					/>
// 					<TrendingDestinationCard
// 						imageSrc={trendingDestinations[1].image}
// 						location={trendingDestinations[1].name}
// 						size="medium"
// 						textSize="medium"
// 					/>
// 				</div>
// 				{/* Right section with a large-sized card */}
// 				<TrendingDestinationCard
// 					imageSrc={trendingDestinations[2].image}
// 					location={trendingDestinations[2].name}
// 					size="large"
// 					textSize="large"
// 				/>
// 			</div>
// 		</div>
// 	);
// }

// export default TrendingDestinations;





// eslint-disable-next-line no-unused-vars
import React from "react";
import TrendingDestinationCard from "./TrendingDestinationCard";
import { useHotelData } from "../contexts/HotelDataContext"; // Adjust the path as necessary

function TrendingDestinations() {
	const { trendingDestinations, error } = useHotelData(); // Access data from context

	// Handle error state
	if (error) {
		return <p>Error loading trending destinations.</p>;
	}

	// Ensure trendingDestinations has data
	if (!trendingDestinations || trendingDestinations.length < 3) {
		return <p>Loading trending destinations...</p>;
	}

	return (
		<div className="p-8">
			<h2 className="text-3xl font-semibold mb-2">
				Trending destinations
			</h2>
			<p className="text-lg text-shadyBlack mb-6">
				Discover accommodations in trendy destinations
			</p>

			{/* Container for trending destination cards */}
			<div className="flex gap-10">
				{/* Left section with two medium-sized cards */}
				<div className="flex flex-col gap-10">
					<TrendingDestinationCard
						imageSrc={trendingDestinations[0].image}
						location={trendingDestinations[0].name}
						destinationId={trendingDestinations[0].id} // Pass destinationId
						size="medium"
						textSize="medium"
					/>
					<TrendingDestinationCard
						imageSrc={trendingDestinations[1].image}
						location={trendingDestinations[1].name}
						destinationId={trendingDestinations[1].id} // Pass destinationId
						size="medium"
						textSize="medium"
					/>
				</div>
				{/* Right section with a large-sized card */}
				<TrendingDestinationCard
					imageSrc={trendingDestinations[2].image}
					location={trendingDestinations[2].name}
					destinationId={trendingDestinations[2].id} // Pass destinationId
					size="large"
					textSize="large"
				/>
			</div>
		</div>
	);
}

export default TrendingDestinations;
