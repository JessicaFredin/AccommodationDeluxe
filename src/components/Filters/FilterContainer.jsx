// eslint-disable-next-line no-unused-vars
import React from "react";
import PriceFilter from "./PriceFilter";
import TypeOfHotelFilter from "./TypeOfHotelFilter";
import FoodAndDrinksFilter from "./FoodAndDrinksFilter";
import ActivitiesFilter from "./ActivitiesFilter";
import RatingFilter from "./RatingFilter";

const FilterContainer = () => {
	return (
		<div className="min-h-screen ml-5">
			<div className="filter-panel p-4 border border-grey rounded-[10px] w-[365px]">
				<div className="relative w-full pb-2">
					<h2 className="text-2xl font-semibold z-10">Filter</h2>
					<div className="absolute inset-0 border-b border-grey -mx-4"></div>
				</div>
				<PriceFilter />
				<TypeOfHotelFilter />
				<FoodAndDrinksFilter />
				<ActivitiesFilter />
				<RatingFilter />
			</div>
		</div>
	);
};

export default FilterContainer;
