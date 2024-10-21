
import InfoBoxSpecificHotel from "../components/InfoBoxSpecificHotel";
import HorizontalRoomType from "../components/HorizontalRoomType";
import RoomCardsSection from "../components/RoomCardsSection";
// import Activity1 from "../assets/images/Activity1.png";
// import Activity2 from "../assets/images/Activity2.png";
// import Activity3 from "../assets/images/Activity3.png";
// import Activity4 from "../assets/images/Activity4.png";

import useHotelDetails from "../hooks/useHotelDetails";


// const activities = [
// 	{
// 		title: "Spa",
// 		description:
// 			"Escape to pure relaxation at our spa, where soothing treatments and a tranquil atmosphere rejuvenate your mind, body, and soul. From calming massages to luxurious facials, every moment is designed for your well-being. Let stress melt away as you unwind in our serene sanctuary.",
// 		imgUrl: Activity1,
// 	},
// 	{
// 		title: "Gym",
// 		description:
// 			"Elevate your fitness routine in our state-of-the-art gym, equipped with the latest machines and free weights. Whether you’re lifting, running, or stretching, we’ve got you covered. Stay energized with personalized training options and breathtaking views, making every workout  inspiring.",
// 		imgUrl: Activity2,
// 	},
// 	{
// 		title: "Group training",
// 		description:
// 			"Elevate your fitness routine with our dynamic group classes, designed to challenge and energize. From yoga to high-intensity workouts, we offer something for every level.Stay motivated with expert instructors and a supportive atmosphere, making every session both fun and effective.",
// 		imgUrl: Activity3,
// 	},
// 	{
// 		title: "Yoga",
// 		description:
// 			"Elevate your wellness with yoga sessions, where the soothing sound of waves enhances your practice. Whether you're stretching, meditating, or flowing, we've got you covered. Stay balanced with personalized guidance and breathtaking ocean views, making every session both calming and inspiring.",
// 		imgUrl: Activity4,
// 	},
// ];

function ActivitiesPage() {
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
		// Define the info box content for this view
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
