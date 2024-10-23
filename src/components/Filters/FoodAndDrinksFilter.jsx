// FoodAndDrinksFilter.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

// eslint-disable-next-line react/prop-types
function FoodAndDrinksFilter({ setFilters }) {
	const [selectedOptions, setSelectedOptions] = useState([]);

	const toggleOption = (option) => {
		const newOptions = selectedOptions.includes(option)
			? selectedOptions.filter((o) => o !== option)
			: [...selectedOptions, option];
		setSelectedOptions(newOptions);
		setFilters((prev) => ({ ...prev, foodAndDrinks: newOptions }));
	};

	return (
		<div>
			<div className="p-4 max-w-sm">
				<div className="flex w-full items-center -mx-3 pb-4">
					<h3 className="text-lg font-semibold">Food & drinks</h3>
				</div>

				<div className="space-y-3">
					<label className="flex items-center">
						<input
							type="checkbox"
							className="mr-2 w-4 h-4"
							checked={selectedOptions.includes("all_inclusive")}
							onChange={() => toggleOption("all_inclusive")}
						/>
						<span className="text-sm">All Inclusive</span>
					</label>

					<label className="flex items-center">
						<input
							type="checkbox"
							className="mr-2 w-4 h-4"
							checked={selectedOptions.includes(
								"breakfast_included"
							)}
							onChange={() => toggleOption("breakfast_included")}
						/>
						<span className="text-sm">Breakfast included</span>
					</label>

					<label className="flex items-center">
						<input
							type="checkbox"
							className="mr-2 w-4 h-4"
							checked={selectedOptions.includes(
								"half_board_included"
							)}
							onChange={() => toggleOption("half_board_included")}
						/>
						<span className="text-sm">Half board included</span>
					</label>

					<label className="flex items-center">
						<input
							type="checkbox"
							className="mr-2 w-4 h-4"
							checked={selectedOptions.includes("restaurant")}
							onChange={() => toggleOption("restaurant")}
						/>
						<span className="text-sm">Restaurant</span>
					</label>
				</div>
			</div>
			<div className="border-b border-grey -mx-4"></div>
		</div>
	);
}

export default FoodAndDrinksFilter;
