// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import Button from "./Button"; // Import your Button component

function TrendingDestinationCard(props) {
	//Tailwind-klasser för storlek baserat på prop-värden
	const sizeClass = {
		large: "w-[930px] h-[580px]",
		medium: "w-[435px] h-[270px]",
		small: "w-80 h-60",
	};

	// Tailwind-klasser för textstorlek baserat på prop-värden
	const textSizeClass = {
		large: "text-[24px]",
		medium: "text-[20px]",
		small: "text-[16px]",
	};
    //Returnerar Images, opacitetsfält och rubriker
	return (
		<div
			className={`relative overflow-hidden rounded-[10px] ${
				sizeClass[props.size]
			}`}
		>
			<img
				src={props.imageSrc}
				alt={props.location}
				className="object-cover w-full h-full"
			/>

			{/* Opacitetsfält längst ned i images */}
			<div className="absolute bottom-0 left-0 w-full p-4 bg-opacityBlack flex justify-between items-center">
				<h3
					className={`${
						textSizeClass[props.textSize]
					} text-white font-semibold`}
				>
					{props.location}
				</h3>
				<Button
					size={
						props.size === "small"
							? "small"
							: props.size === "medium"
							? "medium"
							: props.size === "large" ? "large" : ""
					}
					buttonText="Explore"
				/>
			</div>
		</div>
	);
}

// PropTyper för validering
TrendingDestinationCard.propTypes = {
	size: PropTypes.oneOf(["small", "medium", "large"]),
	textSize: PropTypes.oneOf(["small", "medium", "large"]),
	imageSrc: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
};

export default TrendingDestinationCard;
