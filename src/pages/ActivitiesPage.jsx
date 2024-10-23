import InfoBoxSpecificHotel from "../components/InfoBoxSpecificHotel";
import HorizontalRoomType from "../components/HorizontalRoomType";
import RoomCardsSection from "../components/RoomCardsSection";
import useHotelDetails from "../hooks/useHotelDetails";


function ActivitiesPage() {
		const { hotel, error, loading } = useHotelDetails();

		
        // Hanterar laddning, fel och inte hittat tillstånd
		if (loading) {
			return <p>Loading hotel data...</p>;
		}
		if (error) {
			return <p>Error loading hotel data: {error.message}</p>;
		}
		if (!hotel) {
			return <p>Hotel not found.</p>;
		}
		// Definierar innehållet i informationsrutan för denna vy
		const infoBoxContent = {
			title: hotel.activities.infoBox.title,
			additionalInformation: hotel.activities.infoBox.additionalInformation,
			optionsTitle: hotel.activities.infoBox.optionsTitle,
			extraInformation: hotel.activities.infoBox.extraInformation,
		};
	

	return (
		<div>
			<div className="w-[85%] mx-auto mt-8">
				<div className="flex justify-between w-[85%] mx-auto mt-8">
					<div className="w-[70%] pr-8">
						<h2 className="text-[32px] font-bold mb-4">{hotel.activities.headingText}</h2>
						<p className="text-[16px] text-black mb-4">
							{hotel.activities.introParagraph}
						</p>
						<div className="flex flex-col gap-y-5">
							{" "}
							{/* skapar utrymme mellan boxarna */}
							{hotel.activities.categories.map((activity, index) => (
								<HorizontalRoomType
									key={index}
									activity={activity}
									title={activity.name}
									description={activity.description}
									imgUrl={activity.img}
								/>
							))}
						</div>
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

export default ActivitiesPage;
