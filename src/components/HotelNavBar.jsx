// // eslint-disable-next-line no-unused-vars
// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import Font Awesome icons
// import {
// 	faHotel,
// 	faBed,
// 	faUtensils,
// 	faWater,
// 	faDumbbell,
// 	faCloudSun,
// } from "@fortawesome/free-solid-svg-icons";
// import { faMap } from "@fortawesome/free-regular-svg-icons";
// import ThumbsUpThumbsDownIcon from "../assets/icons/MaterialSymbolsThumbsUpDownOutline";
// import { NavLink, useParams } from "react-router-dom";

// //Definierar en lista av objekt, det vill säga de meny-alternativ som ska finnas med
// const menuItems = [
// 	{ icon: faHotel, text: "About the hotel", link: "about" },
// 	{ icon: faBed, text: "Rooms", link: "rooms" },
// 	{ icon: faUtensils, text: "Food & drinks", link: "restaurant" },
// 	{ icon: faWater, text: "Pool & Beach", link: "pool" },
// 	{ icon: faDumbbell, text: "Activities", link: "activities" },
// 	{ icon: faMap, text: "Map", link: "map" },
// 	{ icon: faCloudSun, text: "Weather", link: "weather" },
// 	{ icon: ThumbsUpThumbsDownIcon, text: "Reviews", link: "/reviews" }
// ];

// //Definierar komponenten HotelNavBar
// function HotelNavBar() {
// 	// //Använder state för att kontrollera vilket menyval som är aktivt
// 	// const [activeItem, setActiveItem] = useState(0);
// 	const { hotelId } = useParams(); // Get hotelId from the URL

// 	return (
// 		//En yttre div för hela menyn med bakgrundfärg, hjöjd, bredd, mm.
// 		<div className="w-full h-[100px] bg-opacityLightBlue flex items-center justify-center">
// 			{/*En inre div som inkluderar meny-alternativen*/}
// 			<div className="w-[1139px] h-[100px] flex justify-between items-center">
// 				{/*Iterera över listan med menyval (menuItems-arrayen) och skapa en div för varje menyalternativ som innehåller en ikon och text. Aktivt val får en bottenram som är rosa. "onClick" Används för att uppdatera aktiv alternativ när ett menyval klickas  */}
// 				{menuItems.map((menuItem, index) => (
// 					// <Link
// 					// 	to={menuItem.link} // Wrap each menu item with a Link component
// 					// 	key={index}
// 					// 	className={`flex flex-col items-center justify-center w-[142px] h-[100px] cursor-pointer
// 					//     ${index === activeItem ? "border-b-4 border-accentPink" : ""}
// 					//     hover:bg-opacityDarkBlue transition-colors duration-200`}
// 					// 	onClick={() => setActiveItem(index)}
// 					// >

// 						 <NavLink
//             to={`/hotels/${hotelId}/${menuItem.link}`} // Use dynamic routing
//             key={index}
//             className={`flex flex-col items-center justify-center w-[142px] h-[100px] cursor-pointer
//               hover:bg-opacityDarkBlue transition-colors duration-200`}
//             style={({ isActive }) => ({
//               borderBottom: isActive ? "4px solid #FF6480" : "none",
//               color: isActive ? "#FF6480" : "#111",
//             })}
//           >
// 						{/*Används för att kontrollera om inkonen är "ThumbsUpThumbsDownIcon" och om den är det renderas den, annars gör font-awesome-ikonerna det. Detta val grundas i att den exakta ikonen som vi vill inkludera inte finns i font-awesome. Om ett menyval är aktivt (activeItem) får ikonen färgen rosa (text-accentPink). Om menyvalet inte är aktivt får ikonen färgen svart (text-black)*/}
// 						{menuItem.icon === ThumbsUpThumbsDownIcon ? (
// 							<ThumbsUpThumbsDownIcon className={`text-2xl`} />
// 						) : (
// 							<FontAwesomeIcon
// 								icon={menuItem.icon}
// 								className={`text-2xl`}
// 							/>
// 						)}
// 						{/*Används för den text som ska vara under ikonerna, det vill säga menyvalets "namn" */}
// 						<span className="mt-2 text-[12px] text-black">
// 							{menuItem.text}
// 						</span>
          
// 					</NavLink>
// 				))}
// 			</div>
// 		</div>
// 	);
// }
// export default HotelNavBar;







// eslint-disable-next-line no-unused-vars
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import Font Awesome icons
import {
  faHotel,
  faBed,
  faUtensils,
  faWater,
  faDumbbell,
  faCloudSun,
} from "@fortawesome/free-solid-svg-icons";
import { faMap } from "@fortawesome/free-regular-svg-icons";
import ThumbsUpThumbsDownIcon from "../assets/icons/MaterialSymbolsThumbsUpDownOutline";
import { NavLink, useParams, useLocation } from "react-router-dom";

// Define a list of objects representing menu options
const menuItems = [
  { icon: faHotel, text: "About the hotel", link: "about" },
  { icon: faBed, text: "Rooms", link: "rooms" },
  { icon: faUtensils, text: "Food & drinks", link: "food-and-drinks" },
  { icon: faWater, text: "Pool & Beach", link: "pool" },
  { icon: faDumbbell, text: "Activities", link: "activities" },
  { icon: faMap, text: "Map", link: "map" },
  { icon: faCloudSun, text: "Weather", link: "weather" },
  { icon: ThumbsUpThumbsDownIcon, text: "Reviews", link: "reviews" },
];

// Define the component
function HotelNavBar() {
  const { hotelId } = useParams(); // Get hotelId from the URL
  const { search } = useLocation(); // Get the current search parameters from the URL

  return (
    // Container div for the entire menu with background color, height, width, etc.
    <div className="w-full h-[100px] bg-opacityLightBlue flex items-center justify-center">
      {/* Inner div that includes the menu options */}
      <div className="w-[1139px] h-[100px] flex justify-between items-center">
        {/* Iterate over the list of menu options and create a div for each menu item with an icon and text */}
        {menuItems.map((menuItem, index) => (
          <NavLink
            to={`/hotels/${hotelId}/${menuItem.link}${search}`} // Use dynamic routing with current search parameters
            key={index}
            className={`flex flex-col items-center justify-center w-[142px] h-[100px] cursor-pointer hover:bg-opacityDarkBlue transition-colors duration-200`}
            style={({ isActive }) => ({
              borderBottom: isActive ? "4px solid #FF6480" : "none",
              color: isActive ? "#FF6480" : "#111",
            })}
          >
            {/* Check if the icon is "ThumbsUpThumbsDownIcon", otherwise use FontAwesome icons */}
            {menuItem.icon === ThumbsUpThumbsDownIcon ? (
              <ThumbsUpThumbsDownIcon className={`text-2xl`} />
            ) : (
              <FontAwesomeIcon icon={menuItem.icon} className={`text-2xl`} />
            )}
            {/* Text below each icon representing the menu option */}
            <span className="mt-2 text-[12px] text-black">{menuItem.text}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default HotelNavBar;
