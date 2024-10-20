
import PoolAndBeach from "../components/PoolAndBeach";
import RoomCardsSection from "../components/RoomCardsSection";


import InfoBoxSpecificHotel from "../components/InfoBoxSpecificHotel";

const title = "Pool and Beach";
const paragraph = "At the hotel’s pools, you can relax and enjoy the tranquility of your vacation. If you prefer the beach, the beautiful Algodoeiro Beach is located right by the hotel. Please note: There are rocks and stone formations in the water at Algodoeiro Beach, directly in front of the hotel. Other nearby beaches include the following.";


function PoolAndBeachTheHotelPage() {
	return (
		<div>

			<div className="w-[85%] mx-auto mt-8">
				<div className="flex justify-between w-[85%] mx-auto mt-8">
					<div className="w-[70%] pr-8">
						<h2 className="text-[32px] font-bold mb-4">
							{title}
						</h2>
						<p className="text-[16px] text-black mb-4">
							{paragraph}
						</p>
				      <PoolAndBeach />
					</div>
					<InfoBoxSpecificHotel />
				</div>
			</div>
			<div>
				<RoomCardsSection />
			</div>
		</div>
	);
}

export default PoolAndBeachTheHotelPage;
