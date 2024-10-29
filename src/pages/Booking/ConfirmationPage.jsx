// import React, { useRef } from "react";
// import PrimeSave from "../../assets/icons/PrimeSave";
// import CilPrint from "../../assets/icons/CilPrint";
// import { useHotelData } from "../../contexts/HotelDataContext";
// import { useSearchParams } from "react-router-dom";
// import dayjs from "dayjs";

// // Funktion för att generera ett bokningsnummer
// function generateRandomBookingNumber() {
// 	const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// 	let prefix = "";

// 	for (let i = 0; i < 3; i++) {
// 		const randomIndex = Math.floor(Math.random() * letters.length);
// 		prefix += letters[randomIndex];
// 	}

// 	const randomNumber = Math.floor(10000000 + Math.random() * 90000000);
// 	return `${prefix}-${randomNumber}`;
// }

// function ConfirmationPage() {
// 	const [searchParams] = useSearchParams();
// 	const hotelId = searchParams.get("hotelId");
// 	const roomIndex = searchParams.get("roomIndex");
// 	const startDate = searchParams.get("startDate");
// 	const endDate = searchParams.get("endDate");
// 	const adults = searchParams.get("adults");
// 	const children = searchParams.get("children");

// 	const { hotels, error } = useHotelData();

// 	// Referens till bokningsbekräftelsen för utskrift
// 	const bookingRef = useRef();

// 	if (error) {
// 		return <p>Error loading hotel data: {error.message}</p>;
// 	}
// 	if (!hotels) {
// 		return <p>Loading hotel data...</p>;
// 	}

// 	const hotel = hotels.find((hotel) => hotel.id === Number(hotelId));
// 	if (!hotel) {
// 		return <p>Hotel not found.</p>;
// 	}

// 	const room =
// 		hotel.rooms && hotel.rooms.length > 0 && hotel.rooms[roomIndex]
// 			? hotel.rooms[roomIndex]
// 			: null;

// 	if (!room) {
// 		return <p>Room not found.</p>;
// 	}

// 	const bookingNumber = generateRandomBookingNumber();
// 	const checkinDate = dayjs(startDate).format("DD MMMM YYYY");
// 	const checkoutDate = dayjs(endDate).format("DD MMMM YYYY");

// 	const importantInfo = [
// 		"Check-in is from 10 am and check-out is by 11:00 AM.",
// 		"To make your stay even more comfortable, we have offered you airport transfer. If you booked this, a confirmation will come separately to your email.",
// 		"If you have any other special requests prior to your stay, please do not hesitate to contact us at info@accommodationdeluxe.com.",
// 	];

// 	// Funktion för att skriva ut bokningsbekräftelsen
// 	const handlePrint = () => {
// 		window.print(); // Använder webbläsarens inbyggda print-funktion
// 	};

// 	return (
// 		<div>
// 			<div className="flex justify-end items-center w-full">
// 				{/* Ladda ner-knapp */}
// 				<a
// 					href="#"
// 					className="mr-2 text-black text-2xl cursor-pointer"
// 					title="Download booking confirmation as PDF"
// 				>
// 					<PrimeSave />
// 				</a>
				
// 				{/* Skriv ut-knapp */}
// 				<CilPrint
// 					className="mr-2 text-black text-2xl cursor-pointer"
// 					onClick={handlePrint}
// 					title="Print booking confirmation"
// 				/>
// 			</div>

// 			<div ref={bookingRef} className="p-6 bg-opacityLIghtBlue w-[1098px] mx-auto mt-10 rounded-md shadow-md">
// 				<h1 className="text-[40px] font-bold text-center mb-4">
// 					Thank you! Your booking is confirmed!
// 				</h1>
// 				<p className="mb-4 text[30px]">Dear Maria Svensson,</p>
// 				<p className="mb-4 text[30px]">
// 					Thank you for your reservation at {hotel.name}! We look
// 					forward to welcoming you to our luxurious hotel in the heart
// 					of Spain for an unforgettable stay.
// 				</p>

// 				<div className="flex justify-center mb-4">
// 					<img
// 						src={hotel.imgUrl}
// 						alt={hotel.name}
// 						className="w-3/4 rounded"
// 					/>
// 				</div>

// 				<div className="p-4 rounded-md shadow-sm mb-4">
// 					<h2 className="font-semibold mb-2">Booking Details:</h2>
// 					<ul className="list-disc pl-5">
// 						<li>Booking Number: {bookingNumber}</li>
// 						<li>Check-in Date: {checkinDate}</li>
// 						<li>Check-out Date: {checkoutDate}</li>
// 						<li>Room Type: {room.roomType}</li>
// 						<li>
// 							Number of Guests: {adults}
// 							{adults === "1" ? " Adult" : " Adults"}, {children}
// 							{children === "1" ? " Child" : " Children"}
// 						</li>
// 					</ul>
// 				</div>

// 				<div className="p-4 rounded-md shadow-sm mb-4">
// 					<h2 className="font-semibold mb-2">
// 						Important Information:
// 					</h2>
// 					<ul className="list-disc pl-5">
// 						{importantInfo.map((info, index) => (
// 							<li key={index}>{info}</li>
// 						))}
// 					</ul>
// 				</div>

// 				<p className="mb-4">
// 					We look forward to providing you with a fantastic experience
// 					at Hotel Riviera Resort.
// 				</p>

// 				<p className="font-bold">Best regards</p>
// 				<p>{hotel.name}</p>
// 				<div className="flex items-center mt-2">
// 					<span>{hotel.map?.location?.address}</span>
// 				</div>
// 				<div className="flex items-center mt-1">
// 					<span>+34 952 123 456</span>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

// export default ConfirmationPage;

/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import PrimeSave from "../../assets/icons/PrimeSave";
import CilPrint from "../../assets/icons/CilPrint";
import { useHotelData } from "../../contexts/HotelDataContext";
import { useSearchParams } from "react-router-dom";
import dayjs from "dayjs";
import jsPDF from "jspdf"; // Importera endast jsPDF

// Funktion för att generera ett bokningsnummer
function generateRandomBookingNumber() {
	const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	let prefix = "";

	for (let i = 0; i < 3; i++) {
		const randomIndex = Math.floor(Math.random() * letters.length);
		prefix += letters[randomIndex];
	}

	const randomNumber = Math.floor(10000000 + Math.random() * 90000000);
	return `${prefix}-${randomNumber}`;
}

function ConfirmationPage() {
	const [searchParams] = useSearchParams();
	const hotelId = searchParams.get("hotelId");
	const roomIndex = searchParams.get("roomIndex");
	const startDate = searchParams.get("startDate");
	const endDate = searchParams.get("endDate");
	const adults = searchParams.get("adults");
	const children = searchParams.get("children");

	const { hotels, error } = useHotelData();

	const bookingRef = useRef();

	if (error) {
		return <p>Error loading hotel data: {error.message}</p>;
	}
	if (!hotels) {
		return <p>Loading hotel data...</p>;
	}

	const hotel = hotels.find((hotel) => hotel.id === Number(hotelId));
	if (!hotel) {
		return <p>Hotel not found.</p>;
	}

	const room =
		hotel.rooms && hotel.rooms.length > 0 && hotel.rooms[roomIndex]
			? hotel.rooms[roomIndex]
			: null;

	if (!room) {
		return <p>Room not found.</p>;
	}

	const bookingNumber = generateRandomBookingNumber();
	const checkinDate = dayjs(startDate).format("DD MMMM YYYY");
	const checkoutDate = dayjs(endDate).format("DD MMMM YYYY");

	const importantInfo = [
		"Check-in is from 10 am and check-out is by 11:00 AM.",
		"To make your stay even more comfortable, we have offered you airport transfer. If you booked this, a confirmation will come separately to your email.",
		"If you have any other special requests prior to your stay, please do not hesitate to contact us at info@accommodationdeluxe.com.",
	];

	// Funktion för att skapa PDF och ladda ner den utan 'jspdf-autotable'
	const handleSaveAsPDF = () => {
		const doc = new jsPDF();
		doc.setFontSize(16);
		doc.text("Booking Confirmation", 20, 10); // Titel för PDF:en

		// Lägg till bokningsdetaljerna
		doc.setFontSize(12);
		doc.text(`Booking Number: ${bookingNumber}`, 20, 20);
		doc.text(`Check-in Date: ${checkinDate}`, 20, 30);
		doc.text(`Check-out Date: ${checkoutDate}`, 20, 40);
		doc.text(`Room Type: ${room.roomType}`, 20, 50);
		doc.text(`Number of Guests: ${adults} Adults, ${children} Children`, 20, 60);

		// Lägg till viktig information
		doc.text("Important Information:", 20, 80);
		importantInfo.forEach((info, index) => {
			doc.text(`${index + 1}. ${info}`, 20, 90 + index * 10);
		});

		// Ladda ner PDF:en
		doc.save("BookingConfirmation.pdf");
	};

	// Funktion för att skriva ut bokningsbekräftelsen
	const handlePrint = () => {
		window.print();
	};

	return (
		<div>
			<div className="flex justify-end items-center w-full">
				{/* Spara-knapp */}
				<a
					className="mr-2 text-black text-2xl cursor-pointer"
					onClick={handleSaveAsPDF}
					title="Save booking confirmation as PDF"
				>
					<PrimeSave />
				</a>

				{/* Skriv ut-knapp */}
				<CilPrint
					className="mr-2 text-black text-2xl cursor-pointer"
					onClick={handlePrint}
					title="Print booking confirmation"
				/>
			</div>

			<div ref={bookingRef} className="p-6 bg-opacityLIghtBlue w-[1098px] mx-auto mt-10 rounded-md shadow-md">
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
					<span>{hotel.map?.location?.address}</span>
				</div>
				<div className="flex items-center mt-1">
					<span>+34 952 123 456</span>
				</div>
			</div>
		</div>
	);
}

export default ConfirmationPage;

