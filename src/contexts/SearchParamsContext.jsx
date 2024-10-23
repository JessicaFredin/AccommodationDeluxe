/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React, { createContext, useState, useContext } from "react";


const SearchParamsContext = createContext();

export const SearchParamsProvider = ({ children }) => {
	const [searchParams, setSearchParams] = useState({
		startDate: null,
		endDate: null,
		adults: 0,
		children: 0,
		nights: 0,
		rooms: 0,
		hotelId: null,
		roomIndex: null,
	});

	return (
		<SearchParamsContext.Provider value={{ searchParams, setSearchParams }}>
			{children}
		</SearchParamsContext.Provider>
	);
};

export const useSearchParamsContext = () => useContext(SearchParamsContext);
