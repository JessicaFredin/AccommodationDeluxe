// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
function Button({ size, buttonText, onClick, color, rounded = false, active = false }) {
	const sizeClasses = {
		small: "w-[90px] h-[25px] text-[15px]",
		medium: "w-[110px] h-[30px] text-[16px]",
		large: "w-[125px] h-[40px] text-[24px]",
	};

	const colors = {
		transparent: `bg-transparent text-black border-grey hover:bg-transparent hover:border-accentPink`,
		pink: `bg-accentPink text-white border-accentPink hover:bg-hoverColorLightPink`,
		active: `bg-hoverColorLightPink text-black border-accentPink`,
	};

	// Default button styles
	const baseStyle = `bg-accentPink text-white rounded-lg shadow-lg hover:bg-hoverColorDarkPink transition-all duration-300 ease-in-out cursor-pointer`;

	const roundedStyle = `border rounded-full mx-1 px-[20px] py-[10px] h-[37px] flex items-center justify-center whitespace-nowrap cursor-pointer `;

	// Use the rounded style or the default style
	const buttonStyle = rounded ? roundedStyle : baseStyle;

	// Apply active style only to the rounded button
	const activeStyle = rounded && active ? colors.active : colors[color];

	return (
		<button
			className={`${buttonStyle} ${sizeClasses[size]} ${activeStyle}`}
			onClick={onClick}
		>
			{buttonText}
		</button>
	);
};

export default Button;








//     // Default button styles
//     const baseStyle = `shadow-lg transition-all duration-300 ease-in-out cursor-pointer flex items-center justify-center whitespace-nowrap`;

//     // Rounded or regular style
//     const shapeStyle = rounded ? "border rounded-full px-[20px] py-[10px] h-[37px]" : "rounded-lg";

//     // Color options for buttons
//     const colors = {
//         transparent: `bg-transparent text-black border-grey hover:bg-transparent hover:border-accentPink`,
//         pink: `bg-accentPink text-white border-accentPink hover:bg-hoverColorLightPink`,
//         active: `bg-hoverColorLightPink text-black border-accentPink`,
//     };

//     // Choose between active style or normal color
//     const activeStyle = active ? colors.active : colors[color];

//     return (
//         <button
//             className={`${baseStyle} ${sizeClasses[size]} ${shapeStyle} ${activeStyle}`}
//             onClick={onClick}
//         >
//             {buttonText}
//         </button>
//     );
// }

// export default Button;
