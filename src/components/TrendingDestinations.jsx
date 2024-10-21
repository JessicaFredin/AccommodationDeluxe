// eslint-disable-next-line no-unused-vars
import React from "react";
import TrendingDestinationCard from "./TrendingDestinationCard";
import TrendingDestinationImage1 from "../assets/images/TrendingDestinationImage1.png";
import TrendingDestinationImage2 from "../assets/images/TrendingDestinationImage2.png";
import TrendingDestinationImage3 from "../assets/images/TrendingDestinationImage3.png";

function TrendingDestinations() {
	return (
		<div className="p-8">
			<h2 className="text-3xl font-semibold mb-2">
				Trending destinations
			</h2>
			<p className="text-lg text-shadyBlack mb-6">
				Discover accommodations in trendy destinations
			</p>

			{/* Kontainern för trendingdestinationcards */}
			<div className="flex gap-10">
				{" "}
				{/* Vänstra sektionen med två bilder och text */}
				<div className="flex flex-col gap-10">
					<TrendingDestinationCard
						imageSrc={TrendingDestinationImage1}
						location="Sweden, Stockholm"
						size="medium"
						textSize="medium"
					/>
					<TrendingDestinationCard
						imageSrc={TrendingDestinationImage2}
						location="Great Britain, London"
						size="medium"
						textSize="medium"
					/>
				</div>
				{/* Högra bilden tar upp ett större utrymme */}
				<TrendingDestinationCard
					imageSrc={TrendingDestinationImage3}
					location="Greece, Chora"
					size="large"
					textSize="large"
				/>
			</div>
		</div>
	);
}

export default TrendingDestinations;
