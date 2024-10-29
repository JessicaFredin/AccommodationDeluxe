// RatingFilter.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

// eslint-disable-next-line react/prop-types
function RatingFilter({ setFilters }) {
  const [selectedRatings, setSelectedRatings] = useState([]);

  const toggleRating = (rating) => {
    const newRatings = selectedRatings.includes(rating)
      ? selectedRatings.filter((r) => r !== rating)
      : [...selectedRatings, rating];
    setSelectedRatings(newRatings);
    setFilters((prev) => ({ ...prev, rating: newRatings }));
  };

  return (
		<div>
			<div className="p-4 max-w-sm">
				<div className="flex w-full items-center -mx-3 pb-4">
					<h3 className="text-lg font-semibold">Rating</h3>
				</div>
				<div className="space-y-3">
					{[5, 4, 3, 2, 1].map((rating) => (
						<label key={rating} className="flex items-center">
							<input
								type="checkbox"
								className="mr-2 w-4 h-4"
								checked={selectedRatings.includes(rating)}
								onChange={() => toggleRating(rating)}
							/>
							
							<div className="flex space-x-1 text-primaryDarkBlue">
								{[...Array(rating)].map((_, index) => (
									<FontAwesomeIcon
										key={index}
										icon={faStar}
									/>
								))}
							</div>
						</label>
					))}
				</div>
			</div>
		</div>
  );
}

export default RatingFilter;

// RatingFilter.jsx
// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar } from "@fortawesome/free-solid-svg-icons";

// function RatingFilter({ localFilters, setLocalFilters }) {
//   const selectedRatings = localFilters.rating;

//   const toggleRating = (rating) => {
//     const newRatings = selectedRatings.includes(rating)
//       ? selectedRatings.filter((r) => r !== rating)
//       : [...selectedRatings, rating];

//     setLocalFilters((prev) => ({ ...prev, rating: newRatings }));
//   };

//   return (
//     <div>
//       <div className="p-4 max-w-sm">
//         <div className="flex w-full items-center -mx-3 pb-4">
//           <h3 className="text-lg font-semibold">Rating</h3>
//         </div>
//         <div className="space-y-3">
//           {[5, 4, 3, 2, 1].map((rating) => (
//             <label key={rating} className="flex items-center">
//               <input
//                 type="checkbox"
//                 className="mr-2 w-4 h-4"
//                 checked={selectedRatings.includes(rating)}
//                 onChange={() => toggleRating(rating)}
//               />
//               <div className="flex space-x-1 text-primaryDarkBlue">
//                 {[...Array(rating)].map((_, index) => (
//                   <FontAwesomeIcon key={index} icon={faStar} />
//                 ))}
//               </div>
//             </label>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default RatingFilter;