// RatingFilter.jsx
// eslint-disable-next-line no-unused-vars
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons"; // Importing the star icon

function RatingFilter() {
    return (
		<div>
			<div className="p-4 max-w-sm">
				<div className="flex w-full items-center -mx-3 pb-4">
					<h3 className="text-lg font-semibold">Rating</h3>
				</div>

				<div className="space-y-3">
					<label className="flex items-center">
						<input type="checkbox" className="mr-2 w-4 h-4" />
						{/* Render 5 stars */}
						<div className="flex space-x-1 text-primaryDarkBlue">
							{[...Array(5)].map((_, index) => (
								<FontAwesomeIcon key={index} icon={faStar} />
							))}
						</div>
					</label>
					<label className="flex items-center">
						<input type="checkbox" className="mr-2 w-4 h-4" />
						{/* Render 4 stars */}
						<div className="flex space-x-1 text-primaryDarkBlue">
							{[...Array(4)].map((_, index) => (
								<FontAwesomeIcon key={index} icon={faStar} />
							))}
						</div>
					</label>
					<label className="flex items-center">
						<input type="checkbox" className="mr-2 w-4 h-4" />
						{/* Render 3 stars */}
						<div className="flex space-x-1 text-primaryDarkBlue">
							{[...Array(3)].map((_, index) => (
								<FontAwesomeIcon key={index} icon={faStar} />
							))}
						</div>
					</label>
					<label className="flex items-center">
						<input type="checkbox" className="mr-2 w-4 h-4" />
						{/* Render 2 stars */}
						<div className="flex space-x-1 text-primaryDarkBlue">
							{[...Array(2)].map((_, index) => (
								<FontAwesomeIcon key={index} icon={faStar} />
							))}
						</div>
					</label>
					<label className="flex items-center">
						<input type="checkbox" className="mr-2 w-4 h-4" />
						{/* Render 1 star */}
						<div className="flex space-x-1 text-primaryDarkBlue">
							<FontAwesomeIcon icon={faStar} />
						</div>
					</label>
				</div>
			</div>
		</div>
	);
}

export default RatingFilter;
