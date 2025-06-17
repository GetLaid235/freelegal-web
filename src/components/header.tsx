import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
	const navigate = useNavigate();
	const [isOpen, setIsOpen] = useState(false);
	const toLogin = () => {
		navigate("/login");
	};
	const toRegister = () => {
		navigate("/register");
	};
	// const toContact = () => {
	// 	navigate("/contact")
	// };

	// const toNews = () => {
	// 	navigate("/news")
	// };

	return (
		<div className="w-screen">
			<nav className="w-full h-16 bg-blue-900 text-white items-center justify-between flex px-8 lg:px-20 fixed top-0 left-0 z-50  shadow-[0_1.5px_4px_-1px_rgba(255,255,255,0.3)]">
				<Link to="/" className="text-xl font-bold">
					<img src="/" alt="freelegal logo" />
				</Link>
				{/* Hamburger Icon (mobile) */}
				<div className="md:hidden">
					<button onClick={() => setIsOpen(!isOpen)}>
						{isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
					</button>
				</div>

				{/* Nav links (desktop) */}
				<ul className="hidden md:flex gap-6 mr-4 items-center">
					<li>
						<Link to="/">Contact</Link>
					</li>
					<li>
						<Link to="/login">Login</Link>
					</li>
					<li>
						<Link
							to="/register"
							className="w-fit px-4 py-1.5 h-8 bg-yellow-500 text-blue-950 font-medium rounded-md"
						>
							Register
						</Link>
					</li>
				</ul>

				{/* Nav links (mobile dropdown) */}
				<div
					className={`absolute top-[4rem] left-0 w-full flex flex-col gap-4 px-8 py-4 border-none md:hidden z-50 bg-blue-950/90 text-white font-medium transform transition-all duration-300 origin-top rounded-b-2xl border shadow-[-3px_3px_12px_rgba(0,0,0,0.2)] ${
						isOpen
							? "opacity-100 scale-y-100"
							: "opacity-0 scale-y-0 pointer-events-none"
					}`}
				>
					<button onClick={toLogin}>Login</button>
					<button onClick={toRegister}>Register</button>
					<button>Contact</button>
				</div>
			</nav>
		</div>
	);
};

export default Header;
