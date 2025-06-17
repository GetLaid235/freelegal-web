import { useNavigate } from "react-router-dom";

const Card2 = ({
	title,
	subtitle,
	buttonText,
}: {
	title: string;
	subtitle: string;
	buttonText: string;
}) => {
	const navigate = useNavigate();

	const handleClick = () => {
		switch (buttonText.toLowerCase()) {
			case "submit your case":
				navigate("/submit", { state: { from: "whoSubmit" } });
				break;

			case "become a manager":
				navigate("/register", { state: { from: "whoVolunteer" } });
				break;

			case "join as a firm":
				navigate("/register", { state: { from: "whoFirm" } });
				break;
		}
	};

	return (
		<div className="flex flex-col items-start gap-4 bg-white flex-grow rounded-xl border shadow-[-3px_3px_12px_rgba(216,232,240,0.5)] w-[22rem] sm:w-full md:w-full lg:w-[24rem] p-5 transition-transform duration-200 hover:translate-y-[-0.3rem]">
			<p className="text-blue-950 font-semibold text-xl">{title}</p>
			<p className="text-slate-900/90 text-base">{subtitle}</p>
			<button
				onClick={handleClick}
				className="px-3 py-2 border border-blue-900 rounded-md font-medium"
			>
				{buttonText}
			</button>
		</div>
	);
};

export default Card2;
