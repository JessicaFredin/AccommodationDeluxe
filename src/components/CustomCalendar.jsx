// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faXmark,
	faChevronLeft,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import MonthSelector from "./MonthSelector";

// For the calendar
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import updateLocale from "dayjs/plugin/updateLocale";
dayjs.extend(isBetween);
dayjs.extend(updateLocale);

// Update dayjs to start week from Monday
dayjs.updateLocale("en", { weekStart: 1 });

function CustomCalendar(props) {
	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);
	const [hoverDate, setHoverDate] = useState(null);
	const [currentMonth, setCurrentMonth] = useState(dayjs().startOf("month"));
	const [selectedRangeOption, setSelectedRangeOption] = useState(null); // Track which range option is selected
	const [activeTab, setActiveTab] = useState("Date");

	const [selectedMonths, setSelectedMonths] = useState([]);
	const [bookingType, setBookingType] = useState("");

	// Function to handle month selection changes
	const handleMonthSelection = (months) => {
		setSelectedMonths(months);
	};

	// Function to handle booking type changes
	const handleBookingTypeChange = (e) => {
		setBookingType(e.target.value);
	};

	// Function to generate dynamic text
	const getDynamicText = () => {
		    if (!bookingType && selectedMonths.length === 0) {
				return "Select days and months";
			}

			if (bookingType && selectedMonths.length === 0) {
				return "Select preferred month";
			}

			if (!bookingType && selectedMonths.length > 0) {
				return "Select preferred days";
			}

		const monthsText = selectedMonths
			.map((month) => {
				// Extract month name from 'MMM YYYY' format
				const [monthName] = month.split(" ");
				return monthName;
			})
			.join(", ");

		let nights = "1 night";
		if (bookingType === "weekend") {
			nights = "2 nights";
		} else if (bookingType === "week") {
			nights = "7 nights";
		} else if (bookingType === "month") {
			nights = "30 nights";
		} else if (bookingType === "other") {
			nights = "custom duration";
		}

		return `A ${bookingType} in ${monthsText} (${nights})`;
	};

	// Handle date click for range selection
	const handleDateClick = (date) => {
		if (!startDate) {
			setStartDate(date);
		} else if (!endDate && dayjs(date).isAfter(startDate)) {
			setEndDate(date);
		} else {
			setStartDate(date);
			setEndDate(null);
		}
	
	};
    

	// Function to toggle between Date and Flexible tabs
	const handleTabClick = (tab) => {
		setActiveTab(tab);
	};

	// Check if the day is within the selected range
	const isInRange = (date) => {
		if (startDate && !endDate && hoverDate) {
			return dayjs(date).isBetween(startDate, hoverDate, null, "[]");
		}
		if (startDate && endDate) {
			return dayjs(date).isBetween(startDate, endDate, null, "[]");
		}
		return false;
	};

	// Generate the days of a month for display
	const generateMonthDays = (month) => {
		const daysInMonth = month.daysInMonth();
		const firstDayOfMonth = month.startOf("month").day();
		const days = [];
		for (let i = 0; i < firstDayOfMonth; i++) {
			days.push(null);
		}
		for (let day = 1; day <= daysInMonth; day++) {
			days.push(month.date(day));
		}
		return days;
	};

	// Handle month navigation
	const handlePrevMonth = () => {
		setCurrentMonth(currentMonth.subtract(1, "month"));
	};

	const handleNextMonth = () => {
		setCurrentMonth(currentMonth.add(1, "month"));
	};

	const renderDay = (day) => {
		if (!day) return <div className="calendar-day empty"></div>;

		const isSelected = startDate && day.isSame(startDate, "day");
		const isEnd = endDate && day.isSame(endDate, "day");
		const inRange = isInRange(day);
		const isPastDate = day.isBefore(dayjs(), "day");

		return (
			<div
				className={`calendar-day ${
					isSelected || isEnd
						? "bg-accentPink text-black"
						: inRange
						? "bg-hoverColorLightPink text-black"
						: isPastDate
						? "text-grey"
						: ""
				} rounded-full hover:bg-hoverColorLightPink text-center p-2 cursor-pointer`}
				onClick={() => !isPastDate && handleDateClick(day)} // prevent past dates from being selected
				onMouseEnter={() => setHoverDate(day)}
			>
				{day.date()}
			</div>
		);
	};

	// Weekday labels (Mon, Tue, etc.)
	const weekdayLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

	// Handle selection of a range button
	const handleRangeOptionClick = (option) => {
		setSelectedRangeOption(option);
	};

	return (
		<div className="p-6 bg-white shadow-lg rounded-lg w-[800px]">
			{/* Tabs for Date and Flexible */}
			<div className="flex items-center justify-between mb-4">
				<div className="flex-1 flex justify-center">
					<div className="flex bg-grey rounded-full p-1 w-[400px]">
						<button
							className={`flex-1 py-2 px-6 rounded-full text-lg ${
								activeTab === "Date"
									? "bg-white text-black"
									: "bg-transparent text-black hover:bg-darkGrey"
							}`}
							onClick={() => handleTabClick("Date")}
						>
							Date
						</button>

						<button
							className={`flex-1 py-2 px-6 rounded-full text-lg ${
								activeTab === "Flexible"
									? "bg-white text-black"
									: "bg-transparent text-black hover:bg-darkGrey"
							}`}
							onClick={() => handleTabClick("Flexible")}
						>
							Flexible
						</button>
					</div>
				</div>
				<button
					onClick={props.closeCalendar}
					className="text-black bg-transparent text-2xl font-semibold hover:text-accentPink"
				>
					<FontAwesomeIcon icon={faXmark} />
				</button>
			</div>

			{/* Conditional Rendering for Date or Flexible */}
			{activeTab === "Date" ? (
				<div>
					{/* Date Picker */}
					<div className="grid grid-cols-2 gap-6">
						<div className="w-full">
							<div className="flex items-center justify-between mb-2">
								<button
									onClick={handlePrevMonth}
									className="text-lg hover:text-accentPink"
								>
									<FontAwesomeIcon icon={faChevronLeft} />
								</button>
								<h4 className="text-xl font-semibold">
									{currentMonth.format("MMMM YYYY")}
								</h4>
								<div></div>{" "}
								{/* Empty div to space the arrows correctly */}
							</div>
							{/* Weekday labels */}
							<div className="grid grid-cols-7 gap-2">
								{weekdayLabels.map((label) => (
									<div
										key={label}
										className="text-center text-sm"
									>
										{label}
									</div>
								))}
							</div>
							{/* Calendar days */}
							<div className="grid grid-cols-7 gap-2">
								{generateMonthDays(currentMonth).map(
									(day, index) => renderDay(day, index)
								)}
							</div>
						</div>

						<div className="w-full">
							<div className="flex items-center justify-between mb-2">
								<div></div>{" "}
								{/* Empty div to space the arrows correctly */}
								<h4 className="text-xl font-semibold">
									{currentMonth
										.add(1, "month")
										.format("MMMM YYYY")}
								</h4>
								<button
									onClick={handleNextMonth}
									className="text-lg hover:text-accentPink"
								>
									<FontAwesomeIcon icon={faChevronRight} />
								</button>
							</div>
							{/* Weekday labels */}
							<div className="grid grid-cols-7 gap-2">
								{weekdayLabels.map((label) => (
									<div
										key={label}
										className="text-center text-sm"
									>
										{label}
									</div>
								))}
							</div>
							{/* Calendar days */}
							<div className="grid grid-cols-7 gap-2">
								{generateMonthDays(
									currentMonth.add(1, "month")
								).map((day, index) => renderDay(day, index))}
							</div>
						</div>
					</div>

					{/* Date range options */}
					<div className="flex justify-between mb-4 mt-6">
						<Button
							buttonText={"Exact dates"}
							rounded={true}
							color="transparent"
							active={selectedRangeOption === "Exact dates"}
							onClick={() =>
								handleRangeOptionClick("Exact dates")
							}
						/>
						<Button
							buttonText={"± 1 day"}
							rounded={true}
							color="transparent"
							active={selectedRangeOption === "± 1 day"}
							onClick={() => handleRangeOptionClick("± 1 day")}
						/>
						<Button
							buttonText={"± 2 days"}
							rounded={true}
							color="transparent"
							active={selectedRangeOption === "± 2 days"}
							onClick={() => handleRangeOptionClick("± 2 days")}
						/>
						<Button
							buttonText={"± 3 days"}
							rounded={true}
							color="transparent"
							active={selectedRangeOption === "± 3 days"}
							onClick={() => handleRangeOptionClick("± 3 days")}
						/>
						<Button
							buttonText={"± 7 days"}
							rounded={true}
							color="transparent"
							active={selectedRangeOption === "± 7 days"}
							onClick={() => handleRangeOptionClick("± 7 days")}
						/>
						<Button
							buttonText={"± 14 days"}
							rounded={true}
							color="transparent"
							active={selectedRangeOption === "± 14 days"}
							onClick={() => handleRangeOptionClick("± 14 days")}
						/>
					</div>
				</div>
			) : (
				<div>
					{/* Flexible content */}
					<h4 className="text-lg font-semibold mb-4">
						How long do you want to stay?
					</h4>
					<div className="flex mb-4">
						{/* Radio buttons for booking type */}
						<div
							onChange={handleBookingTypeChange}
							className="flex"
						>
							<div className="flex items-center mr-[40px]">
								<label>
									<input
										type="radio"
										value="weekend"
										name="bookingType"
										className="mr-[10px]"
									/>{" "}
									A weekend
								</label>
							</div>
							<div className="flex items-center mr-[40px]">
								<label>
									<input
										type="radio"
										value="week"
										name="bookingType"
										className="mr-[10px]"
									/>{" "}
									A week
								</label>
							</div>
							<div className="flex items-center mr-[40px]">
								<label>
									<input
										type="radio"
										value="month"
										name="bookingType"
										className="mr-[10px]"
									/>{" "}
									A month
								</label>
							</div>
							<div className="flex items-center mr-[40px]">
								<label>
									<input
										type="radio"
										value="other"
										name="bookingType"
										className="mr-[10px]"
									/>{" "}
									Other
								</label>
							</div>
						</div>
					</div>

					<h4 className="text-lg font-semibold">
						When do you want to go?
					</h4>
					<span className="text-sm my-6">Select up to 3 months</span>

					{/* Scrollable months section */}
					<div className="relative">
						<div className="grid grid-cols-3 gap-2 overflow-x-auto scrollbar-hide">
							<MonthSelector
								selectedMonths={selectedMonths}
								onMonthChange={handleMonthSelection}
							/>
						</div>
					</div>
					{/* Dynamic Text */}
					<div>{getDynamicText()}</div>
				</div>
			)}

			{/* Apply button */}
			<div className="flex justify-end mt-6">
				<Button
					buttonText={"Apply"}
					rounded={true}
					color="pink"
					onClick={() => props.onApply(startDate, endDate)}
				/>
			</div>
		</div>
	);
}

CustomCalendar.propTypes = {
	startDate: PropTypes.instanceOf(Date),
	endDate: PropTypes.instanceOf(Date),
	setStartDate: PropTypes.func.isRequired,
	setEndDate: PropTypes.func.isRequired,
	onApply: PropTypes.func.isRequired,
	closeCalendar: PropTypes.func.isRequired,
};

export default CustomCalendar;
