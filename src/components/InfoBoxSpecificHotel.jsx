/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

//Tar emot props för att returnera specific information för specifik vy och hotel
function InfoBoxSpecificHotel({
	title = "",
	additionalInformation = [],
	description = "",
	optionsTitle = "",
	extraInformation = [],
}) {
	return (
		<div className="p-4 bg-opacityLightBlue rounded-[10px] shadow-lg w-[400px] h-auto">
			<h3 className="text-[20px] font-semibold mb-3">{title}</h3>
{/* 
			{additionalInformation.length > 0 && (
				<ul className="list-disc list-inside text-black space-y-1">
					{additionalInformation.map((info, index) => (
						<li className="text-[16px]" key={index}>
							{info}
						</li>
					))}
				</ul>
			)} */}

			{/* Check if additionalInformation exists and is an array, else check if description exists */}
			{additionalInformation.length > 0 ? (
				<ul className="list-disc list-inside text-black space-y-1">
					{additionalInformation.map((info, index) => (
						<li className="text-[16px]" key={index}>
							{info}
						</li>
					))}
				</ul>
			) : description ? (
				<p className="text-[16px] text-black">{description}</p>
			) : null}

			{optionsTitle && (
				<h3 className="text-[18px] font-semibold my-4">
					{optionsTitle}
				</h3>
			)}

			{extraInformation.length > 0 && (
				<ul className="list-disc list-inside text-black space-y-1">
					{extraInformation.map((info, index) => (
						<li className="text-[16px]" key={index}>
							{info}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}

export default InfoBoxSpecificHotel;
