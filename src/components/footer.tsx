import { useNavigate } from "react-router-dom";

const Footer = () => {
	const navigate = useNavigate();
	const handlePartnerRegister = () => {
		navigate("/register", { state: { from: "partner" } });
	};

	return (
		<footer className="bg-blue-950 text-white px-12 sm:px-12 md:px-12 lg:px-16 py-8 sm:py-8 md:py-12 lg:py-12 mt-auto">
			<div
				id="mainFooter"
				className="flex flex-col gap-8 md:flex-row md:justify-between md:items-start w-full text-left py-4"
			>
				<div id="sec1" className="max-w-sm flex flex-col gap-3 p-4 items-start">
					<button
						onClick={handlePartnerRegister}
						className="text-lg font-semibold  text-yellow-400 hover:cursor-pointer"
					>
						Get involved
					</button>
					<p className="text-sm text-gray-400">
						Our mission is to widen access to justice by connecting those in
						need with legal professionals willing to help.
					</p>
				</div>

				<div id="sec3" className="max-w-sm flex flex-col gap-3 p-4">
					<h2 className="text-lg font-semibold">Contact</h2>
					<ul className="text-sm space-y-2.5 text-gray-400 ">
						<li>
							<a
								href="mailto:freelegal@gmail.com"
								className="hover:text-yellow-200"
							>
								Email Us: freelegal@gmail.com
							</a>
						</li>
						<li>
							<a href="tel:+233000000000" className="hover:text-yellow-200">
								Call Freelegal: (+233) 000-000-000
							</a>
						</li>
					</ul>
				</div>
				<div id="sec2" className="w-sm flex flex-col gap-3 p-4">
					<h2 className="text-lg font-semibold">Quick Links</h2>
					<ul className="text-sm space-y-2.5 text-gray-400 hover:transition-all duration-500 ease-in-out">
						<li>
							<a href="/" className="hover:text-yellow-200 ">
								Submit a case
							</a>
						</li>
						<li>
							<a href="/login" className="hover:text-yellow-200">
								Login
							</a>
						</li>
						<li>
							<a href="/register" className="hover:text-yellow-200">
								Register
							</a>
						</li>
					</ul>
				</div>
			</div>

			<hr className="my-6 border-gray-700" />

			<div id="copyright" className="text-sm text-center w-full p-4">
				&copy; {new Date().getFullYear()} Freelegal - Bridging Justice Gaps
			</div>
		</footer>
	);
};

export default Footer;
