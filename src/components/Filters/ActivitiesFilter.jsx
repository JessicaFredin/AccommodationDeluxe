



// ActivitiesFilter.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

// eslint-disable-next-line react/prop-types
function ActivitiesFilter({ setFilters }) {
  const [selectedActivities, setSelectedActivities] = useState([]);

  const toggleActivity = (activity) => {
    const newActivities = selectedActivities.includes(activity)
      ? selectedActivities.filter((a) => a !== activity)
      : [...selectedActivities, activity];
    setSelectedActivities(newActivities);
    setFilters((prev) => ({ ...prev, activities: newActivities }));
  };

  return (
		<div>
			<div className="p-4 max-w-sm">
				<div className="flex w-full items-center -mx-3 pb-4">
					<h3 className="text-lg font-semibold">Activities</h3>
				</div>

				<div className="space-y-3">
					<label className="flex items-center">
						<input
							type="checkbox"
							className="mr-2 w-4 h-4"
							checked={selectedActivities.includes("yoga")}
							onChange={() => toggleActivity("yoga")}
						/>
						<span className="text-sm">Yoga</span>
					</label>

					<label className="flex items-center">
						<input
							type="checkbox"
							className="mr-2 w-4 h-4"
							checked={selectedActivities.includes("hiking")}
							onChange={() => toggleActivity("hiking")}
						/>
						<span className="text-sm">Suitable for hiking</span>
					</label>

					<label className="flex items-center">
						<input
							type="checkbox"
							className="mr-2 w-4 h-4"
							checked={selectedActivities.includes("gym")}
							onChange={() => toggleActivity("gym")}
						/>
						<span className="text-sm">Gym</span>
					</label>

					<label className="flex items-center">
						<input
							type="checkbox"
							className="mr-2 w-4 h-4"
							checked={selectedActivities.includes(
								"childrens_club"
							)}
							onChange={() => toggleActivity("childrens_club")}
						/>
						<span className="text-sm">Children&apos;s club</span>
					</label>

					<label className="flex items-center">
						<input
							type="checkbox"
							className="mr-2 w-4 h-4"
							checked={selectedActivities.includes("spa")}
							onChange={() => toggleActivity("spa")}
						/>
						<span className="text-sm">Spa</span>
					</label>

					<label className="flex items-center">
						<input
							type="checkbox"
							className="mr-2 w-4 h-4"
							checked={selectedActivities.includes("pool")}
							onChange={() => toggleActivity("pool")}
						/>
						<span className="text-sm">Pool</span>
					</label>
				</div>
			</div>
			<div className="border-b border-grey -mx-4"></div>
		</div>
  );
}

export default ActivitiesFilter;
