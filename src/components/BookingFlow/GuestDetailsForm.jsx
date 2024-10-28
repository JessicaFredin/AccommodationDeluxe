// // /* eslint-disable no-unused-vars */
// // import React, { useState } from "react";
// // import PhoneNumberSelection from "../../components/BookingFlow/PhoneNumberSelection";

// // function GuestDetailsForm() {
// // 	const countryData = [
// // 		{ code: "+1", flag: "🇺🇸" },
// // 		{ code: "+44", flag: "🇬🇧" },
// // 		{ code: "+33", flag: "🇫🇷" },
// // 		{ code: "+49", flag: "🇩🇪" },
// // 		{ code: "+81", flag: "🇯🇵" },
// // 	];

// // 	const [formData, setFormData] = useState({
// // 		firstName: "",
// // 		lastName: "",
// // 		email: "",
// // 		country: "",
// // 		phoneCode: countryData[0].code, // Standard landsnummer
// // 		phoneNumber: "",
// // 	});

// // 	const handleInputChange = (e) => {
// // 		const { name, value } = e.target;
// // 		setFormData((prev) => ({ ...prev, [name]: value }));
// // 	};

// // 	const handleCountrySelect = (country) => {
// // 		setFormData((prev) => ({ ...prev, phoneCode: country.code }));
// // 	};

// // 	const validateEmail = (email) => {
// // 		const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// // 		return re.test(email);
// // 	};

// // 	const validatePhoneNumber = (phoneNumber) => {
// // 		const re = /^\d{10}$/; // 10-siffrigt telefonnummer
// // 		return re.test(phoneNumber);
// // 	};

// // 	return (
// // 		<div>
// // 			<div className="border p-4 shadow-lg w-full h-auto border-lightGrey mx-auto rounded-[10px] overflow-hidden bg-white">
// // 				<h2 className="text-[24px] font-bold mb-4">
// // 					Enter your details
// // 				</h2>
// // 				<hr className="border-t border-lightGrey mb-9" />
// // 				<form className="space-y-4">
// // 					<div className="grid grid-cols-2 gap-4">
// // 						<div>
// // 							<label
// // 								htmlFor="firstName"
// // 								className="block text-[16px] font-medium text-black"
// // 							>
// // 								First name{" "}
// // 								<span className="text-accentPink">*</span>
// // 							</label>
// // 							<input
// // 								type="text"
// // 								id="firstName"
// // 								name="firstName"
// // 								required
// // 								value={formData.firstName}
// // 								onChange={handleInputChange}
// // 								className="mt-1 block w-full h-12 rounded-md border border-lightGrey shadow-sm focus:border-darkGrey focus:ring focus:ring-darkGrey focus:ring-opacity-50 placeholder:text-[14px] pl-4"
// // 								placeholder="Enter your first name"
// // 							/>
// // 						</div>
// // 						<div>
// // 							<label
// // 								htmlFor="lastName"
// // 								className="block text-[16px] font-medium text-black"
// // 							>
// // 								Last name{" "}
// // 								<span className="text-accentPink">*</span>
// // 							</label>
// // 							<input
// // 								type="text"
// // 								id="lastName"
// // 								name="lastName"
// // 								required
// // 								value={formData.lastName}
// // 								onChange={handleInputChange}
// // 								className="mt-1 block w-full h-12 rounded-md border border-lightGrey shadow-sm focus:border-darkGrey focus:ring focus:ring-darkGrey focus:ring-opacity-50 placeholder:text-[14px] pl-4"
// // 								placeholder="Enter your last name"
// // 							/>
// // 						</div>
// // 					</div>
// // 					<div>
// // 						<label
// // 							htmlFor="email"
// // 							className="block text-[16px] font-medium text-black"
// // 						>
// // 							Email <span className="text-accentPink">*</span>
// // 						</label>
// // 						<input
// // 							type="email"
// // 							id="email"
// // 							name="email"
// // 							required
// // 							value={formData.email}
// // 							onChange={handleInputChange}
// // 							className={`mt-1 block w-full h-12 rounded-md border border-lightGrey shadow-sm focus:border-darkGrey focus:ring focus:ring-darkGrey focus:ring-opacity-50 placeholder:text-[14px] pl-4 ${
// // 								formData.email && !validateEmail(formData.email)
// // 									? "border-roomRed"
// // 									: ""
// // 							}`}
// // 							placeholder="Enter your email address"
// // 						/>
// // 						{formData.email && !validateEmail(formData.email) && (
// // 							<p className="text-roomRed text-[10px] mt-1">
// // 								Please enter a valid email address.
// // 							</p>
// // 						)}
// // 					</div>

// // 					<div>
// // 						<label
// // 							htmlFor="country"
// // 							className="block text-[16px] font-medium text-black"
// // 						>
// // 							Country <span className="text-accentPink">*</span>
// // 						</label>
// // 						<input
// // 							type="text"
// // 							id="country"
// // 							name="country"
// // 							required
// // 							value={formData.country}
// // 							onChange={handleInputChange}
// // 							className="mt-1 block w-full h-12 rounded-md border border-lightGrey shadow-sm focus:border-darkGrey focus:ring focus:ring-darkGrey focus:ring-opacity-50 placeholder:text-[14px] pl-4"
// // 							placeholder="Enter your home country"
// // 						/>
// // 					</div>

// // 					<label
// // 						htmlFor="phoneNumber"
// // 						className="block text-[16px] font-medium text-black"
// // 					>
// // 						Phone Number <span className="text-accentPink">*</span>
// // 					</label>
// // 					<div className="flex items-center space-x-2">
// // 						{" "}
// // 						{/* Flex-container för flagga och nummer */}
// // 						<PhoneNumberSelection
// // 							countryData={countryData}
// // 							onSelectCountry={handleCountrySelect}
// // 						/>
// // 						<input
// // 							type="text"
// // 							id="phoneNumber"
// // 							name="phoneNumber"
// // 							required
// // 							value={formData.phoneNumber}
// // 							onChange={handleInputChange}
// // 							className={`block w-full h-12 rounded-md border border-lightGrey shadow-sm focus:border-darkGrey focus:ring focus:ring-darkGrey focus:ring-opacity-50 placeholder:text-[14px] pl-4 ${
// // 								formData.phoneNumber &&
// // 								!validatePhoneNumber(formData.phoneNumber)
// // 									? "border-roomRed"
// // 									: ""
// // 							}`}
// // 							placeholder="Enter your phone number"
// // 						/>
// // 						{formData.phoneNumber &&
// // 							!validatePhoneNumber(formData.phoneNumber) && (
// // 								<p className="text-roomRed text-[10px]">
// // 									Please enter a valid phone number.
// // 								</p>
// // 							)}
// // 					</div>
// // 				</form>
// // 			</div>
// // 		</div>
// // 	);
// // }

// // export default GuestDetailsForm;



















// /* eslint-disable no-unused-vars */
// import React, { useState } from "react";
// import PhoneNumberSelection from "../../components/BookingFlow/PhoneNumberSelection";
// import { useHotelData } from "../../contexts/HotelDataContext"; // Import context

// function GuestDetailsForm() {
// 	const { countries } = useHotelData(); // Use countries from context

// 	const [formData, setFormData] = useState({
// 		firstName: "",
// 		lastName: "",
// 		email: "",
// 		country: "",
// 		phoneCode: countries?.[0]?.code || "", // Default to the first country's code
// 		phoneNumber: "",
// 	});

// 	const handleInputChange = (e) => {
// 		const { name, value } = e.target;
// 		setFormData((prev) => ({ ...prev, [name]: value }));
// 	};

// 	const handleCountrySelect = (country) => {
// 		setFormData((prev) => ({ ...prev, phoneCode: country.code }));
// 	};

// 	const validateEmail = (email) => {
// 		const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// 		return re.test(email);
// 	};

// 	const validatePhoneNumber = (phoneNumber) => {
// 		const re = /^\d{10}$/; // 10-digit phone number
// 		return re.test(phoneNumber);
// 	};

// 	return (
// 		<div>
// 			<div className="border p-4 shadow-lg w-full h-auto border-lightGrey mx-auto rounded-[10px] overflow-hidden bg-white">
// 				<h2 className="text-[24px] font-bold mb-4">Enter your details</h2>
// 				<hr className="border-t border-lightGrey mb-9" />
// 				<form className="space-y-4">
// 					<div className="grid grid-cols-2 gap-4">
// 						<div>
// 							<label htmlFor="firstName" className="block text-[16px] font-medium text-black">
// 								First name <span className="text-accentPink">*</span>
// 							</label>
// 							<input
// 								type="text"
// 								id="firstName"
// 								name="firstName"
// 								required
// 								value={formData.firstName}
// 								onChange={handleInputChange}
// 								className="mt-1 block w-full h-12 rounded-md border border-lightGrey shadow-sm focus:border-darkGrey focus:ring focus:ring-darkGrey focus:ring-opacity-50 placeholder:text-[14px] pl-4"
// 								placeholder="Enter your first name"
// 							/>
// 						</div>
// 						<div>
// 							<label htmlFor="lastName" className="block text-[16px] font-medium text-black">
// 								Last name <span className="text-accentPink">*</span>
// 							</label>
// 							<input
// 								type="text"
// 								id="lastName"
// 								name="lastName"
// 								required
// 								value={formData.lastName}
// 								onChange={handleInputChange}
// 								className="mt-1 block w-full h-12 rounded-md border border-lightGrey shadow-sm focus:border-darkGrey focus:ring focus:ring-darkGrey focus:ring-opacity-50 placeholder:text-[14px] pl-4"
// 								placeholder="Enter your last name"
// 							/>
// 						</div>
// 					</div>
// 					<div>
// 						<label htmlFor="email" className="block text-[16px] font-medium text-black">
// 							Email <span className="text-accentPink">*</span>
// 						</label>
// 						<input
// 							type="email"
// 							id="email"
// 							name="email"
// 							required
// 							value={formData.email}
// 							onChange={handleInputChange}
// 							className={`mt-1 block w-full h-12 rounded-md border border-lightGrey shadow-sm focus:border-darkGrey focus:ring focus:ring-darkGrey focus:ring-opacity-50 placeholder:text-[14px] pl-4 ${
// 								formData.email && !validateEmail(formData.email) ? "border-roomRed" : ""
// 							}`}
// 							placeholder="Enter your email address"
// 						/>
// 						{formData.email && !validateEmail(formData.email) && (
// 							<p className="text-roomRed text-[10px] mt-1">Please enter a valid email address.</p>
// 						)}
// 					</div>
// 					<label htmlFor="phoneNumber" className="block text-[16px] font-medium text-black">
// 						Phone Number <span className="text-accentPink">*</span>
// 					</label>
// 					<div className="flex items-center space-x-2">
// 						<PhoneNumberSelection
// 							countryData={countries} // Pass countries from context to PhoneNumberSelection
// 							onSelectCountry={handleCountrySelect}
// 						/>
// 						<input
// 							type="text"
// 							id="phoneNumber"
// 							name="phoneNumber"
// 							required
// 							value={formData.phoneNumber}
// 							onChange={handleInputChange}
// 							className={`block w-full h-12 rounded-md border border-lightGrey shadow-sm focus:border-darkGrey focus:ring focus:ring-darkGrey focus:ring-opacity-50 placeholder:text-[14px] pl-4 ${
// 								formData.phoneNumber && !validatePhoneNumber(formData.phoneNumber) ? "border-roomRed" : ""
// 							}`}
// 							placeholder="Enter your phone number"
// 						/>
// 						{formData.phoneNumber && !validatePhoneNumber(formData.phoneNumber) && (
// 							<p className="text-roomRed text-[10px]">Please enter a valid phone number.</p>
// 						)}
// 					</div>
// 				</form>
// 			</div>
// 		</div>
// 	);
// }

// export default GuestDetailsForm;















/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PhoneNumberSelection from "../../components/BookingFlow/PhoneNumberSelection";
import { useHotelData } from "../../contexts/HotelDataContext"; // Import context

function GuestDetailsForm() {
	const { countries } = useHotelData(); // Use countries from context

	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		country: "",
		phoneCode: countries?.[0]?.code || "", // Default to the first country's code
		phoneNumber: "",
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleCountrySelect = (country) => {
		setFormData((prev) => ({ ...prev, phoneCode: country.code }));
	};

	const validateEmail = (email) => {
		const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return re.test(email);
	};

	const validatePhoneNumber = (phoneNumber) => {
		const re = /^\d{10}$/; // 10-digit phone number
		return re.test(phoneNumber);
	};

	return (
		<div>
			<div className="border p-4 shadow-lg w-full h-auto border-lightGrey mx-auto rounded-[10px] bg-white">
				<h2 className="text-[24px] font-bold mb-4">Enter your details</h2>
				<hr className="border-t border-lightGrey mb-9" />
				<form className="space-y-4">
					<div className="grid grid-cols-2 gap-4">
						<div>
							<label htmlFor="firstName" className="block text-[16px] font-medium text-black">
								First name <span className="text-accentPink">*</span>
							</label>
							<input
								type="text"
								id="firstName"
								name="firstName"
								required
								value={formData.firstName}
								onChange={handleInputChange}
								className="mt-1 block w-full h-12 rounded-md border border-lightGrey shadow-sm focus:border-darkGrey focus:ring focus:ring-darkGrey focus:ring-opacity-50 placeholder:text-[14px] pl-4"
								placeholder="Enter your first name"
							/>
						</div>
						<div>
							<label htmlFor="lastName" className="block text-[16px] font-medium text-black">
								Last name <span className="text-accentPink">*</span>
							</label>
							<input
								type="text"
								id="lastName"
								name="lastName"
								required
								value={formData.lastName}
								onChange={handleInputChange}
								className="mt-1 block w-full h-12 rounded-md border border-lightGrey shadow-sm focus:border-darkGrey focus:ring focus:ring-darkGrey focus:ring-opacity-50 placeholder:text-[14px] pl-4"
								placeholder="Enter your last name"
							/>
						</div>
					</div>
					<div>
						<label htmlFor="email" className="block text-[16px] font-medium text-black">
							Email <span className="text-accentPink">*</span>
						</label>
						<input
							type="email"
							id="email"
							name="email"
							required
							value={formData.email}
							onChange={handleInputChange}
							className={`mt-1 block w-full h-12 rounded-md border border-lightGrey shadow-sm focus:border-darkGrey focus:ring focus:ring-darkGrey focus:ring-opacity-50 placeholder:text-[14px] pl-4 ${
								formData.email && !validateEmail(formData.email) ? "border-roomRed" : ""
							}`}
							placeholder="Enter your email address"
						/>
						{formData.email && !validateEmail(formData.email) && (
							<p className="text-roomRed text-[10px] mt-1">Please enter a valid email address.</p>
						)}
					</div>
					<label htmlFor="phoneNumber" className="block text-[16px] font-medium text-black">
						Phone Number <span className="text-accentPink">*</span>
					</label>
					<div className="flex items-center space-x-2">
						<PhoneNumberSelection
							onSelectCountry={handleCountrySelect} // Pass handleCountrySelect function
						/>
						<input
							type="text"
							id="phoneNumber"
							name="phoneNumber"
							required
							value={formData.phoneNumber}
							onChange={handleInputChange}
							className={`block w-full h-12 rounded-md border border-lightGrey shadow-sm focus:border-darkGrey focus:ring focus:ring-darkGrey focus:ring-opacity-50 placeholder:text-[14px] pl-4 ${
								formData.phoneNumber && !validatePhoneNumber(formData.phoneNumber) ? "border-roomRed" : ""
							}`}
							placeholder="Enter your phone number"
						/>
						{formData.phoneNumber && !validatePhoneNumber(formData.phoneNumber) && (
							<p className="text-roomRed text-[10px]">Please enter a valid phone number.</p>
						)}
					</div>
				</form>
			</div>
		</div>
	);
}

export default GuestDetailsForm;
