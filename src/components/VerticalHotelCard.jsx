/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faStar } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import HeartIcon from "./HeartIcon";
import { useFavorites } from "../contexts/FavoritesContext";

//Returnerar Vertikala hotelkorten
function VerticalHotelCard(props) {
	const { favorites, toggleFavorites, removeFavorite } = useFavorites();

	// Kontrollerar om det specifika hotellet finns i favoriter
	const isFavorite = favorites.some((fav) => fav.id === props.hotelId);

	const handleHeartClick = () => {
		if (isFavorite) {
			// Tar birt från favoriter om det redan är där
			removeFavorite(props.hotelId);
		} else {
			// Lägger till i favoriter
			toggleFavorites({
				id: props.hotelId,
				name: props.hotelName,
				imgUrl: props.imgUrl,
				city: props.city,
				country: props.country,
				description: props.description,
				rating: props.rating,
				startingFromPrice: props.startingFromPrice,
			});
		}
	};


	return (
		//Definierar bredd och layout på komponenten
		<div className="w-[330px] h-[443px] bg-white rounded-[10px] overflow-hidden shadow-lg shadow-darkGrey flex flex-col">
			{/*Hotelkortets bild och hjärta för att spara som favorit*/}
			<div className="relative">
				<img
					className=" w-[330px] h-[199px] object-cover"
					src={props.imgUrl}
					alt={props.hotelName}
				/>
				<div className="absolute top-2 right-2">
					<HeartIcon
						isFavorite={isFavorite}
						onClick={handleHeartClick}
					/>
				</div>
			</div>

			{/*Definierar layout för hotel detaljer */}
			<div className="flex-1 p-4 flex flex-col justify-between">
				<div className="flex justify-between">
					{/*Hotellnamn och hotel information*/}
					<div>
						<div className="flex items-bottom">
							<h2 className="text-[20px] text-black font-bold mb-1">
								{props.hotelName}
							</h2>
							<div className="flex items-center ml-auto">
								<span className="mr-1">{props.rating}</span>
								<div className="text-accentPink">
									<FontAwesomeIcon
										icon={faStar}
										className="w-5 h-5 text-primaryDarkBlue"
									/>
								</div>
							</div>
						</div>

						<div className="flex items-bottom">
							<FontAwesomeIcon
								icon={faMapMarkerAlt}
								className="w-4 h-4 text-black"
							/>
							<p className="text-[14px] text-black mb-2 mx-1">
								{props.city}, {props.country}
							</p>
						</div>
						<p className="text-[14px] text-black">
							{props.description}
						</p>
					</div>
				</div>

				{/*Boka knapp och pris*/}
				<div className="flex justify-between items-center mt-4">
					<Button size="large" buttonText={"Book"} />
					<p className="text-[14px] text-black">
						{props.startingFromPrice}
					</p>
				</div>
			</div>
		</div>
	);
}
export default VerticalHotelCard;







// /* eslint-disable react/prop-types */
// // eslint-disable-next-line no-unused-vars
// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMapMarkerAlt, faStar } from "@fortawesome/free-solid-svg-icons";
// import Button from "./Button";
// import HeartIcon from "./HeartIcon";
// import { useFavorites } from "../contexts/FavoritesContext";


// // Returnerar Vertikala hotelkorten
// function VerticalHotelCard(props) {
// 	const { favorites, toggleFavorites, removeFavorite } = useFavorites();

// 	// Check if this hotel is already in the favorites list
// 	const isFavorite = favorites.some((fav) => fav.id === props.hotelId);

// 	const handleHeartClick = () => {
// 		if (isFavorite) {
// 			// Remove from favorites if already there
// 			removeFavorite(props.hotelId);
// 		} else {
// 			// Add to favorites
// 			toggleFavorites({
// 				id: props.hotelId,
// 				name: props.hotelName,
// 				imgUrl: props.hotelRoomImage,
// 				city: props.city,
// 				country: props.country,
// 				description: props.description,
// 				rating: props.rating,
// 				starting_from_price: props.startingFromPrice,
// 			});
// 		}
// 	};

// 	return (
// 		<div className="w-[330px] h-[443px] bg-white rounded-[10px] overflow-hidden shadow-lg shadow-darkGrey flex flex-col">
// 			{/* Hotel card image and heart icon */}
// 			<div className="relative">
// 				<img
// 					className="w-[330px] h-[199px] object-cover"
// 					src={props.hotelRoomImage}
// 					alt={props.hotelName}
// 				/>
// 				<div className="absolute top-2 right-2">
// 					<HeartIcon
// 						isFavorite={isFavorite}
// 						onClick={handleHeartClick}
// 					/>
// 				</div>
// 			</div>

// 			{/* Hotel details */}
// 			<div className="flex-1 p-4 flex flex-col justify-between">
// 				<div className="flex justify-between">
// 					{/* Hotel name, location, and description */}
// 					<div>
// 						<h2 className="text-[20px] text-black font-bold mb-1">
// 							{props.hotelName}
// 						</h2>
// 						<div className="flex items-center ml-auto">
// 							<span className="mr-1">{props.rating}</span>
// 							<FontAwesomeIcon
// 								icon={faStar}
// 								className="w-5 h-5 text-primaryDarkBlue"
// 							/>
// 						</div>

// 						{/* Display location */}
// 						<div className="flex items-bottom">
// 							<FontAwesomeIcon
// 								icon={faMapMarkerAlt}
// 								className="w-4 h-4 text-black"
// 							/>
				
// 							<p className="text-[14px] text-black mb-2 mx-1">
// 								 {props.city}, {props.country}
// 							</p>
// 						</div>
// 						<p className="text-[14px] text-black">
// 							{props.description}
// 						</p>
// 					</div>
// 				</div>

// 				{/* Book button and price */}
// 				<div className="flex justify-between items-center mt-4">
// 					<Button size="large" buttonText={"Read more"} />
// 					<p className="text-[14px] text-black">
// 						{props.startingFromPrice}
// 					</p>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

// export default VerticalHotelCard;
