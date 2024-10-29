// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import PropTypes from "prop-types";
import MiniCalendar from "./MiniCalendar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import dayjs from "dayjs";

//hanterar datumval och visar en minikalender
function DateSelection({ onChange }) { // Tar emot onChange som en prop
	const today = dayjs().format("YYYY-MM-DD");
	const [selectedDate, setSelectedDate] = useState(today); // Håller valt datum
	const [showCalendar, setShowCalendar] = useState(false); // Styr visningen av kalendern

	// Funktioen körs om ett datum valts i kalendern
	const handleDateClick = (date) => {
		const formattedDate = date.format("YYYY-MM-DD"); // Formaterar datumet
		setSelectedDate(formattedDate); //updaterar valt datum
		setShowCalendar(false); // Stäng kalendern efter val
		onChange(formattedDate); // Anropar onChange för att skicka valt datum uppåt
	};

	return (
		<div className="relative inline-block">
			{/* Datumfältsinput och kalenderikon */}
			<div
				className="flex items-center p-4 bg-white border rounded-lg cursor-pointer w-[150px] h-[45px]"
				onClick={() => setShowCalendar(!showCalendar)} // Toggle calendar
			>
				<FontAwesomeIcon icon={faCalendar} className="mr-2" />
				<span>{selectedDate}</span>
			</div>

			{/* Visar mini-calender om showCalendar är true */}
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
// Validerar att onChange-prop skickas in
DateSelection.propTypes = {
	onChange: PropTypes.func.isRequired,
};

export default DateSelection;

