/* eslint-disable react/no-children-prop */
/* eslint-disable no-unused-vars */
// OffersPage.jsx
import React, { useEffect, useState } from "react";
import { useHotelData } from "../contexts/HotelDataContext";
import { useSearchParamsContext } from "../contexts/SearchParamsContext";
import HorizontalHotelCard from "../components/HorizontalHotelCard";
import Header from "../components/Header";

function OffersPage() {
	const { hotels } = useHotelData();
	const { searchParams } = useSearchParamsContext();
	const [discountedHotels, setDiscountedHotels] = useState([]);

	useEffect(() => {
		// Apply a discount filter or logic here to find hotels on offer
		const discounted = hotels.map((hotel) => ({
			...hotel,
			discountedPrice: Math.round(hotel.pricePerNight * 0.85), // Example 15% discount
		}));
		setDiscountedHotels(discounted);
	}, [hotels]);

	return (
		<div>
			<Header headingText="Special Offers" size="medium" />
			<div className="flex justify-center pt-[50px]">
				<div className="flex flex-col gap-y-8">
					{discountedHotels.map((hotel) => (
						<HorizontalHotelCard
							key={hotel.id}
							hotel={hotel}
							showDiscountedPrice={true} // Passing flag to show strikethrough price
							startDate={searchParams.startDate}
							endDate={searchParams.endDate}
							adults={searchParams.adults}
							children={searchParams.children}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default OffersPage;
