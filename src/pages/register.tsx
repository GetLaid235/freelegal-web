import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Register = () => {
	const location = useLocation();

	// State for form fields
	const [userType, setUserType] = useState("volunteer"); // Default to 'volunteer'
	const [legalRepType, setLegalRepType] = useState(""); // firm or individual
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [schoolName, setSchoolName] = useState("");
	const [firmName, setFirmName] = useState("");
	const [locationField, setLocationField] = useState("");
	const [practiceArea, setPracticeArea] = useState("");

	useEffect(() => {
		if (location.state?.from === "partner") {
			const lawFirm = document.getElementById(
				"lawFirmRep"
			) as HTMLInputElement | null;

			if (lawFirm) lawFirm.checked = true;
		}
		if (location.state?.from === "heroVolunteer") {
			const requestAid = document.getElementById(
				"studentOrManager"
			) as HTMLInputElement | null;

			if (requestAid) requestAid.checked = true;
		}
		if (location.state?.from === "whoSubmit") {
			const requestAid = document.getElementById(
				"client"
			) as HTMLInputElement | null;

			if (requestAid) requestAid.checked = true;
		}
		if (location.state?.from === "whoVolunteer") {
			const requestAid = document.getElementById(
				"studentOrManager"
			) as HTMLInputElement | null;

			if (requestAid) requestAid.checked = true;
		}
		if (location.state?.from === "whoFirm") {
			const requestAid = document.getElementById(
				"lawFirmRep"
			) as HTMLInputElement | null;

			if (requestAid) requestAid.checked = true;
		}
	}, [location]);

	const isLegalRep = userType === "legalRep";
	const isFirmOrIndividualSelected =
		legalRepType === "firm" || legalRepType === "individual";

	// Validation logic
	const requiredLegalRepFields = [
		userType,
		name,
		email,
		password,
		confirmPassword,
		legalRepType,
		locationField,
		practiceArea,
	];
	const requiredFirmFields = [firmName];
	const isLegalRepFormValid =
		isLegalRep &&
		isFirmOrIndividualSelected &&
		requiredLegalRepFields.every(Boolean) &&
		(legalRepType === "firm" ? requiredFirmFields.every(Boolean) : true) &&
		password === confirmPassword;

	const requiredVolunteerFields = [
		userType,
		name,
		email,
		password,
		confirmPassword,
	];
	const isVolunteerFormValid =
		userType === "volunteer" &&
		requiredVolunteerFields.every(Boolean) &&
		password === confirmPassword;

	const isFormValid = isLegalRepFormValid || isVolunteerFormValid;

	const handleRegistration = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// ...submit logic
	};

	return (
		<>
			<nav className="w-full h-16 bg-blue-900 text-white items-center justify-between flex px-8 lg:px-20 fixed top-0 left-0 z-50 shadow-[0_1.5px_4px_-1px_rgba(255,255,255,0.3)]">
				<a href="/" className="text-xl font-bold">
					<img src="/" alt="freelegal logo" />
				</a>
			</nav>
			<div className="w-full min-h-screen flex mt-28 sm:28 md:mt-28 lg:mt-28 justify-center">
				<div className="w-[90%] sm:w-[80%] md:w[30rem] lg:w-[35rem] h-fit border-[1.1px] border-gray-200 rounded-md py-6 px-6 sm:py-6 sm:px-7 md:px-5 md:py-5 lg:px-7 lg:py-8 flex flex-col items-center">
					<div id="header" className="flex flex-col items-center mb-8">
						<h1 className="text-2xl font-semibold mb-3">
							Welcome to Freelegal
						</h1>
						<p className="font-normal text-gray-600">
							Enter your details to create your account
						</p>
					</div>
					<form
						onSubmit={handleRegistration}
						className="flex flex-col w-full gap-5"
					>
						<div
							id="userType"
							className="flex flex-col w-full text-[0.9rem] text-blue-950/95 font-semibold"
						>
							<p className="text-gray-900/80">
								I am registering as: <span className="text-red-500">*</span>
							</p>
							<div>
								<label
									htmlFor="volunteer-radio"
									className="flex gap-2 items-center cursor-pointer"
								>
									<input
										type="radio"
										id="volunteer-radio"
										name="userType"
										value="volunteer"
										checked={userType === "volunteer"}
										onChange={() => setUserType("volunteer")}
										required
										className="mt-[0.1rem] accent-blue-900 cursor-pointer"
									/>
									Law student / Account manager
								</label>
							</div>
							<div>
								<label
									htmlFor="legalRep-radio"
									className="flex gap-2 items-center cursor-pointer"
								>
									<input
										type="radio"
										id="legalRep-radio"
										name="userType"
										value="legalRep"
										checked={userType === "legalRep"}
										onChange={() => setUserType("legalRep")}
										required
										className="mt-[0.1rem] accent-blue-900 cursor-pointer"
									/>
									Legal Representative
								</label>
							</div>
						</div>
						{userType === "volunteer" && (
							<div id="volunteerForm" className="flex flex-col gap-4 mt-3">
								<label
									htmlFor="name"
									className="flex flex-col gap-2.5 text-gray-600 font-medium"
								>
									<span>
										Full Name <span className="text-red-500">*</span>
									</span>
									<input
										type="text"
										name="name"
										placeholder="John Doe"
										value={name}
										onChange={(e) => setName(e.target.value)}
										className="border-[0.7px] border-gray-300 rounded-md h-10 lg:h-10  px-3 font-normal text-black focus:outline focus:outline-1 focus:outline-blue-800"
									/>
									<p className="text-[0.81rem] text-slate-500">
										<span className="text-red-600">*</span> required field
									</p>
								</label>
								<label
									htmlFor="email"
									className="flex flex-col gap-2 text-gray-600 font-medium"
								>
									<span>
										Email <span className="text-red-500">*</span>
									</span>
									<input
										type="email"
										name="email"
										placeholder="name@example.com"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										className="border-[0.7px] border-gray-300 rounded-md h-10 lg:h-10  px-3 font-normal text-black focus:outline focus:outline-1 focus:outline-blue-800"
									/>
									<p className="text-[0.81rem] text-slate-500">
										<span className="text-red-600">*</span> required field
									</p>
								</label>
								<label
									htmlFor="password"
									className="flex flex-col gap-2 text-gray-600 font-medium"
								>
									<span>
										Password <span className="text-red-500">*</span>
									</span>
									<input
										type="password"
										name="password"
										placeholder="eg: **********"
										value={password}
										onChange={(e) => setPassword(e.target.value)}
										className="border-[0.7px] border-gray-300 rounded-md h-10 lg:h-10 px-3 font-normal text-black focus:outline focus:outline-1 focus:outline-blue-800"
									/>
									<p className="text-[0.81rem] text-slate-500">
										<span className="text-red-600">*</span> required field
									</p>
								</label>
								<label
									htmlFor="confirmPassword"
									className="flex flex-col gap-2 text-gray-600 font-medium"
								>
									<span>
										Confirm Password <span className="text-red-500">*</span>
									</span>
									<input
										type="password"
										name="confirmPassword"
										placeholder="eg: **********"
										value={confirmPassword}
										onChange={(e) => setConfirmPassword(e.target.value)}
										className="border-[0.3px] border-gray-300 rounded-md h-10 lg:h-10 px-3 font-normal text-black focus:outline focus:outline-1 focus:outline-blue-800"
									/>
									<p className="text-[0.81rem] text-slate-500">
										<span className="text-red-600">*</span> required field
									</p>
								</label>
								<label
									htmlFor="schoolName"
									className="flex flex-col gap-2 text-gray-600 font-medium"
								>
									School Name (optional)
									<input
										type="text"
										name="schoolName"
										id="schoolName"
										placeholder="eg: UPSA Law School"
										value={schoolName}
										onChange={(e) => setSchoolName(e.target.value)}
										className="border-[0.3px] border-gray-300 rounded-md h-10 lg:h-10 px-3 font-normal text-black focus:outline focus:outline-1 focus:outline-blue-800"
									/>
								</label>
							</div>
						)}
						{userType === "legalRep" && (
							<div id="legalRepForm" className="flex flex-col gap-4 mt-3">
								<label
									htmlFor="name"
									className="flex flex-col gap-2 text-gray-600 font-medium"
								>
									<span>
										Full Name <span className="text-red-500">*</span>
									</span>
									<input
										type="text"
										name="name"
										placeholder="John Doe"
										value={name}
										onChange={(e) => setName(e.target.value)}
										className="border-[0.7px] border-gray-300 rounded-md h-10 lg:h-10  px-3 font-normal text-black focus:outline focus:outline-1 focus:outline-blue-800"
									/>
									<p className="text-[0.81rem] text-slate-500">
										<span className="text-red-600">*</span> required field
									</p>
								</label>
								<label
									htmlFor="email"
									className="flex flex-col gap-2 text-gray-600 font-medium"
								>
									<span>
										Email <span className="text-red-500">*</span>
									</span>
									<input
										type="email"
										name="email"
										placeholder="name@example.com"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										className="border-[0.7px] border-gray-300 rounded-md h-10 lg:h-10  px-3 font-normal text-black focus:outline focus:outline-1 focus:outline-blue-800"
									/>
									<p className="text-[0.81rem] text-slate-500">
										<span className="text-red-600">*</span> required field
									</p>
								</label>
								<label
									htmlFor="password"
									className="flex flex-col gap-2 text-gray-600 font-medium"
								>
									<span>
										Password <span className="text-red-500">*</span>
									</span>
									<input
										type="password"
										name="password"
										placeholder="eg: **********"
										value={password}
										onChange={(e) => setPassword(e.target.value)}
										className="border-[0.7px] border-gray-300 rounded-md h-10 lg:h-10 px-3 font-normal text-black focus:outline focus:outline-1 focus:outline-blue-800"
									/>
									<p className="text-[0.81rem] text-slate-500">
										<span className="text-red-600">*</span> required field
									</p>
								</label>
								<label
									htmlFor="confirmPassword"
									className="flex flex-col gap-2 text-gray-600 font-medium"
								>
									<span>
										Confirm Password <span className="text-red-500">*</span>
									</span>
									<input
										type="password"
										name="confirmPassword"
										placeholder="eg: **********"
										value={confirmPassword}
										onChange={(e) => setConfirmPassword(e.target.value)}
										className="border-[0.3px] border-gray-300 rounded-md h-10 lg:h-10 px-3 font-normal text-black focus:outline focus:outline-1 focus:outline-blue-800"
									/>
									<p className="text-[0.81rem] text-slate-500">
										<span className="text-red-600">*</span> required field
									</p>
								</label>
								<span className="flex w-full gap-4 mt-5">
									<label
										htmlFor="firm-radio"
										className="flex gap-2 text-gray-600 font-medium cursor-pointer"
									>
										<input
											type="radio"
											id="firm-radio"
											name="firmOrIndividual"
											value="firm"
											checked={legalRepType === "firm"}
											onChange={() => setLegalRepType("firm")}
											required
											className="mt-[0.1rem] accent-blue-900 cursor-pointer"
										/>
										Firm
									</label>
									<label
										htmlFor="individual-radio"
										className="flex gap-2 text-gray-600 font-medium cursor-pointer"
									>
										<input
											type="radio"
											id="individual-radio"
											name="firmOrIndividual"
											value="individual"
											checked={legalRepType === "individual"}
											onChange={() => setLegalRepType("individual")}
											required
											className="mt-[0.1rem] accent-blue-900 cursor-pointer"
										/>
										Individual
									</label>
								</span>
								{legalRepType === "firm" && (
									<label
										htmlFor="firmName"
										className="flex flex-col gap-2.5 text-gray-600 font-medium w-full"
									>
										<span>
											Firm Name <span className="text-red-600">*</span>
										</span>
										<input
											type="text"
											name="firmName"
											id="firmName"
											placeholder="eg: Pearson Hardmann"
											value={firmName}
											onChange={(e) => setFirmName(e.target.value)}
											className=" border-[0.3px] border-gray-300 rounded-md h-10 lg:h-10 px-3 font-normal text-black focus:outline focus:outline-1 focus:outline-blue-800"
										/>
										<p className="text-[0.81rem] text-slate-500">
											<span className="text-red-600">*</span> required field
										</p>
									</label>
								)}
								{/* Area(s) of Practice and Location for both Firm and Individual */}
								<label
									htmlFor="locationField"
									className="flex flex-col gap-2.5 text-gray-600 font-medium w-full"
								>
									<span>
										Region/Location <span className="text-red-600">*</span>
									</span>
									<input
										type="text"
										name="locationField"
										id="locationField"
										placeholder="eg: Accra"
										value={locationField}
										onChange={(e) => setLocationField(e.target.value)}
										className=" border-[0.3px] border-gray-300 rounded-md h-10 lg:h-10 px-3 font-normal text-black focus:outline focus:outline-1 focus:outline-blue-800"
									/>
									<p className="text-[0.81rem] text-slate-500">
										<span className="text-red-600">*</span> required field
									</p>
								</label>
								<label
									htmlFor="practiceArea"
									className="flex flex-col gap-2.5 text-gray-600 font-medium w-full"
								>
									<span>
										Area(s) of Practice <span className="text-red-600">*</span>
									</span>
									<input
										type="text"
										name="practiceArea"
										id="practiceArea"
										placeholder="eg: Family Law, Criminal Law"
										value={practiceArea}
										onChange={(e) => setPracticeArea(e.target.value)}
										className=" border-[0.3px] border-gray-300 rounded-md h-10 lg:h-10 px-3 font-normal text-black focus:outline focus:outline-1 focus:outline-blue-800"
									/>
									<p className="text-[0.81rem] text-slate-500">
										<span className="text-red-600">*</span> required field
									</p>
								</label>
							</div>
						)}
						<button
							type="submit"
							disabled={!isFormValid}
							className={`w-full h-10 rounded-md mt-3 mb-1 ${
								isFormValid
									? "bg-blue-950 text-white"
									: "bg-gray-200 text-gray-400 cursor-not-allowed"
							}`}
						>
							Register
						</button>
					</form>
					<span className="text-sm mt-2">
						Already have an account?{" "}
						<a href="/login" className="text-blue-900 font-semibold">
							Login
						</a>
					</span>
				</div>
			</div>
		</>
	);
};

export default Register;
