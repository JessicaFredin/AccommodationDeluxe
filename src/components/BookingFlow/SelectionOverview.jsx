import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faMapMarkerAlt,
	faChevronLeft,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import HotelRoomImage from "../../assets/images/HotelRoomImage1.png";
import Button from "../Button";

// function SelectionOverview() {
//   return (
// 		<div className="w-[687px] h-[635px] border border-lightGrey mx-auto rounded-3xl shadow-lg overflow-hidden bg-white">
// 			<div className="p-6 space-y-4">
// 				<h2 className="text-2xl font-bold">Check your selection</h2>

// 				<div className="relative flex justify-between">
// 					{/*Bild för hotell*/}
// 					<img
// 						className="w-[475px] h-[257px] object-cover"
// 						src={HotelRoomImage}
// 						alt="Hotel image"
// 					/>

// 					<button className="absolute flex items-center top-1/2 left-2 -translate-y-1/2 bg-black/50 rounded-full p-1">
// 						<FontAwesomeIcon
// 							icon={faChevronLeft}
// 							className="w-6 h-6 text-white"
// 						/>
// 					</button>
// 					<button className="absolute flex items-center top-1/2 right-[175px] -translate-y-1/2 bg-black/50 rounded-full p-1">
// 						<FontAwesomeIcon
// 							icon={faChevronRight}
// 							className="w-6 h-6 text-white"
// 						/>
// 					</button>
// 				</div>

// 				<h3 className="text-xl font-semibold">
// 					Hotel Riviera Resort - Ocean view Double Room
// 				</h3>
// 				<div className="flex items-center text-darkGrey">
// 					<FontAwesomeIcon
// 						icon={faMapMarkerAlt}
// 						className="w-4 h-4 mr-1"
// 					/>
// 					<p>Marbella, Spain</p>
// 				</div>

// 				<div className="bg-opacityLightBlue p-4 rounded-lg space-y-2">
// 					<div className="flex justify-between">
// 						<div className="flex flex-col">
// 							<div className="flex">
// 								<p className="w-20">Check in:</p>
// 								<span>10am, 3 November 2024</span>
// 							</div>
// 							<div className="flex">
// 								<p className="w-20">Check out:</p>
// 								<span>11am 10 November 2024</span>
// 							</div>
// 						</div>

// 						{/*Grå linje mellan enheterna */}
// 						<div className="flex items-center space-x-2">
// 							<div className="border-l border-darkGrey h-[60px] mr-2"></div>

// 							<div className="text-left">
// 								<span className="text-[26px] font-bold">
// 									€1880
// 								</span>
// 								<p className="text-[18px] text-gray-500">
// 									2 adults / 7 nights
// 								</p>
// 							</div>
// 						</div>
// 					</div>
// 				</div>

// 				<div className="flex justify-between items-end mt-4">
// 					<div className="ml-auto flex flex-col items-end">
// 						{/*Bokningsknapp */}
// 						<Button size="large" buttonText={"Proceed"} />

// 						<p className="text-center text-sm text-Black">
// 							Other options
// 						</p>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
//   );
// }

// export default SelectionOverview;

function SelectionOverview() {
	return (
		<div className="w-full h-auto border border-lightGrey mx-auto rounded-[10px] shadow-lg overflow-hidden bg-white">
			<div className="p-6 space-y-4">
				<h2 className="text-2xl font-bold">Check your selection</h2>
				<div className="relative w-full flex items-center justify-between">
					{/* Left Arrow */}
					<button className="absolute left-0 z-10 flex items-center justify-center bg-black/50 rounded-full p-2 ml-2">
						<FontAwesomeIcon
							icon={faChevronLeft}
							className="w-6 h-6 text-white"
						/>
					</button>

					{/* Image Container */}
					<div className="flex-grow relative flex justify-center">
						<img
							className="w-full h-auto object-cover"
							src={HotelRoomImage}
							alt="Hotel image"
						/>
					</div>

					{/* Right Arrow */}
					<button className="absolute right-0 z-10 flex items-center justify-center bg-black/50 rounded-full p-2 mr-2">
						<FontAwesomeIcon
							icon={faChevronRight}
							className="w-6 h-6 text-white"
						/>
					</button>
				</div>

				<div>
					<h3 className="text-xl font-semibold">
						Hotel Riviera Resort - Ocean view Double Room
					</h3>
				</div>
				<div className="flex items-center text-darkGrey">
					<FontAwesomeIcon
						icon={faMapMarkerAlt}
						className="w-4 h-4 mr-1"
					/>
					<p>Marbella, Spain</p>
				</div>
				<div className="bg-opacityLightBlue p-4 rounded-lg space-y-2">
					<div className="flex justify-between">
						<div className="flex flex-col space-y-1">
							<div className="flex space-x-3">
								<p className="w-20">Check in: </p>
								<span className="ml-3">
									10am, 3 November 2024
								</span>
							</div>
							<div className="flex space-x-3">
								<p className="w-20">Check out:</p>
								<span className="ml-3">
									11am 10 November 2024
								</span>
							</div>
						</div>

						{/* Grå linje mellan enheterna */}
						<div className="flex items-center space-x-2">
							<div className="border-l border-darkGrey h-[60px] mr-2"></div>
							<div>
								<span className="text-[26px] font-bold">
									€1880
								</span>
								<p className="text-[18px] text-gray-500">
									2 adults / 7 nights
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="flex justify-between items-end mt-4">
					<div className="ml-auto flex flex-col items-end">
						{/* Bokningsknapp */}
						<Button size="large" buttonText={"Proceed"} />

						<p className="text-sm mt-2 text-Black">
							Other options
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SelectionOverview;
