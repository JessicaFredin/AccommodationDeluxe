// /* eslint-disable react-refresh/only-export-components */
// /* eslint-disable no-unused-vars */
// /* eslint-disable react/prop-types */
// import React, { createContext, useContext, useState } from "react";

// const FavoritesContext = createContext();

// export function FavoritesProvider({ children }) {
// 	const [favorites, setFavorites] = useState([]);

// 	// const toggleFavorites = (hotel) => {
// 	// 	setFavorites((prevFavorites) => {
// 	// 		const isFavorite = prevFavorites.some((fav) => fav.id === hotel.id);
// 	// 		if (isFavorite) {
// 	// 			// If the hotel is already in the favorites, remove it
// 	// 			return prevFavorites.filter((fav) => fav.id !== hotel.id);
// 	// 		} else {
// 	// 			// Otherwise, add it to the favorites
// 	// 			return [...prevFavorites, hotel];
// 	// 		}
// 	// 	});
// 	// };


// 	const toggleFavorites = (hotelId) => {
// 		console.log("Toggle favorite called with ID:", hotelId);
// 		setFavorites((prevFavorites) => {
// 			const isFavorite = prevFavorites.includes(hotelId);
// 			console.log("Is hotel in favorites?:", isFavorite); // Log if hotel is already in favorites
// 			if (isFavorite) {
// 				console.log("Removing hotel from favorites:", hotelId); // Log removing
// 				// Remove the hotel ID if it's already in favorites
// 				return prevFavorites.filter((id) => id !== hotelId);
// 			} else {
// 				console.log("Adding hotel to favorites:", hotelId); // Log adding
// 				// Add the hotel ID if it's not in favorites
// 				return [...prevFavorites, hotelId];
// 			}
// 		});
// 	};




// 	// const removeFavorite = (hotelId) => {
// 	// 	setFavorites((prevFavorites) =>
// 	// 		prevFavorites.filter((id) => id !== hotelId)
// 	// 	);
// 	// };

// 	// const removeFavorite = (hotelId) => {
// 	// 	console.log("Removing favorite with ID:", hotelId); // Add log to check
// 	// 	setFavorites((prevFavorites) =>
// 	// 		prevFavorites.filter((fav) => fav !== hotelId)
// 	// 	);
// 	// };

// 	const removeFavorite = (hotelId) => {
// 		console.log("Removing favorite with ID:", hotelId); // Add log to check
// 		setFavorites((prevFavorites) => {
// 			const updatedFavorites = prevFavorites.filter(
// 				(fav) => fav !== hotelId
// 			);
// 			console.log("Updated favorites after removal:", updatedFavorites); // Log updated state
// 			return updatedFavorites;
// 		});
// 	};


// 	return (
// 		<FavoritesContext.Provider value={{ favorites, toggleFavorites, removeFavorite }}>
// 			{children}
// 		</FavoritesContext.Provider>
// 	);
// }

// export function useFavorites() {
// 	const context = useContext(FavoritesContext);
// 	if (!context) {
// 		throw new Error("useFavorites must be used within a FavoritesProvider");
// 	}
// 	return context;
// }






/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
// /* eslint-disable react/prop-types */
// import React, { createContext, useContext, useState } from "react";

// const FavoritesContext = createContext();

// export function FavoritesProvider({ children }) {
// 	const [favorites, setFavorites] = useState([]);

// 	const toggleFavorites = (hotel) => {
// 		setFavorites((prevFavorites) => {
// 			const isFavorite = prevFavorites.some((fav) => fav.id === hotel.id);
// 			if (isFavorite) {
// 				// If the hotel is already in the favorites, remove it
// 				return prevFavorites.filter((fav) => fav.id !== hotel.id);
// 			} else {
// 				// Otherwise, add it to the favorites
// 				return [...prevFavorites, hotel];
// 			}
// 		});
// 	};

// 	// Function to remove a favorite
// 	const removeFavorite = (hotelId) => {
// 		setFavorites((prevFavorites) =>
// 			prevFavorites.filter((fav) => fav.id !== hotelId)
// 		);
// 	};

// 	return (
// 		<FavoritesContext.Provider value={{ favorites, toggleFavorites, removeFavorite }}>
// 			{children}
// 		</FavoritesContext.Provider>
// 	);
// }

// export function useFavorites() {
// 	const context = useContext(FavoritesContext);
// 	if (!context) {
// 		throw new Error("useFavorites must be used within a FavoritesProvider");
// 	}
// 	return context;
// }



/* eslint-disable react/prop-types */
import React, { createContext, useContext, useState, useEffect } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
	const [favorites, setFavorites] = useState([]);

	useEffect(() => {
		const savedFavoritesIds = JSON.parse(localStorage.getItem("likedHotels")) || [];
		const uniqueFavorites = [...new Set(savedFavoritesIds)];
		const favoritesFromStorage = uniqueFavorites.map(id => ({ id })); // Antag att hotell har bara id
		setFavorites(favoritesFromStorage);
	}, []);

	const toggleFavorites = (hotel) => {
		setFavorites((prevFavorites) => {
			const isFavorite = prevFavorites.some((fav) => fav.id === hotel.id);
			let updatedFavorites;
			if (isFavorite) {
				updatedFavorites = prevFavorites.filter((fav) => fav.id !== hotel.id);
			} else {
				updatedFavorites = [...prevFavorites, hotel];
			}
			localStorage.setItem("likedHotels", JSON.stringify(updatedFavorites.map(h => h.id)));
			return updatedFavorites;
		});
	};

	// Funktion för att ta bort en favorit
	const removeFavorite = (hotelId) => {
		setFavorites((prevFavorites) => {
			const updatedFavorites = prevFavorites.filter((fav) => fav.id !== hotelId);
			localStorage.setItem("likedHotels", JSON.stringify(updatedFavorites.map(h => h.id))); // Spara till localStorage
			return updatedFavorites;
		});
	};

	return (
		<FavoritesContext.Provider value={{ favorites, toggleFavorites, removeFavorite }}>
			{children}
		</FavoritesContext.Provider>
	);
}

export function useFavorites() {
	const context = useContext(FavoritesContext);
	if (!context) {
		throw new Error("useFavorites must be used within a FavoritesProvider");
	}
	return context;
}
