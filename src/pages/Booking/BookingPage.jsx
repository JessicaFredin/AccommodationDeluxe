import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import ScrollCheck from "../../components/BookingFlow/ScrollCheck";
import SelectionOverview from "../../components/BookingFlow/SelectionOverview";
import PaymentForm from "../../components/BookingFlow/PaymentForm";
import Button from "../../components/Button";
import AddOns from "../../components/BookingFlow/AddOns";
import NavBar from "../../components/NavBar";
import GuestDetailsForm from "../../components/BookingFlow/GuestDetailsForm";
import Summary from "../../components/BookingFlow/Summary";

function BookingPage() {
	// Capture query parameters
	const [searchParams] = useSearchParams();
	const hotelId = searchParams.get("hotelId");
	const roomIndex = searchParams.get("roomIndex");
	const startDate = searchParams.get("startDate");
	const endDate = searchParams.get("endDate");
	const adults = searchParams.get("adults");
	const children = searchParams.get("children");

	// Add state variables for airport transfer
	const [airportTransferSelected, setAirportTransferSelected] =
		useState(false);
	const [transferData, setTransferData] = useState(null);
	const [isTransferAdded, setIsTransferAdded] = useState(false);
	const [addedTransferData, setAddedTransferData] = useState(null);

	return (
		<div>
			<div className="fixed top-0 z-50 w-full">
				<NavBar />
			</div>
			<div className="fixed top-[70px] w-full z-40">
				<ScrollCheck />
			</div>
			<div className="flex flex-col items-center space-y-8 p-6 rounded-lg">
				<div className="mt-[120px] w-[60%]">
					<SelectionOverview
						hotelId={hotelId}
						roomIndex={roomIndex}
					/>
				</div>

				<div className="w-[60%]">
					<AddOns
						airportTransferSelected={airportTransferSelected}
						setAirportTransferSelected={setAirportTransferSelected}
						transferData={transferData}
						setTransferData={setTransferData}
						isTransferAdded={isTransferAdded}
						setIsTransferAdded={setIsTransferAdded}
						addedTransferData={addedTransferData}
						setAddedTransferData={setAddedTransferData}
					/>
				</div>

				<div className="w-[60%]">
					<GuestDetailsForm />
				</div>

				<div className="w-[60%]">
					<PaymentForm />
				</div>

				<div className="w-[60%]">
					<Summary
						hotelId={hotelId}
						roomIndex={roomIndex}
						startDate={startDate}
						endDate={endDate}
						transferData={addedTransferData}
					/>
				</div>

				{/* Button to proceed to confirmation */}
				<div className="flex items-center justify-center">
					<Link
						to={`/confirmation?hotelId=${hotelId}&roomIndex=${roomIndex}&startDate=${startDate}&endDate=${endDate}&adults=${adults}&children=${children}`}
					>
						<Button size="large" buttonText="Book" />
					</Link>
				</div>
			</div>
		</div>
	);
}

export default BookingPage;
