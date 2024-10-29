// SimpleCarCard.jsx
/* eslint-disable react/prop-types */
import React from "react";
import Car from "../../assets/images/Car.png";
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faClock,
  faUserFriends,
  faSuitcaseRolling,
  faShoppingBag,
  faCheck,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

function SimpleCarCard({ transferData, onAdd }) {
  return (
    <div className="w-full max-w-[800px] bg-white rounded-lg p-6 shadow-md mx-auto mt-8">
      {/* Detaljer för enkelresa */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex flex-col items-start">
          <h2 className="text-xl font-bold mb-4">
            Standard car – {transferData.returnTrip ? "First Trip" : "One way"}
          </h2>
          <img src={Car} alt="Car" className="w-[200px] h-auto rounded-lg" />
        </div>

        <div className="flex-grow ml-4">
          <div className="flex">
            <ul className="text-darkGrey text-sm space-y-2">
              <li className="flex items-center">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                From: {transferData.fromLocation}
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                To: {transferData.toLocation}
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
                {transferData.date}
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faClock} className="mr-2" />
                {transferData.time}
              </li>
            </ul>

            <ul className="text-darkGrey text-sm space-y-2 ml-8">
              <li className="flex items-center">
                <FontAwesomeIcon icon={faUserFriends} className="mr-2" />
                {transferData.passengers} people
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faSuitcaseRolling} className="mr-2" />
                5 suitcases
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faShoppingBag} className="mr-2" />
                6 smaller bags
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="mr-2 text-roomGreen"
                />
                Free cancellation
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/*Detaljer för retur om valt*/}
      {transferData.returnTrip && (
        <div className="flex justify-between items-center mb-4">
          <div className="flex flex-col items-start">
            <h2 className="text-xl font-bold mb-4">Standard car – Return Trip</h2>
            <img src={Car} alt="Car" className="w-[200px] h-auto rounded-lg" />
          </div>

          <div className="flex-grow ml-4">
            <div className="flex">
              <ul className="text-darkGrey text-sm space-y-2">
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                  From: {transferData.returnTrip.fromLocation}
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                  To: {transferData.returnTrip.toLocation}
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
                  {transferData.returnTrip.date}
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faClock} className="mr-2" />
                  {transferData.returnTrip.time}
                </li>
              </ul>

              <ul className="text-darkGrey text-sm space-y-2 ml-8">
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faUserFriends} className="mr-2" />
                  {transferData.returnTrip.passengers} people
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faSuitcaseRolling} className="mr-2" />
                  5 suitcases
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faShoppingBag} className="mr-2" />
                  6 smaller bags
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="mr-2 text-roomGreen"
                  />
                  Free cancellation
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Pris justeras beroende på enkel/ returresa, add to booking-knapp triggar onAdd funktion */}
      <div className="text-center mt-4">
        <div className="flex flex-col items-end justify-end">
          {transferData.returnTrip ? (
            <p className="text-lg font-bold mb-2 text-center">Tot: €144</p>
          ) : (
            <p className="text-lg font-bold mb-2 text-center">Tot: €78</p>
          )}
          <Button
            size="medium"
            buttonText="Add to Booking"
            onClick={onAdd}
          />
        </div>
      </div>
    </div>
  );
}

export default SimpleCarCard;