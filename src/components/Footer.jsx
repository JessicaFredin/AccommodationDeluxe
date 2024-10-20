// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/LogoVertical.png";

function Footer() {
	return (
		<footer className="bg-primaryDarkBlue p-8 text-white w-full mt-8">
			<div className="container mx-auto flex justify-between w-[90%]">
				{/* Explore Section */}
				<div className="flex flex-col">
					<h4 className="font-bold text-lg mb-4">Explore</h4>
					<ul className="space-y-2 text-sm">
						<li>
							<Link
								to="/airport-transfer"
								className="hover:text-hoverColorLightPink"
							>
								Airport Transfer
							</Link>
						</li>
						<li>
							<Link
								to="/hotels"
								className="hover:text-hoverColorLightPink"
							>
								Hotels
							</Link>
						</li>
						<li>
							<Link
								to="/favorites"
								className="hover:text-hoverColorLightPink"
							>
								Favorites
							</Link>
						</li>
					</ul>
				</div>

				{/* Preferences Section */}
				<div className="flex flex-col">
					<h4 className="font-bold text-lg mb-4">Preferences</h4>
					<ul className="space-y-2 text-sm">
						<li>
							<Link
								to="/terms-and-conditions"
								className="hover:text-hoverColorLightPink"
							>
								Terms & Conditions
							</Link>
						</li>
						<li>
							<Link
								to="/privacy-policy"
								className="hover:text-hoverColorLightPink"
							>
								Privacy Policy
							</Link>
						</li>
						<li>
							<Link
								to="/faq"
								className="hover:text-hoverColorLightPink"
							>
								FAQ
							</Link>
						</li>
						<li>
							<Link
								to="/cookies"
								className="hover:text-hoverColorLightPink"
							>
								Cookies
							</Link>
						</li>
					</ul>
				</div>

				{/* About Section */}
				<div className="flex flex-col">
					<h4 className="font-bold text-lg mb-4">About</h4>
					<ul className="space-y-2 text-sm">
						<li>
							<Link
								to="/about-us"
								className="hover:text-hoverColorLightPink"
							>
								About Us
							</Link>
						</li>
						<li>
							<Link
								to="/contact"
								className="hover:text-hoverColorLightPink"
							>
								Contact
							</Link>
						</li>
					</ul>
				</div>

				{/* Logo Section */}
				<div className="logo flex flex-col">
					<Link
						to="/"
						className="hover:text-hoverColorLightPink"
					>
						<img
							src={logo}
							alt="AccommodationDeluxe Logo"
							className="h-20"
						/>
					</Link>
				</div>
			</div>
		</footer>
	);
}

export default Footer;