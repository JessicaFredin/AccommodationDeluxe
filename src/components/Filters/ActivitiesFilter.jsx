// ActivitiesFilter.jsx
// eslint-disable-next-line no-unused-vars
import React from "react";

function ActivitiesFilter() {
    return (
		<div>
			<div className="p-4 max-w-sm">
				<div className="flex w-full items-center -mx-3 pb-4">
					<h3 className="text-lg font-semibold">Activities</h3>
				</div>

				{/* Adjusted the margin and text size */}
				<div className="space-y-3">
					{" "}
					{/* Added spacing between checkboxes */}
					<label className="flex items-center">
						<input type="checkbox" className="mr-2 w-4 h-4" />{" "}
						{/* Adjusted checkbox size */}
						<span className="text-sm">Yoga</span>{" "}
						{/* Smaller text to match design */}
					</label>
					<label className="flex items-center">
						<input type="checkbox" className="mr-2 w-4 h-4" />
						<span className="text-sm">Suitable for hiking</span>
					</label>
					<label className="flex items-center">
						<input type="checkbox" className="mr-2 w-4 h-4" />
						<span className="text-sm">Gym</span>
					</label>
					<label className="flex items-center">
						<input type="checkbox" className="mr-2 w-4 h-4" />
						<span className="text-sm">Children&apos;s club</span>
					</label>
					<label className="flex items-center">
						<input type="checkbox" className="mr-2 w-4 h-4" />
						<span className="text-sm">Spa</span>
					</label>
					<label className="flex items-center">
						<input type="checkbox" className="mr-2 w-4 h-4" />
						<span className="text-sm">Fitness center</span>
					</label>
					<label className="flex items-center">
						<input type="checkbox" className="mr-2 w-4 h-4" />
						<span className="text-sm">Pool</span>
					</label>
				</div>
			</div>
			<div className="border-b border-grey -mx-4"></div>
		</div>
	);
}

export default ActivitiesFilter;
