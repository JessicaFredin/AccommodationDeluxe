// eslint-disable-next-line no-unused-vars
import React from "react";
import PoolAndBeach1 from "../assets/images/PoolAndBeach1.png";
import PoolAndBeach2 from "../assets/images/PoolAndBeach2.png";
import PoolAndBeach3 from "../assets/images/PoolAndBeach3.png";
//Definierar PoolandBeacHinfo i en lista med objekt som vardera håller titel och beskrivning
const poolAndBeachInfo = [
	{
		title: "Sal Island and Santa Maria",
		description:
			"Sal and Santa Maria are primarily known for relaxation and stunning beaches. You’ll find wide, fine-grained, golden sands and crystal-clear turquoise waters that stretch around most of the island. Be aware that the water gets deep quickly, and waves are common",
	},
	{
		title: "Santa Maria Beach",
		description:
			"The eight-kilometer-long beach at Santa Maria is one of the most beautiful on the island. It offers both a lively atmosphere near the pier and large, peaceful areas for those who prefer more quiet surroundings. Many hotels provide sun loungers on this stunning beach, but they are also available for rent.",
	},
	{
		title: "Angulo Beach",
		description:
			"Located just east of the center, Angulo Beach is quieter than Santa Maria Beach. Here, you can enjoy turquoise waters and watch the sun rise and set over the ocean from the beachside restaurant, which serves breakfast, lunch, and dinner. You can also watch experienced surfers, and for those who prefer activities on land, there’s an outdoor gym available",
	},
	{
		title: "Kite Beach",
		description:
			"Located on the east coast of Sal, Kite Beach is a favorite spot for kite and windsurfers from all over the world. Perfect for those looking to ride the waves, but less suitable for families with small children seeking a calm environment.",
	},
];

function PoolAndBeach() {
	return (
		<div className="w-[100%] rounded-lg">
			{/* Flex container för bilderna */}
			<div className="flex space-x-4 mb-6">
				{/* Bild1 tar upp 50% av utrymmet */}
				<img
					src={PoolAndBeach1}
					alt="Main Image"
					className="w-1/2 h-[300px] rounded-lg shadow"
				/>
				{/* Definerar bredd, höjd och mellanrummet för det återstående två bilderna*/}
				<div className="flex flex-col space-y-4 w-1/2">
					<img
						src={PoolAndBeach2}
						alt="Image 2"
						className="w-full h-[145px] rounded-lg shadow"
					/>
					<img
						src={PoolAndBeach3}
						alt="Image 3"
						className="w-full h-[145px] rounded-lg shadow"
					/>
				</div>
			</div>

			{/* Itererar genom listan av objekt och renderar dess innehåll i relevanta html- element*/}
			{poolAndBeachInfo.map((item, index) => (
				<div key={index} className="mb-6">
					<h3 className="text-[20px] font-bold text-black mb-2">{item.title}</h3>
					<p className="text-[16px] text-black">{item.description}</p>
				</div>
			))}
		</div>
	);
}

export default PoolAndBeach;