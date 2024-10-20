// FoodAndDrinksFilter.jsx
// eslint-disable-next-line no-unused-vars
import React from "react";

function FoodAndDrinksFilter() {
    return (
		<div>
			<div className="p-4 max-w-sm">
				<div className="flex w-full items-center -mx-3 pb-4">
					<h3 className="text-lg font-semibold">Food & drinks</h3>
				</div>

				{/* Adjusted the margin and text size */}
				<div className="space-y-3">
					{" "}
					{/* Added spacing between checkboxes */}
					<label className="flex items-center">
						<input type="checkbox" className="mr-2 w-4 h-4" />{" "}
						{/* Adjusted checkbox size */}
						<span className="text-sm">All Inclusive</span>{" "}
						{/* Smaller text to match design */}
					</label>
					<label className="flex items-center">
						<input type="checkbox" className="mr-2 w-4 h-4" />
						<span className="text-sm">Breakfast included</span>
					</label>
					<label className="flex items-center">
						<input type="checkbox" className="mr-2 w-4 h-4" />
						<span className="text-sm">Half board included</span>
					</label>
					<label className="flex items-center">
						<input type="checkbox" className="mr-2 w-4 h-4" />
						<span className="text-sm">Restaurant</span>
					</label>
				</div>
			</div>
			<div className="border-b border-grey -mx-4"></div>
		</div>
	);
}

export default FoodAndDrinksFilter;
