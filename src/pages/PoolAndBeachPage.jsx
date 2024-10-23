// import PoolAndBeach from "../components/PoolAndBeach";
import RoomCardsSection from "../components/RoomCardsSection";

import useHotelDetails from "../hooks/useHotelDetails"; // Hämta hotellinformation från hooks useHotelsDetails
import InfoBoxSpecificHotel from "../components/InfoBoxSpecificHotel";

function PoolAndBeachTheHotelPage() {
	const { hotel, error, loading } = useHotelDetails();
	// Hanterar laddning, fel och när hotellet inte hittas
	if (loading) {
		return <p>Loading hotel data...</p>;
	}
	if (error) {
		return <p>Error loading hotel data: {error.message}</p>;
	}
	if (!hotel) {
		return <p>Hotel not found.</p>;
	}

	const poolAndBeach = hotel.poolAndBeach || {};
	const beaches = poolAndBeach.beaches || [];

	// Definierar innehållet för infoBox, hämtat från hotel.poolAndBeach.infoBox
	const infoBoxContent = poolAndBeach.infoBox
		? {
				title: poolAndBeach.infoBox.title,
				additionalInformation:
					poolAndBeach.infoBox.additionalInformation,
				optionsTitle: poolAndBeach.infoBox.optionsTitle,
				extraInformation: poolAndBeach.infoBox.extraInformation,
		  }
		: null;

	return (
		<div>
			<div className="w-[85%] mx-auto mt-8">
				{/* Sektion med hotellinformation */}
				<div className="flex justify-between w-[85%] mx-auto mt-8">
					<div className="w-[70%] pr-8">
						{/* Check if poolAndBeach data exists before rendering */}
						{poolAndBeach.headingText && (
							<h2 className="text-[32px] font-bold mb-4">
								{poolAndBeach.headingText}
							</h2>
						)}
						{poolAndBeach.introParagraph && (
							<p className="text-[16px] text-black mb-4">
								{poolAndBeach.introParagraph}
							</p>
						)}

						<div className="w-[100%] rounded-lg">
							<div className="flex space-x-4 mb-6">
								{/* Bild1 tar upp 50% av utrymmet */}
								<img
									src={poolAndBeach.images[0]}
									alt="Main Image"
									className="w-1/2 h-[300px] rounded-lg shadow"
								/>
								{/* Definerar bredd, höjd och mellanrummet för det återstående två bilderna*/}
								<div className="flex flex-col space-y-4 w-1/2">
									<img
										src={poolAndBeach.images[1]}
										alt="Image 2"
										className="w-full h-[145px] rounded-lg shadow"
									/>
									<img
										src={poolAndBeach.images[2]}
										alt="Image 3"
										className="w-full h-[145px] rounded-lg shadow"
									/>
								</div>
							</div>
						</div>

						{/* Only render beaches section if there are any beaches */}
						{beaches.length > 0 ? (
							beaches.map((item, index) => (
								<div key={index} className="mb-6">
									<h3 className="text-[20px] font-bold text-black mb-2">
										{item.title}
									</h3>
									<p className="text-[16px] text-black">
										{item.description}
									</p>
								</div>
							))
						) : (
							<p>No beaches available at this hotel.</p> // Optional fallback if no beaches are found
						)}
					</div>

					{/* Render InfoBoxSpecificHotel only if infoBoxContent is available */}
					{infoBoxContent && (
						<InfoBoxSpecificHotel {...infoBoxContent} />
					)}
				</div>
			</div>
			<div>
				{/* Sektion för att visa RoomCardSection */}
				<RoomCardsSection />
			</div>
		</div>
	);
}

export default PoolAndBeachTheHotelPage;
