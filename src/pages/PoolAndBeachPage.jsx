
import PoolAndBeach from "../components/PoolAndBeach";
import RoomCardsSection from "../components/RoomCardsSection";

import useHotelDetails from "../hooks/useHotelDetails";
import InfoBoxSpecificHotel from "../components/InfoBoxSpecificHotel";




function PoolAndBeachTheHotelPage() {
		  const { hotel, error, loading } = useHotelDetails();

			// Handle loading, error, and not found states
			if (loading) {
				return <p>Loading hotel data...</p>;
			}
			if (error) {
				return <p>Error loading hotel data: {error.message}</p>;
			}
			if (!hotel) {
				return <p>Hotel not found.</p>;
			}

			const infoBoxContent = {
				title: hotel.poolAndBeach.infoBox.title,
				additionalInformation: hotel.poolAndBeach.infoBox.additionalInformation,
				optionsTitle: hotel.poolAndBeach.infoBox.optionsTitle,
				extraInformation: hotel.poolAndBeach.infoBox.extraInformation,
			};

	return (
		<div>
			<div className="w-[85%] mx-auto mt-8">
				<div className="flex justify-between w-[85%] mx-auto mt-8">
					<div className="w-[70%] pr-8">
						<h2 className="text-[32px] font-bold mb-4">
							{hotel.poolAndBeach.headingText}
						</h2>
						<p className="text-[16px] text-black mb-4">
							{hotel.poolAndBeach.introParagraph}
						</p>
						<PoolAndBeach />
					</div>
					<InfoBoxSpecificHotel {...infoBoxContent} />
				</div>
			</div>
			<div>
				<RoomCardsSection />
			</div>
		</div>
	);
}

export default PoolAndBeachTheHotelPage;
