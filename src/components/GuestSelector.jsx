// eslint-disable-next-line no-unused-vars
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types"; // Import PropTypes

function GuestSelector(props) {
	return (
		<div className="absolute bg-white p-6 rounded-lg shadow-lg border border-grey mt-2 z-50 w-[300px]">
			<h4 className="text-lg font-semibold">Guests</h4>

			{/* Adults */}
			<div className="flex justify-between items-center mt-4">
				<span>Adults</span>
				<div className="flex items-center space-x-2">
					<button
						onClick={() =>
							props.setAdults(Math.max(1, props.adults - 1))
						}
						className="border border-grey w-3.5 h-2.5 flex items-center justify-center text-sm text-grey"
					>
						<FontAwesomeIcon icon={faMinus} className="text-xs" />
					</button>
					<span className="text-lg">{props.adults}</span>
					<button
						onClick={() => props.setAdults(props.adults + 1)}
						className="border border-grey w-3.5 h-2.5 flex items-center justify-center text-sm text-grey"
					>
						<FontAwesomeIcon icon={faPlus} className="text-xs" />
					</button>
				</div>
			</div>

			{/* Children */}
			<div className="flex justify-between items-center mt-4">
				<span>Children</span>
				<div className="flex items-center space-x-2">
					<button
						onClick={() =>
							props.setChildren(Math.max(0, props.numChildren - 1))
						}
						className="border border-grey w-3.5 h-2.5 flex items-center justify-center text-sm text-grey"
					>
						<FontAwesomeIcon icon={faMinus} className="text-xs" />
					</button>
					<span className="text-lg">{props.numChildren}</span>
					<button
						onClick={() => props.setChildren(props.numChildren + 1)}
						className="border border-grey w-3.5 h-2.5 flex items-center justify-center text-sm text-grey"
					>
						<FontAwesomeIcon icon={faPlus} className="text-xs" />
					</button>
				</div>
			</div>

			{/* Rooms */}
			<div className="flex justify-between items-center mt-4">
				<span>Rooms</span>
				<div className="flex items-center space-x-2">
					<button
						onClick={() =>
							props.setRooms(Math.max(1, props.rooms - 1))
						}
						className="border border-grey w-3.5 h-2.5 flex items-center justify-center text-sm text-grey"
					>
						<FontAwesomeIcon icon={faMinus} className="text-xs" />
					</button>
					<span className="text-lg">{props.rooms}</span>
					<button
						onClick={() => props.setRooms(props.rooms + 1)}
						className="border border-grey w-3.5 h-2.5 flex items-center justify-center text-sm text-grey"
					>
						<FontAwesomeIcon icon={faPlus} className="text-xs" />
					</button>
				</div>
			</div>

			{/* Room Proximity Checkbox */}
			{props.rooms > 1 && (
				<div className="mt-4">
					<p className="text-sm text-black">
						You have selected multiple rooms.
					</p>
					<p className="text-sm text-accentPink">
						Would you like them to be next to each other?
					</p>
					<div className="flex space-x-2 mt-2">
						<label className="flex items-center space-x-1">
							<input
								type="radio"
								name="room-proximity"
								value="yes"
								className="form-radio h-4 w-4 text-accentPink"
							/>
							<span className="text-sm">Yes, please!</span>
						</label>
						<label className="flex items-center space-x-1">
							<input
								type="radio"
								name="room-proximity"
								value="no"
								className="form-radio h-4 w-4 text-accentPink"
							/>
							<span className="text-sm">No, not necessary!</span>
						</label>
					</div>
				</div>
			)}
		</div>
	);
}

// Add PropTypes validation
GuestSelector.propTypes = {
	adults: PropTypes.number.isRequired,
	setAdults: PropTypes.func.isRequired,
	numChildren: PropTypes.number.isRequired,
	setChildren: PropTypes.func.isRequired,
	rooms: PropTypes.number.isRequired,
	setRooms: PropTypes.func.isRequired,
};

export default GuestSelector;
