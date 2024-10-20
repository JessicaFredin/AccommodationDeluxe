// eslint-disable-next-line no-unused-vars
import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCalendarAlt,
	faChevronLeft,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function generateNextTwelveMonths() {
	const months = [];
	const startMonth = dayjs(); // Current month

	for (let i = 0; i < 12; i++) {
		const month = startMonth.add(i, "month");
		months.push({
			name: month.format("MMM"), // e.g., 'Oct'
			year: month.format("YYYY"), // e.g., '2024'
			full: month.format("MMM YYYY"),
		});
	}

	return months;
}

function MonthSelector(props) {
	const selectedMonths = props.selectedMonths;
    const onMonthChange = props.onMonthChange;
    
	const months = generateNextTwelveMonths();
	const scrollContainerRef = useRef(null);
	// const [selectedMonths, setSelectedMonths] = useState([]);

	// State to manage the visibility of navigation buttons
	const [isScrolledToStart, setIsScrolledToStart] = useState(true);
	const [isScrolledToEnd, setIsScrolledToEnd] = useState(false);

	const handlePrevClick = () => {
		if (scrollContainerRef.current) {
			scrollContainerRef.current.scrollBy({
				left: -100,
				behavior: "smooth",
			});
		}
	};

	const handleNextClick = () => {
		if (scrollContainerRef.current) {
			scrollContainerRef.current.scrollBy({
				left: 100,
				behavior: "smooth",
			});
		}
	};

	// Update the visibility of navigation buttons based on scroll position
	useEffect(() => {
		const scrollContainer = scrollContainerRef.current;

		const handleScroll = () => {
			if (scrollContainer) {
				const { scrollLeft, scrollWidth, clientWidth } =
					scrollContainer;
				setIsScrolledToStart(scrollLeft <= 0);
				setIsScrolledToEnd(scrollLeft + clientWidth >= scrollWidth);
			}
		};

		if (scrollContainer) {
			scrollContainer.addEventListener("scroll", handleScroll);
			// Check initial scroll position
			handleScroll();
		}

		return () => {
			if (scrollContainer) {
				scrollContainer.removeEventListener("scroll", handleScroll);
			}
		};
	}, []);

	// const toggleMonth = (month) => {
	// 	if (selectedMonths.includes(month)) {
	// 		// If the month is already selected, remove it
	// 		setSelectedMonths(selectedMonths.filter((m) => m !== month));
	// 	} else if (selectedMonths.length < 3) {
	// 		// If less than 3 months are selected, add the new month
	// 		setSelectedMonths([...selectedMonths, month]);
	// 	} // If 3 months are already selected, do nothing
	// };

	// Toggle month selection
	const toggleMonth = (month) => {
		let newSelectedMonths = [];
		if (selectedMonths.includes(month)) {
			newSelectedMonths = selectedMonths.filter((m) => m !== month);
		} else if (selectedMonths.length < 3) {
			newSelectedMonths = [...selectedMonths, month];
		} else {
			newSelectedMonths = [...selectedMonths]; // No change if limit reached
		}
		onMonthChange(newSelectedMonths);
	};

	return (
		<div className="relative my-3 w-[700px]">
			{/* Custom left arrow */}
			{!isScrolledToStart && (
				<button
					onClick={handlePrevClick}
					className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white border border-grey rounded-full w-10 h-10 flex items-center justify-center shadow-md"
				>
					<FontAwesomeIcon icon={faChevronLeft} />
				</button>
			)}

			{/* Scrollable months container */}
			<div
				ref={scrollContainerRef}
				className="flex overflow-x-auto space-x-4 scrollbar-hide"
			>
				{months.map((month, index) => {
					const monthKey = `${month.name} ${month.year}`;
					const isSelected = selectedMonths.includes(monthKey);
					// const isSelected = selectedMonths.includes(month.full);
					return (
						<button
							key={index}
							onClick={() => toggleMonth(monthKey)}
							disabled={!isSelected && selectedMonths.length >= 3}
							className={`border-2 rounded-md p-4 text-center min-w-[80px] flex flex-col items-center ${
								isSelected
									? "border-accentPink bg-hoverColorLightPink cursor-pointer"
									: selectedMonths.length >= 3
									? "border-grey bg-grey cursor-not-allowed opacity-50"
									: "border-grey bg-white cursor-pointer"
							}`}
						>
							<FontAwesomeIcon
								icon={faCalendarAlt}
								className="text-lg mb-1"
							/>
							<span className="text-sm">{month.name}</span>
							<span className="text-xs">{month.year}</span>
						</button>
					);
				})}
			</div>

			{/* Custom right arrow */}
			{!isScrolledToEnd && (
				<button
					onClick={handleNextClick}
					className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center shadow-md"
				>
					<FontAwesomeIcon icon={faChevronRight} />
				</button>
			)}
		</div>
	);
}

// Add PropTypes validation
MonthSelector.propTypes = {
	selectedMonths: PropTypes.arrayOf(PropTypes.string).isRequired,
	onMonthChange: PropTypes.func.isRequired,
};

export default MonthSelector;
