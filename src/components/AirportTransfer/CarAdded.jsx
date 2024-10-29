/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Car from "../../assets/images/Car.png"; // Använd den korrekta sökvägen till bilbilden
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faClock, faUserFriends, faTrashAlt, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

function CarAdded({ transferData, onRemove }) {
  return (
    <div className="w-[780px] bg-lightBlue rounded-[10px] p-6 flex justify-between items-center shadow-lg">
      {/* Left Section */}
      <div className="flex items-center">
        <img src={Car} alt="Car" className="w-[180px] h-auto mr-6 rounded-lg" />
        <div className="text-black text-[14px] font-semibold">
          Your airport transfer has been successfully added to your booking
        </div>
      </div>

      {/* Middle Section */}
      <div className="flex-grow ml-4 text-darkGrey p-[10px]">
        <h2 className="text-black text-[12px] font-bold mb-2">One way</h2>
        <ul className="space-y-2 text-[12px]">
          <li className="flex items-center">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
            <span>From: {transferData.fromLocation}</span>
          </li>
          <li className="flex items-center">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
            <span>To: {transferData.toLocation}</span>
          </li>
          <li className="flex items-center">
            <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
            {transferData.date}
          </li>
          <li className="flex items-center">
            <FontAwesomeIcon icon={faClock} className="mr-2" />
            {transferData.time}
          </li>
          <li className="flex items-center">
            <FontAwesomeIcon icon={faUserFriends} className="mr-2" />
            {transferData.passengers} people
          </li>
        </ul>
      </div>
      {/* Middle Section */}
      <div className="flex-grow ml-4 text-darkGrey p-[10px]">
        <h2 className="text-black text-[12px] font-bold mb-2">Return</h2>
        <ul className="space-y-2 text-[12px]">
          <li className="flex items-center">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
            <span>From: {transferData.fromLocation}</span>
          </li>
          <li className="flex items-center">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
            <span>To: {transferData.toLocation}</span>
          </li>
          <li className="flex items-center">
            <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
            {transferData.date}
          </li>
          <li className="flex items-center">
            <FontAwesomeIcon icon={faClock} className="mr-2" />
            {transferData.time}
          </li>
          <li className="flex items-center">
            <FontAwesomeIcon icon={faUserFriends} className="mr-2" />
            {transferData.passengers} people
          </li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="flex items-center">
        <FontAwesomeIcon icon={faTrashAlt} className="text-black mr-2 cursor-pointer" onClick={onRemove} />
        <button onClick={onRemove} className="text-accentPink text-[14px] font-bold">Remove</button>
      </div>
    </div>
  );
}

export default CarAdded;