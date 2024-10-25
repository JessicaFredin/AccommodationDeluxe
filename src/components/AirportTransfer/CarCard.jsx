/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Car from "../../assets/images/Car.png"; // Adjust path if necessary
import Button from "../Button";
import GuestDetailsForm from "../BookingFlow/GuestDetailsForm";
import PaymentForm from "../BookingFlow/PaymentForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCalendarAlt,
	faClock,
	faUserFriends,
	faSuitcaseRolling,
	faShoppingBag,
	faCheck,
	faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

import AirportTransferConfirmation from "./AirportTransferConfirmation";

function CarCard({ transferData }) {
	const [currentStep, setCurrentStep] = useState(0);
	const [showConfirmButton, setShowConfirmButton] = useState(false);

	const handleNextStep = () => {
		setCurrentStep(currentStep + 1);
		if (currentStep === 0) {
			setShowConfirmButton(true); // Show the "Confirm" button after "Choose" is clicked
		}
	};

	const [showPopup, setShowPopup] = useState(false);

	const handleConfirm = () => {
		setShowPopup(true);
	};

	const handleClosePopup = () => {
		setShowPopup(false);
	};

	return (
		<div className="w-full max-w-[800px] bg-white rounded-lg p-6 shadow-md mx-auto mt-8">
			{/* Car Card with details for one way trip */}
			<div className="flex justify-between items-center mb-4">
				<div className="flex flex-col items-start">
					<h2 className="text-xl font-bold mb-4">
						Standard car – One way
					</h2>
					<img
						src={Car}
						alt="Car"
						className="w-[200px] h-auto rounded-lg"
					/>
				</div>

				<div className="flex-grow ml-4">
					<div className="flex">
						<ul className="text-gray-700 text-sm space-y-2">
							<li className="flex items-center">
								<FontAwesomeIcon
									icon={faMapMarkerAlt}
									className="mr-2"
								/>{" "}
								From: {transferData.fromLocation}
							</li>
							<li className="flex items-center">
								<FontAwesomeIcon
									icon={faMapMarkerAlt}
									className="mr-2"
								/>{" "}
								To: {transferData.toLocation}
							</li>
							<li className="flex items-center">
								<FontAwesomeIcon
									icon={faCalendarAlt}
									className="mr-2"
								/>{" "}
								{transferData.date}
							</li>
							<li className="flex items-center">
								<FontAwesomeIcon
									icon={faClock}
									className="mr-2"
								/>{" "}
								{transferData.time}
							</li>
						</ul>

						<ul className="text-gray-700 text-sm space-y-2 ml-8">
							<li className="flex items-center">
								<FontAwesomeIcon
									icon={faUserFriends}
									className="mr-2"
								/>{" "}
								{transferData.passengers} people
							</li>
							<li className="flex items-center">
								<FontAwesomeIcon
									icon={faSuitcaseRolling}
									className="mr-2"
								/>{" "}
								5 suitcases
							</li>
							<li className="flex items-center">
								<FontAwesomeIcon
									icon={faShoppingBag}
									className="mr-2"
								/>{" "}
								6 smaller bags
							</li>
							<li className="flex items-center">
								<FontAwesomeIcon
									icon={faCheck}
									className="mr-2 text-green-500"
								/>{" "}
								Free cancellation
							</li>
						</ul>
					</div>
				</div>
			</div>

			{/* Car Card for Return Trip */}
			{transferData.returnTrip && (
				<div className="flex justify-between items-center mb-4">
					<div className="flex flex-col items-start">
						<h2 className="text-xl font-bold mb-4">
							Standard car – Return
						</h2>
						<img
							src={Car}
							alt="Car"
							className="w-[200px] h-auto rounded-lg"
						/>
					</div>

					<div className="flex-grow ml-4">
						<div className="flex">
							<ul className="text-gray-700 text-sm space-y-2">
								<li className="flex items-center">
									<FontAwesomeIcon
										icon={faMapMarkerAlt}
										className="mr-2"
									/>{" "}
									From: {transferData.returnTrip.fromLocation}
								</li>
								<li className="flex items-center">
									<FontAwesomeIcon
										icon={faMapMarkerAlt}
										className="mr-2"
									/>{" "}
									To: {transferData.returnTrip.toLocation}
								</li>
								<li className="flex items-center">
									<FontAwesomeIcon
										icon={faCalendarAlt}
										className="mr-2"
									/>{" "}
									{transferData.returnTrip.date}
								</li>
								<li className="flex items-center">
									<FontAwesomeIcon
										icon={faClock}
										className="mr-2"
									/>{" "}
									{transferData.returnTrip.time}
								</li>
							</ul>

							<ul className="text-gray-700 text-sm space-y-2 ml-8">
								<li className="flex items-center">
									<FontAwesomeIcon
										icon={faUserFriends}
										className="mr-2"
									/>{" "}
									{transferData.returnTrip.passengers} people
								</li>
								<li className="flex items-center">
									<FontAwesomeIcon
										icon={faSuitcaseRolling}
										className="mr-2"
									/>{" "}
									5 suitcases
								</li>
								<li className="flex items-center">
									<FontAwesomeIcon
										icon={faShoppingBag}
										className="mr-2"
									/>{" "}
									6 smaller bags
								</li>
								<li className="flex items-center">
									<FontAwesomeIcon
										icon={faCheck}
										className="mr-2 text-green-500"
									/>{" "}
									Free cancellation
								</li>
							</ul>
						</div>
					</div>
				</div>
			)}

			{/* Show price and button at the bottom */}
			<div className="text-center mt-4">
				{!showConfirmButton && (
					<div className="flex flex-col items-end justify-end">
						{/* Show only return price if returnTrip is selected */}
						{transferData.returnTrip ? (
							<p className="text-lg font-bold mb-2 text-center">
								Tot: € 144
							</p>
						) : (
							<p className="text-lg font-bold mb-2 text-center">
								Tot: € 78
							</p>
						)}
						<Button
							size="medium"
							buttonText="Choose"
							onClick={handleNextStep}
						/>
					</div>
				)}
			</div>

			{/* Guest Details Form */}
			{currentStep >= 1 && (
				<div className="w-full max-w-[600px] mx-auto mt-6">
					<GuestDetailsForm onNext={handleNextStep} />
				</div>
			)}

			{/* Payment Form */}
			{currentStep >= 1 && (
				<div className="w-full max-w-[600px] mx-auto mt-6">
					<PaymentForm />
				</div>
			)}

			{/* Confirm Button after guest details and payment form */}
			{showConfirmButton && currentStep >= 1 && (
				<div className="text-center mt-6">
					<Button
						size="large"
						buttonText="Confirm"
						onClick={handleConfirm}
					/>
				</div>
			)}

			{showPopup && (
				<AirportTransferConfirmation onClose={handleClosePopup} />
			)}
		</div>
	);
}

export default CarCard;
