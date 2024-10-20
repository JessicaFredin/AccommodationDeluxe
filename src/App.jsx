/* eslint-disable no-unused-vars */
import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import { FavoritesProvider } from "./contexts/FavoritesContext";
import { HotelDataProvider } from "./contexts/HotelDataContext";
import { SearchParamsProvider } from "./contexts/SearchParamsContext";
// Components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
// Main navigation pages
import HomePage from "./pages/HomePage";
import HotelsPage from "./pages/HotelsPage";
import AirportTransferPage from "./pages/AirportTransferPage";
import FavoritesPage from "./pages/FavoritesPage";
// Detail pages about the hotel
import HotelDetailPage from "./pages/HotelDetailPage";
import AboutTheHotelPage from "./pages/AboutTheHotelPage";
import RoomsPage from "./pages/RoomsPage";
import RestaurantPage from "./pages/RestaurantPage";
import PoolAndBeachPage from "./pages/PoolAndBeachPage";
import ActivitiesPage from "./pages/ActivitiesPage";
import MapPage from "./pages/MapPage";
import WeatherPage from "./pages/WeatherPage";
import ReviewsPage from "./pages/ReviewsPage";
// Footer links pages
import TermsAndConditionsPage from "./pages/FooterLinks/Preferences/TermsAndConditionsPage";
import PrivacyPolicyPage from "./pages/FooterLinks/Preferences/PrivacyPolicyPage";
import FaqPage from "./pages/FooterLinks/Preferences/FaqPage";
import CookiesPage from "./pages/FooterLinks/Preferences/CookiesPage";
import AboutUsPage from "./pages/FooterLinks/About/AboutUsPage";
import ContactPage from "./pages/FooterLinks/About/ContactPage";
// Booking
import BookingPage from "./pages/Booking/BookingPage";

function App() {
	return (
		<div>
			<SearchParamsProvider>
				<HotelDataProvider>
					<FavoritesProvider>
						<Router>
							<div className="fixed top-0 w-full z-50">
								<NavBar />
							</div>
							<NavBar />
							<Routes>
								{/* Main navigation */}
								<Route path="/" element={<HomePage />} />
								<Route
									path="/hotels"
									element={<HotelsPage />}
								/>
								<Route
									path="/airport-transfer"
									element={<AirportTransferPage />}
								/>
								<Route
									path="/favorites"
									element={<FavoritesPage />}
								/>

								{/* Nested routes under HotelDetailPage */}
								{/* Route for hotel detail page */}
								<Route
									path="/hotels/:hotelId"
									element={<HotelDetailPage />}
								>
									{/* Default redirection to "about" when no sub-route is specified */}
									<Route
										index
										element={
											<Navigate to="about" replace />
										}
									/>

									{/* Sub-routes */}
									<Route
										path="about"
										element={<AboutTheHotelPage />}
									/>
									<Route
										path="rooms"
										element={<RoomsPage />}
									/>
									<Route
										path="restaurant"
										element={<RestaurantPage />}
									/>
									<Route
										path="pool"
										element={<PoolAndBeachPage />}
									/>
									<Route
										path="activities"
										element={<ActivitiesPage />}
									/>
									<Route path="map" element={<MapPage />} />
									<Route
										path="weather"
										element={<WeatherPage />}
									/>
									<Route
										path="reviews"
										element={<ReviewsPage />}
									/>
								</Route>

								<Route
									path="booking"
									element={<BookingPage />}
								/>

								{/* Footer links except the Explore category, as that is part of the main navigation as well*/}
								<Route
									path="/terms-and-conditions"
									element={<TermsAndConditionsPage />}
								/>
								<Route
									path="/privacy-policy"
									element={<PrivacyPolicyPage />}
								/>
								<Route path="/faq" element={<FaqPage />} />
								<Route
									path="/cookies"
									element={<CookiesPage />}
								/>

								<Route
									path="/about-us"
									element={<AboutUsPage />}
								/>
								<Route
									path="/contact"
									element={<ContactPage />}
								/>
							</Routes>
							<Footer />
						</Router>
					</FavoritesProvider>
				</HotelDataProvider>
			</SearchParamsProvider>
		</div>
	);
}

export default App;
