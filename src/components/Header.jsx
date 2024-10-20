/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// Header.jsx
import React from "react";

function Header({ headingText, size }) {
	// Define classes for different sizes
	const sizeClasses = {
		large: "h-[300px] pt-20 pb-32 mb-8",
		medium: "h-[200px] pt-10 pb-16",
		small: "h-[150px] pt-5 pb-10",
	};

	// Base styles that remain the same across all headers
	const baseStyle =
		"relative bg-primaryDarkBlue flex items-center text-white text-6xl px-20";

	return (
		<header className={`${baseStyle} ${sizeClasses[size]}`}>
			<h1>{headingText}</h1>
		</header>
	);
}

export default Header;
