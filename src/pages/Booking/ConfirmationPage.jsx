// eslint-disable-next-line no-unused-vars
import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { FaMapMarkerAlt, FaPhone } from '@fortawesome/free-solid-svg-icons';
import PrimeSave from "../../assets/icons/PrimeSave";
import CilPrint from "../../assets/icons/CilPrint";
import { useHotelData } from "../../contexts/HotelDataContext";
// import { useSearchParamsContext } from "../../contexts/SearchParamsContext";
import { useSearchParams } from "react-router-dom";
import dayjs from "dayjs";

// // Definierar textinnehåll utanför return i konstanter för enklare underhåll
// const title = "Thank you! Your booking is confirmed!";
// const greeting = "Dear Maria Svensson,";
// const welcomeMessage = "Thank you for your reservation at Hotel Riviera Resort! We look forward to welcoming you to our luxurious hotel in the heart of Spain for an unforgettable stay.";
// const bookingDetails = {
//     bookingNumber: "MBR-49283756",
//     checkIn: "10am, 3 November 2024",
//     checkOut: "11am, 10 November 2024",
//     roomType: "Double Room",
//     guests: 2
// };
// const importantInfo = [
//     "Check-in is from 10 am and check-out is by 11:00 AM.",
//     "To make your stay even more comfortable, we have offered you airport transfer. If you booked this, a confirmation will come separately to your email.",
//     "If you have any other special requests prior to your stay, please do not hesitate to contact us at info@accommodationdeluxe.com.",
// ];
// const farewell = "We look forward to providing you with a fantastic experience at Hotel Riviera Resort.";
// const signature = "Best regards,";
// const hotelName = "Hotel Riviera Resort";
// const address = "Sunset Boulevard 25, Playa de la Mar, 29600 Marbella, Spain.";
// const phoneNumber = "+34 952 123 456";

// Generate a random booking number
function generateRandomBookingNumber() {
	const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Set of uppercase letters
	let prefix = "";

	// Generate 3 random letters for the prefix
	for (let i = 0; i < 3; i++) {
		const randomIndex = Math.floor(Math.random() * letters.length);
		prefix += letters[randomIndex];
	}

	// const prefix = "MBR-";
	const randomNumber = Math.floor(10000000 + Math.random() * 90000000); // Generates an 8-digit number
	// Return the concatenated booking number
	return `${prefix}-${randomNumber}`;
}

function ConfirmationPage() {
	// Fetch the query parameters directly from the URL
	const [searchParams] = useSearchParams();
	const hotelId = searchParams.get("hotelId");
	const roomIndex = searchParams.get("roomIndex");
	const startDate = searchParams.get("startDate");
	const endDate = searchParams.get("endDate");
	const adults = searchParams.get("adults");
	const children = searchParams.get("children");

	const { hotels, error } = useHotelData(); // Fetch hotel data from context

	console.log("This", hotels);
	console.log("Hotel ID:", hotelId);
	console.log("Room index:", roomIndex);

	// Handle error and loading states
	if (error) {
		return <p>Error loading hotel data: {error.message}</p>;
	}
	if (!hotels) {
		return <p>Loading hotel data...</p>;
	}

	// Find the specific hotel by hotelId
	const hotel = hotels.find((hotel) => hotel.id === Number(hotelId));

	// Handle case where the hotel is not found
	if (!hotel) {
		return <p>Hotel not found.</p>;
	}

	console.log("Hotel Details:", hotel.name);

	// const { searchParams } = useSearchParamsContext(); // Access global search parameters
	// const { startDate, endDate, adults, children, hotelId } = searchParams;
	// const { hotels, error } = useHotelData(); // Get the hotel data from context
	// const [hotel, setHotel] = useState(null);
	// const [roomType, setRoomType] = useState("");
	// const [bookingNumber, setBookingNumber] = useState("");
	console.log("This", hotels);
	console.log("Chililulu", hotelId);
	console.log("what:", searchParams);
	console.log(
		"Available hotel IDs:",
		hotels.map((hotel) => hotel.id)
	);

	// // Handle error and loading states
	// if (error) {
	// 	return <p>Error loading hotel data: {error.message}</p>;
	// }
	// if (!hotels) {
	// 	return <p>Loading hotel data...</p>;
	// }

	// // Find the specific hotel by hotelId
	// const hotel = hotels.find((hotel) => hotel.id === Number(hotelId));

	// // Handle case where the hotel is not found
	// if (!hotel) {
	// 	return <p>Hotel not found.</p>;
	// }

	console.log("Wohooo That", hotel.name);

	// Check if roomIndex is a valid number and within bounds of the hotel's rooms array
	const room =
		hotel.rooms && hotel.rooms.length > 0 && hotel.rooms[roomIndex]
			? hotel.rooms[roomIndex]
			: null;

	if (!room) {
		return <p>Room not found.</p>;
	}

	console.log("Selected Room:", room.roomType);

	const bookingNumber = generateRandomBookingNumber();

	// Format the check-in and check-out dates
	const checkinDate = dayjs(startDate).format("DD MMMM YYYY");
	const checkoutDate = dayjs(endDate).format("DD MMMM YYYY");

	const importantInfo = [
		"Check-in is from 10 am and check-out is by 11:00 AM.",
		"To make your stay even more comfortable, we have offered you airport transfer. If you booked this, a confirmation will come separately to your email.",
		"If you have any other special requests prior to your stay, please do not hesitate to contact us at info@accommodationdeluxe.com.",
	];

	return (
		<div>
			<PrimeSave className="mr-2 text-black" />
			<CilPrint className="mr-2 text-black" />
			<div className="p-6 bg-opacityLIghtBlue w-[1098px] mx-auto mt-10 rounded-md shadow-md">
				<h1 className="text-[40px] font-bold text-center mb-4">
					Thank you! Your booking is confirmed!
				</h1>
				<p className="mb-4 text[30px]">Dear Maria Svensson,</p>
				<p className="mb-4 text[30px]">
					Thank you for your reservation at {hotel.name}! We look
					forward to welcoming you to our luxurious hotel in the heart
					of Spain for an unforgettable stay.
				</p>

				<div className="flex justify-center mb-4">
					<img
						src={hotel.imgUrl}
						alt={hotel.name}
						className="w-3/4 rounded"
					/>
				</div>

				<div className="p-4 rounded-md shadow-sm mb-4">
					<h2 className="font-semibold mb-2">Booking Details:</h2>
					<ul className="list-disc pl-5">
						<li>Booking Number: {bookingNumber}</li>
						<li>Check-in Date: {checkinDate}</li>
						<li>Check-out Date: {checkoutDate}</li>
						<li>Room Type: {room.roomType}</li>
						<li>
							Number of Guests: {adults}
							{adults === "1" ? " Adult" : " Adults"}, {children}
							{children === "1" ? " Child" : " Children"}
						</li>
					</ul>
				</div>

				<div className="p-4 rounded-md shadow-sm mb-4">
					<h2 className="font-semibold mb-2">
						Important Information:
					</h2>
					<ul className="list-disc pl-5">
						{importantInfo.map((info, index) => (
							<li key={index}>{info}</li>
						))}
					</ul>
				</div>

				<p className="mb-4">
					We look forward to providing you with a fantastic experience
					at Hotel Riviera Resort.
				</p>

				<p className="font-bold">Best regards</p>
				<p>{hotel.name}</p>
				<div className="flex items-center mt-2">
					{/* <FontAwesomeIcon icon={FaMapMarkerAlt} className="mr-2 text-accentPink" /> */}
					{/* <span>{hotel.map.location.address}</span> */}

					{/* Using optional chaining to avoid crashing if location is undefined */}
					<span>{hotel.map?.location?.address}</span>
				</div>
				<div className="flex items-center mt-1">
					{/* <FontAwesomeIcon icon={FaPhone} className="mr-2 text-grey" /> */}
					<span>+34 952 123 456</span>
				</div>
			</div>
		</div>
	);
}

export default ConfirmationPage;
