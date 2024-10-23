/* eslint-disable react/prop-types */
// /* eslint-disable no-unused-vars */
// import React from 'react';
// import Car from '../../assets/images/Car.png'; // Justera sökvägen vid behov
// import Button from '../Button';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCalendarAlt, faClock, faUserFriends, faSuitcaseRolling, faShoppingBag, faCheck } from '@fortawesome/free-solid-svg-icons';


// function CarOneWay() {
//   return (
//     <div className="w-[787] rounded-[10px] p-4 flex justify-between items-center shadow-lg">
//       {/* Left Section */}
//       <div className="flex items-center">
//         <img src={Car} alt="Car" className="w-[320] h-auto mr-4 rounded-lg" />
//         <div>
//           <h2 className="text-black text-[20px] font-semibold mb-2">Standard car – One way</h2>
//           <ul className="text-grey text-[14px]">
//             <li className="flex items-center mb-1">
//               <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" /> 2024-09-16
//             </li>
//             <li className="flex items-center mb-1">
//               <FontAwesomeIcon icon={faClock} className="mr-2" /> 14:00
//             </li>
//             <li className="flex items-center mb-1">
//               <FontAwesomeIcon icon={faUserFriends} className="mr-2" /> 4 people
//             </li>
//             <li className="flex items-center mb-1">
//               <FontAwesomeIcon icon={faSuitcaseRolling} className="mr-2" /> 5 suitcases
//             </li>
//             <li className="flex items-center mb-1">
//               <FontAwesomeIcon icon={faShoppingBag} className="mr-2" /> 6 smaller bags
//             </li>
//             <li className="flex items-center mb-1">
//               <FontAwesomeIcon icon={faCheck} className="mr-2" /> Free cancellation
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Right Section */}
//       <div className="text-center">
//         <p className="text-[20px] font-bold text-black">Tot: € 78</p>
//         <Button text="Add" />
//       </div>
//     </div>
//   );
// };

// export default CarOneWay;

// eslint-disable-next-line no-unused-vars
import React from "react";
import Car from "../../assets/images/Car.png"; // Justera sökvägen vid behov
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faClock,
  faUserFriends,
  faSuitcaseRolling,
} from "@fortawesome/free-solid-svg-icons";

function CarOneWay({ transferData }) {
  return (
    <div className="w-[787px] rounded-[10px] p-4 flex justify-between items-center shadow-lg">
      {/* Left Section */}
      <div className="flex items-center">
        <img src={Car} alt="Car" className="w-[320px] h-auto mr-4 rounded-lg" />
        <div>
          <h2 className="text-black text-[20px] font-semibold mb-2">
            Standard car – One way
          </h2>
          <ul className="text-grey text-[14px]">
            <li className="flex items-center mb-1">
              <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />{" "}
              {transferData.date}
            </li>
            <li className="flex items-center mb-1">
              <FontAwesomeIcon icon={faClock} className="mr-2" />{" "}
              {transferData.time}
            </li>
            <li className="flex items-center mb-1">
              <FontAwesomeIcon icon={faUserFriends} className="mr-2" />{" "}
              {transferData.passengers} people
            </li>
            <li className="flex items-center mb-1">
              <FontAwesomeIcon icon={faSuitcaseRolling} className="mr-2" /> 5
              suitcases
            </li>
          </ul>
        </div>
      </div>

      {/* Right Section */}
      <div className="text-center">
        <p className="text-[20px] font-bold text-black">Tot: € 78</p>
        <Button text="Add" />
      </div>
    </div>
  );
}

export default CarOneWay;