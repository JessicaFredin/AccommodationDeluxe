// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

import RoomCardsSection from "../components/RoomCardsSection";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import {
	faChevronLeft,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import RiSunLine from "../assets/icons/RiSunLine";
import WaterDrop from "../assets/icons/WaterDrop";
import Umbrella from "../assets/icons/Umbrella";
//Definierar väderdata i en lista med varje månad som ett objekt med 6 värden
const weatherData = [
	{
		name: "January",
		dayTemp: 21,
		nightTemp: 15,
		sunHours: 8,
		waterTemp: 15,
		rainFreeDays: 30,
	},
	{
		name: "February",
		dayTemp: 22,
		nightTemp: 15,
		sunHours: 8,
		waterTemp: 15,
		rainFreeDays: 30,
	},
	{
		name: "March",
		dayTemp: 24,
		nightTemp: 17,
		sunHours: 8,
		waterTemp: 15,
		rainFreeDays: 30,
	},
	{
		name: "April",
		dayTemp: 25,
		nightTemp: 17,
		sunHours: 8,
		waterTemp: 15,
		rainFreeDays: 30,
	},
	{
		name: "May",
		dayTemp: 25,
		nightTemp: 17,
		sunHours: 8,
		waterTemp: 15,
		rainFreeDays: 30,
	},
	{
		name: "June",
		dayTemp: 27,
		nightTemp: 21,
		sunHours: 8,
		waterTemp: 15,
		rainFreeDays: 30,
	},
	{
		name: "July",
		dayTemp: 30,
		nightTemp: 23,
		sunHours: 9,
		waterTemp: 18,
		rainFreeDays: 28,
	},
	{
		name: "August",
		dayTemp: 29,
		nightTemp: 22,
		sunHours: 9,
		waterTemp: 18,
		rainFreeDays: 29,
	},
	{
		name: "September",
		dayTemp: 27,
		nightTemp: 20,
		sunHours: 8,
		waterTemp: 17,
		rainFreeDays: 30,
	},
	{
		name: "October",
		dayTemp: 24,
		nightTemp: 18,
		sunHours: 7,
		waterTemp: 16,
		rainFreeDays: 31,
	},
	{
		name: "November",
		dayTemp: 22,
		nightTemp: 16,
		sunHours: 6,
		waterTemp: 15,
		rainFreeDays: 30,
	},
	{
		name: "December",
		dayTemp: 21,
		nightTemp: 15,
		sunHours: 6,
		waterTemp: 15,
		rainFreeDays: 30,
	},
];

function Weather() {
	const [currentPage, setCurrentPage] = useState(0);
	{
		/*Sätter state för vilken vy som visas */
	}
	const itemsPerPage = 6;

	// Räknar ut vilka månader som ska visas i vyn
	const startIndex = currentPage * itemsPerPage;
	const currentMonths = weatherData.slice(
		startIndex,
		startIndex + itemsPerPage
	);

	// Funktion för att navigera mellan vyerna
	function goToNextPage() {
		if ((currentPage + 1) * itemsPerPage < weatherData.length) {
			setCurrentPage(currentPage + 1);
		}
	}

	function goToPreviousPage() {
		if (currentPage > 0) {
			setCurrentPage(currentPage - 1);
		}
	}

	return (
		<div>
			<div className="flex items-center justify-between w-full">
				{/* Left Button */}
				{currentPage > 0 && (
					<button
						onClick={goToPreviousPage}
						className="p-2 rounded-full bg-white shadow-lg hover:bg-opacityLightBlue transition duration-300"
					>
						<FontAwesomeIcon icon={faChevronLeft} />
					</button>
				)}

				{/* Definierar container och layout för vädret*/}
				<div className="flex-grow">
					<table className="bg-white text-center mb-4 w-full">
						<thead>
							<tr>
								{currentMonths.map((month, index) => (
									<th
										key={index}
										className="px-4 py-2 border-b text-lg font-medium bg-opacityLightBlue"
									>
										{month.name}
									</th>
								))}
							</tr>
						</thead>
						<tbody>
							<tr>
								{" "}
								{/*Iterar igenom listan med objekt och ritar upp dem  */}
								{currentMonths.map((month, index) => (
									<td
										key={index}
										className="px-4 py-4 border-b"
									>
										<div className="flex flex-col items-center">
											<span className="flex items-center text-black">
												<RiSunLine className="text-yellow-500 mr-1 text-md" />
												{month.dayTemp}°
											</span>
											<span className="flex items-center text-darkGrey">
												<FontAwesomeIcon
													icon={faMoon}
													className="mr-1"
												/>
												{month.nightTemp}°
											</span>
										</div>
									</td>
								))}
							</tr>
							<tr>
								{currentMonths.map((month, index) => (
									<td
										key={index}
										className="px-4 py-4 border-b"
									>
										<div className="flex flex-col items-center">
											<div className="flex items-center">
												<RiSunLine className="text-yellow-500 text-xl mr-1" />
												<span>{month.sunHours}</span>
											</div>
											<span className="text-Black">
												Soltimmar/dag
											</span>
										</div>
									</td>
								))}
							</tr>
							<tr>
								{currentMonths.map((month, index) => (
									<td
										key={index}
										className="px-4 py-4 border-b"
									>
										<div className="flex flex-col items-center">
											<div className="flex items-center">
												<WaterDrop className="text-[18px] text-secondaryLightBlue mr-1" />
												<span>{month.waterTemp}°</span>
											</div>
											<span className="text-Black">
												Vattentemperatur
											</span>
										</div>
									</td>
								))}
							</tr>
							<tr>
								{currentMonths.map((month, index) => (
									<td key={index} className="px-4 py-4">
										<div className="flex flex-col items-center">
											<div className="flex items-center">
												<Umbrella className="text-[18px] text-accentPink mr-1" />
												<span>
													{month.rainFreeDays}
												</span>
											</div>
											<span className="text-Black">
												Regnfria dagar
											</span>
										</div>
									</td>
								))}
							</tr>
						</tbody>
					</table>
				</div>

				{/* Right Button */}
				{currentPage <
					Math.ceil(weatherData.length / itemsPerPage) - 1 && (
					<button
						onClick={goToNextPage}
						className="p-2 rounded-full bg-white shadow-lg hover:bg-opacityLightBlue transition duration-300"
					>
						<FontAwesomeIcon icon={faChevronRight} />
					</button>
				)}
			</div>
			<RoomCardsSection />
		</div>
	);
}

export default Weather;
