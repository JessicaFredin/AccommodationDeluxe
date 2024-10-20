/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

import ScrollCheck from "../../components/BookingFlow/ScrollCheck";
import SelectionOverview from "../../components/BookingFlow/SelectionOverview";
import PaymentForm from "../../components/BookingFlow/PaymentForm";
import Button from "../../components/Button";
import AddOns from "../../components/BookingFlow/AddOns";
import NavBar from "../../components/NavBar";
import GuestDetailsForm from "../../components/BookingFlow/GuestDetailsForm";

function BookingPage() {
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
					<SelectionOverview />
				</div>

				<div className="w-[60%]">
					<AddOns />
				</div>

				<div className="w-[60%]">
					<GuestDetailsForm />
				</div>

				<div className="w-[60%]">
					<PaymentForm />
				</div>

				{/* Knapp */}
				<div className="flex items-center justify-center">
					<Link to="/confirmation">
						<Button size="large" buttonText="Book" />
					</Link>
				</div>
			</div>
		</div>
	);
}

export default BookingPage;
