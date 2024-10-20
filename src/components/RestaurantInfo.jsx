// eslint-disable-next-line no-unused-vars
import React from "react";
import RestaurantInfo1 from "../assets/images/RestaurantInfo1.png";
import RestaurantInfo2 from "../assets/images/RestaurantInfo2.png";
import RestaurantInfo3 from "../assets/images/RestaurantInfo3.png";

//Definierar Restaurantinfo i en lista av objekt som vardera hållet titel och beskrivning
const restaurantInfo = [
	{
		title: "Dining at the hotel:",
		description:
			"At Hotel Riviera Resort, we take pride in offering an exceptional culinary experience that matches the elegance and luxury of our beautiful Spanish location. Whether you're in the mood for a relaxed beachside snack or a gourmet dinner, our restaurants and bars are designed to cater to every taste and occasion.",
	},
	{
		title: "The Mediterranean Restaurant",
		description:
			"Indulge in the freshest local seafood and authentic Mediterranean flavors at our signature restaurant. Our chefs craft dishes inspired by the region, using only the finest ingredients to create a menu that reflects the rich culinary traditions of Spain.",
	},
	{
		title: "The Rooftop Bar",
		description:
			"For a more laid-back atmosphere, head to our stunning Rooftop Bar. Sip on expertly crafted cocktails while enjoying panoramic views of the Spanish coastline. It's the perfect spot to unwind at sunset or enjoy an evening with friends.",
	},
	{
		title: "Poolside Café",
		description:
			"Whether you're spending the day by the pool or looking for a quick bite, our Poolside Café offers a variety of light snacks, refreshing drinks, and healthy options to keep you energized throughout the day.",
	},
	{
		title: "Table reservations",
		description:
			"Table reservations are required at the à la carte restaurants. Smart casual dress code applies. You also have access to the following at the neighboring/sister hotel: Asian À La Carte Restaurant (not included in the All-Inclusive package).",
	},
];

function RestaurantInfo() {
	return (
		<div className="w-[100%]">
			<div className="flex space-x-4 mb-6">
				{/* Sätter bredden till 50% för förtsa bilden*/}
				<img
					src={RestaurantInfo1} //Hämtar bilden
					alt="Main Image"
					className="w-1/2 h-[300px] rounded-lg shadow"
				/>
				{/* Ger resterande utrymme till de två andra bilderna */}
				<div className="flex flex-col space-y-4 w-1/2">
					<img
						src={RestaurantInfo2}
						alt="Image 2"
						className="w-full h-[145px] rounded-lg shadow"
					/>
					<img
						src={RestaurantInfo3}
						alt="Image 3"
						className="w-full h-[145px] rounded-lg shadow"
					/>
				</div>
			</div>
			{/*Iterar igenom objekten i listan Restaurantinfo och renderar informationen i relevanta html element, definerar textstorlek och färg */}
			{restaurantInfo.map((section, index) => (
				<div key={index} className="mb-6">
					<h3 className="text-[20px] font-bold text-black mb-2">
						{section.title}
					</h3>
					<p className="text-[16px] text-black">
						{section.description}
					</p>
				</div>
			))}
		</div>
	);
}

export default RestaurantInfo;
