// TypeOfHotelFilter.jsx
// eslint-disable-next-line no-unused-vars
import React from "react";

function TypeOfHotelFilter() {
    return (
		<div>
			<div className="p-4 max-w-sm">
				<div className="flex w-full items-center -mx-3 pb-4">
					<h3 className="text-lg font-semibold">Type of hotel</h3>
				</div>
				{/* Adjusted the margin and text size */}
				<div className="space-y-3">
					{" "}
					{/* Added spacing between checkboxes */}
					<label className="flex items-center">
						<input type="checkbox" className="mr-2 w-4 h-4" />{" "}
						{/* Adjusted checkbox size */}
						<span className="text-sm">Family hotels</span>{" "}
						{/* Smaller text to match design */}
					</label>
					<label className="flex items-center">
						<input type="checkbox" className="mr-2 w-4 h-4" />{" "}
						{/* Adjusted checkbox size */}
						<span className="text-sm">Adult hotels</span>{" "}
						{/* Smaller text to match design */}
					</label>
				</div>
			</div>
			<div className="border-b border-grey -mx-4"></div>
		</div>
	);
}

export default TypeOfHotelFilter;
