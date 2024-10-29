// eslint-disable-next-line no-unused-vars
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons"; 
import logo from "../assets/images/logo/LogoHorizontal.png";
import { Link } from "react-router-dom";

function NavBar() {
	return (
		<nav className="bg-primaryDarkBlue p-4 flex justify-between items-center text-white w-full">
			<div className="flex items-center space-x-8 pl-12">
				{" "}
				{/* Logo och Nav Länkar */}
				<div className="flex items-center space-x-2">
					<Link to="/" className="hover:text-hoverColorLightPink">
						<img
							src={logo}
							alt="AccommodationDeluxe Logo"
							className="h-10"
						/>
					</Link>
				</div>
				<div className="flex space-x-8">
					<Link
						to="/"
						className="hover:text-hoverColorLightPink"
					>
						Home
					</Link>
					<Link
						to="/hotels"
						className="hover:text-hoverColorLightPink"
					>
						Hotels
					</Link>
					<Link
						to="/airport-transfer"
						className="hover:text-hoverColorLightPink"
					>
						Airport transfer
					</Link>
				</div>
			</div>
			<Link
				to="/favorites"
				className="text-accentPink hover:text-hoverColorLightPink"
			>
				<FontAwesomeIcon icon={faHeart} className="h-6 w-6 mx-9" />
			</Link>
		</nav>
	);
}

export default NavBar;
