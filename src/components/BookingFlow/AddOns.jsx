/* eslint-disable no-unused-vars */
import React, { useState } from "react";


function AddOns() {
	const [airportTransfer, setAirportTransfer] = useState(false);

	return (
		<div className="border p-4 h-auto w-full border-lightGrey mx-auto rounded-[10px] shadow-lg overflow-hidden bg-white">
			<div className="p-6 space-y-4">
				<h2 className="text-[24px] font-bold mb-4">Add to your stay</h2>
				<hr className="border-t border-lightGrey mb-9" />
				<div className="flex items-center">
					<input
						type="checkbox"
						checked={airportTransfer}
						onChange={() => setAirportTransfer(!airportTransfer)}
						className="form-checkbox h-5 w-5 accent-accentPink"
					/>
					<span className="flex items-center ml-2">
						<span className="font-medium text-[16px]">
							Airport transfer
						</span>
					</span>
				</div>
				<p className="text-[12px] text-gray-600 mt-2">
					Add hassle-free airport transfers to and from your
					accommodation.
				</p>
			</div>
		</div>
	);
}

export default AddOns;
