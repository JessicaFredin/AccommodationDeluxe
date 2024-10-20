// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

import MiniCalendar from "./MiniCalendar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import dayjs from "dayjs";

function DateSelection() {
	const today = dayjs().format("YYYY-MM-DD");
	const [selectedDate, setSelectedDate] = useState(today);

	const [showCalendar, setShowCalendar] = useState(false);

	const handleDateClick = (date) => {
		setSelectedDate(date.format("YYYY-MM-DD"));
		setShowCalendar(false); // Close calendar after selection
	};

	return (
		<div className="relative inline-block">
			{/* Date input and icon */}
				<div className="flex items-center p-4 bg-white border rounded-lg cursor-pointer w-[150px] h-[45px]"
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

export default DateSelection;
