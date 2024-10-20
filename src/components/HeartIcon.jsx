/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";

function HeartIcon({ isFavorite, onClick }) {
	return (
		<FontAwesomeIcon
			icon={isFavorite ? solidHeart : regularHeart}
			className="text-accentPink cursor-pointer h-5 w-5"
			onClick={onClick}
		/>
	);
}

export default HeartIcon;