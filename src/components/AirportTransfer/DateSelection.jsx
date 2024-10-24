// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import PropTypes from "prop-types";
import MiniCalendar from "./MiniCalendar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import dayjs from "dayjs";

function DateSelection({ onChange }) { // Ta emot onChange som en prop
	const today = dayjs().format("YYYY-MM-DD");
	const [selectedDate, setSelectedDate] = useState(today);
	const [showCalendar, setShowCalendar] = useState(false);

	const handleDateClick = (date) => {
		const formattedDate = date.format("YYYY-MM-DD");
		setSelectedDate(formattedDate);
		setShowCalendar(false); // Stäng kalendern efter val
		onChange(formattedDate); // Anropa onChange för att skicka valt datum uppåt
	};

	return (
		<div className="relative inline-block">
			{/* Date input and icon */}
			<div
				className="flex items-center p-4 bg-white border rounded-lg cursor-pointer w-[150px] h-[45px]"
				onClick={() => setShowCalendar(!showCalendar)} // Toggle calendar
			>
				<FontAwesomeIcon icon={faCalendar} className="mr-2" />
				<span>{selectedDate}</span>
			</div>

			{/* MiniCalendar - toggle visibility */}
			{showCalendar && (
				<div className="absolute mt-2 z-10">
					<MiniCalendar
						onDateClick={handleDateClick}
						selectedDate={selectedDate}
						today={today}
					/>
				</div>
			)}
		</div>
	);
}

DateSelection.propTypes = {
	onChange: PropTypes.func.isRequired, // Validera onChange-prop
};

export default DateSelection;

