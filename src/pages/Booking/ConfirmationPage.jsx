// eslint-disable-next-line no-unused-vars
import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { FaMapMarkerAlt, FaPhone, FaPrint, FaFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import HotelRoomImage1 from "../../assets/images/HotelRoomImage1.png";

// Definierar textinnehåll utanför return i konstanter för enklare underhåll
const title = "Thank you! Your booking is confirmed!";
const greeting = "Dear Maria Svensson,";
const welcomeMessage = "Thank you for your reservation at Hotel Riviera Resort! We look forward to welcoming you to our luxurious hotel in the heart of Spain for an unforgettable stay.";
const bookingDetails = {
    bookingNumber: "MBR-49283756",
    checkIn: "10am, 3 November 2024",
    checkOut: "11am, 10 November 2024",
    roomType: "Double Room",
    guests: 2,
};
const importantInfo = [
    "Check-in is from 10 am and check-out is by 11:00 AM.",
    "To make your stay even more comfortable, we have offered you airport transfer. If you booked this, a confirmation will come separately to your email.",
    "If you have any other special requests prior to your stay, please do not hesitate to contact us at info@accommodationdeluxe.com.",
];
const farewell = "We look forward to providing you with a fantastic experience at Hotel Riviera Resort.";
const signature = "Best regards,";
const hotelName = "Hotel Riviera Resort";
const address = "Sunset Boulevard 25, Playa de la Mar, 29600 Marbella, Spain.";
const phoneNumber = "+34 952 123 456";
 //Returnerar confirmation och information för bokning i relevanta element
function ConfirmationPage() {
    return (
		<div>
			{/* <FontAwesomeIcon icon={FaPrint} className="mr-2 text-black" />
			<FontAwesomeIcon icon={FaFloppyDisk} className="mr-2 text-black" /> */}
			<div className="p-6 bg-opacityLIghtBlue w-[1098px] mx-auto mt-10 rounded-md shadow-md">
				<h1 className="text-[40px] font-bold text-center mb-4">
					{title}
				</h1>
				<p className="mb-4 text[30px]">
					{greeting}
					{welcomeMessage}
				</p>

				<div className="flex justify-center mb-4">
					<img
						src={HotelRoomImage1}
						alt="Hotel Room"
						className="w-3/4 rounded"
					/>
				</div>

				<div className="p-4 rounded-md shadow-sm mb-4">
					<h2 className="font-semibold mb-2">Booking Details:</h2>
					<ul className="list-disc pl-5">
						<li>Booking Number: {bookingDetails.bookingNumber}</li>
						<li>Check-in Date: {bookingDetails.checkIn}</li>
						<li>Check-out Date: {bookingDetails.checkOut}</li>
						<li>Room Type: {bookingDetails.roomType}</li>
						<li>Number of Guests: {bookingDetails.guests}</li>
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

				<p className="mb-4">{farewell}</p>

				<p className="font-bold">{signature}</p>
				<p>{hotelName}</p>
				<div className="flex items-center mt-2">
                {/* <FontAwesomeIcon icon={FaMapMarkerAlt} className="mr-2 text-accentPink" /> */}
					<span>{address}</span>
				</div>
				<div className="flex items-center mt-1">
                {/* <FontAwesomeIcon icon={FaPhone} className="mr-2 text-grey" /> */}
					<span>{phoneNumber}</span>
				</div>
			</div>
		</div>
	);
};

export default ConfirmationPage;